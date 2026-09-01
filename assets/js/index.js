/* This file is part of The BiTGApps Project */

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function resetDownloadForm() {
    // Reset Menu with IDs 0
    document.getElementById('software-0').value = "";
    document.getElementById('version-0').removeAttribute('data-version');
    if (typeof populatePlatforms === "function") {
        populatePlatforms();
    }
    // Reset Menu with IDs 1
    document.getElementById('software-1').value = "";
    if (typeof populatePlatformsSafe === "function") {
        populatePlatformsSafe();
    }
}

async function downloadRadioFile() {
    const radioButtons = document.querySelectorAll('input[name="downloadRadioFile"]');
    let fileName = null;

    // Find the currently checked radio element
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            fileName = radioButton.value; // Grabs "microG-Installer-20260822-122605-AUR-v0.3.16.zip"
            break;
        }
    }

    if (fileName) {
        const match1 = "microG-Installer-"; // Universal prefix string

        let match2 = "";
        const timeMatch = fileName.match(/-\d{6}-/);

        if (timeMatch) {
            const variantStartIndex = timeMatch.index + timeMatch.length - 1;
            match2 = fileName.substring(variantStartIndex); // Results in "-AUR-v0.3.16.zip"
        } else {
            const parts = fileName.split('-');
            if (parts.length >= 2) {
                match2 = `-${parts[parts.length - 2]}-${parts[parts.length - 1]}`;
            }
        }

        if (!match2) {
            alert("Error: Could not process the file structure template accurately.");
            return;
        }

        const downloadBtn = document.querySelector("button[onclick='downloadRadioFile()']");

        try {
            if (downloadBtn) {
                downloadBtn.disabled = true;
                downloadBtn.innerHTML = `<span role="status" class="spinner-border spinner-border-sm me-1" aria-hidden="true"></span>Preparing...`;
            }

            const response = await fetch(`https://build.bitgapps.io/transfer.php?action=token&m1=${encodeURIComponent(match1)}&m2=${encodeURIComponent(match2)}`);

            if (!response.ok) {
                throw new Error("Server refused to issue a secure token.");
            }

            // Construct URL payload and execute redirection to the server script
            const securePayload = await response.text();
            window.location.href = `https://build.bitgapps.io/transfer.php?d=${encodeURIComponent(securePayload)}`;
        } catch (error) {
            alert("Error preparing download: " + error.message);
        } finally {
            if (downloadBtn) {
                downloadBtn.disabled = false;
                downloadBtn.innerHTML = `<i class="bi bi-cloud-download me-1"></i>Download`;
            }
        }
    } else {
        alert('Please select a MicroGPlus version to download.');
    }
}

function resetRadioFile() {
    const checkedRadio = document.querySelector('input[name="downloadRadioFile"]:checked');
    if (checkedRadio) {
        checkedRadio.checked = false;
    }
}

let currentFileChecksumExt = "";

