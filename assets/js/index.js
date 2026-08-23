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

function downloadRadioFile() {
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

        const payload = JSON.stringify({
            m1: match1,
            m2: match2
        });

        const encoded = btoa(payload);
        // Construct URL payload and execute redirection to the server script
        const serverUrl = "https://build.bitgapps.io/transfer.php";
        window.location.href = `${serverUrl}?d=${encodeURIComponent(encoded)}`;
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

/* @param {string} fileName - The filename extracted from the button click. */
function downloadDirectFile(fileName) {
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

    const payload = JSON.stringify({
        m1: match1,
        m2: match2
    });

    const encoded = btoa(payload);
    // Construct URL payload and execute redirection to the server script
    const serverUrl = "https://build.bitgapps.io/transfer.php";
    window.location.href = `${serverUrl}?d=${encodeURIComponent(encoded)}`;
}