async function handleFetchChecksumExt() {
    const radioButtons = document.querySelectorAll('input[name="downloadRadioFile"]');
    let fileName = null;

    // Find the currently checked radio element
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            fileName = radioButton.value; // Grabs "microG-Installer-20260822-122605-AUR-v0.3.16.zip"
            break;
        }
    }

    if (fileName) {
        const match1 = "microG-Installer-"; // Universal prefix string

        let match2 = "";
        const timeMatch = fileName.match(/-\d{6}-/);

        if (timeMatch) {
            const variantStartIndex = timeMatch.index + timeMatch.length - 1;
            match2 = fileName.substring(variantStartIndex); // Results in "-AUR-v0.3.16.zip"
        } else {
            const parts = fileName.split('-');
            if (parts.length >= 2) {
                match2 = `-${parts[parts.length - 2]}-${parts[parts.length - 1]}`;
            }
        }

        if (!match2) {
            alert("Error: Could not process the file structure template accurately.");
            return;
        }

        const checksumBox = document.getElementById('checksum-box');
        const checksumView = document.getElementById('checksum-view');
        const checksumBtn = document.getElementById('checksum-btn');
        const saveHashBtn = document.getElementById('save-hash-btn');

        try {
            if (checksumBtn) {
                checksumBtn.disabled = true;
                checksumBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>Computing...`;
            }
            if (saveHashBtn) saveHashBtn.classList.add('d-none');

            checksumBox.classList.remove('d-none');
            checksumView.className = "text-muted";
            checksumView.innerText = "Computing live SHA-256 stream hash from GitHub asset...";

            const response = await fetch(`https://build.bitgapps.io/transfer.php?action=checksum&m1=${encodeURIComponent(match1)}&m2=${encodeURIComponent(match2)}`);

            if (!response.ok) {
                throw new Error(await response.text() || "Failed to process query.");
            }

            const data = await response.json();
            currentFileChecksumExt = data.hash;

            checksumView.className = "";
            checksumView.innerHTML = `<span class="text-success fw-bold">${data.type.toUpperCase()}:</span> <code>${data.hash}</code>`;

            if (saveHashBtn) saveHashBtn.classList.remove('d-none');
        } catch (error) {
            checksumView.innerHTML = `<span class="text-danger">Error: ${error.message}</span>`;
        } finally {
            if (checksumBtn) {
                checksumBtn.disabled = false;
                checksumBtn.innerHTML = `<i class="bi bi-shield-check me-1"></i>Request File Checksum`;
            }
        }
    } else {
        alert('Please select option before requesting a checksum.');
    }
}

function saveChecksumToClipboardExt() {
    if (!currentFileChecksumExt) return;
    navigator.clipboard.writeText(currentFileChecksumExt).then(() => {
        const saveHashBtn = document.getElementById('save-hash-btn');
        if (saveHashBtn) {
            saveHashBtn.className = "btn btn-success btn-sm";
            saveHashBtn.innerHTML = `<i class="bi bi-check-lg"></i> Saved!`;

            setTimeout(() => {
                saveHashBtn.className = "btn btn-outline-primary btn-sm";
                saveHashBtn.innerHTML = `<i class="bi bi-clipboard"></i> Save`;
            }, 2000);
        }
    }).catch(err => {
        console.error("Clipboard operational block encountered: ", err);
    });
}

/* @param {string} fileName - The filename extracted from the button click. */
async function downloadDirectFile(fileName) {
    if (!fileName) {
        alert("Error: No file specified for download.");
        return;
    }

    let match1 = "";
    let match2 = "";

    const timeMatch = fileName.match(/-\d{6}/); // e.g., "-123553"

    if (timeMatch) {
        const splitIndex = timeMatch.index + timeMatch[0].length;
        match1 = fileName.substring(0, splitIndex); // e.g., "uninstaller-20260822-123553"
        match2 = fileName.substring(splitIndex);    // e.g., ".zip"
    } else {
        const dotIndex = fileName.lastIndexOf('.');
        if (dotIndex !== -1) {
            match1 = fileName.substring(0, dotIndex);
            match2 = fileName.substring(dotIndex);
        }
    }

    if (!match1 || !match2) {
        alert("Error: Could not accurately process the file string template.");
        return;
    }

    const downloadBtn = document.querySelector(`button[onclick*="${fileName}"]`);
    const originalContent = downloadBtn ? downloadBtn.innerHTML : `<i class="fa-solid fa-arrow-up-right-from-square small me-2 flex-shrink-0"></i>Download`;

    try {
        if (downloadBtn) {
            downloadBtn.disabled = true;
            downloadBtn.innerHTML = `<span role="status" class="spinner-border spinner-border-sm me-1" aria-hidden="true"></span>Preparing...`;
        }

        const response = await fetch(`https://build.bitgapps.io/transfer.php?action=token&m1=${encodeURIComponent(match1)}&m2=${encodeURIComponent(match2)}`);

        if (!response.ok) {
            throw new Error("Server refused to issue a secure token.");
        }

        // Construct URL payload and execute redirection to the server script
        const securePayload = await response.text();
        window.location.href = `https://build.bitgapps.io/transfer.php?d=${encodeURIComponent(securePayload)}`;
    } catch (error) {
        alert("Error preparing download: " + error.message);
    } finally {
        if (downloadBtn) {
            downloadBtn.disabled = false;
            downloadBtn.innerHTML = originalContent;
        }
    }
}
