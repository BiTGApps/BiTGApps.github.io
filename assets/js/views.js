/* This file is part of The BiTGApps Project */

async function fetchBuildFiles() {
    const usernameInput = document.getElementById('username').value.trim();
    const fileZone = document.getElementById('file-viewer-zone');
    const fileList = document.getElementById('file-list');
    const errorText = document.getElementById('error-text');

    fileZone.style.display = 'none';
    errorText.style.display = 'none';
    fileList.innerHTML = '';

    if (!usernameInput) {
        errorText.textContent = "Please enter a username.";
        errorText.style.display = "block";
        return;
    }

    const username = usernameInput.replace(/[^a-zA-Z0-9-_]/g, '');

    try {
        const response = await fetch(`https://build.bitgapps.io/viewer.php?username=${username}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "An error occurred while fetching files.");
        }

        if (data.length === 0) {
            throw new Error("Folder exists, but it has no files.");
        }

        data.forEach(fileName => {
            const li = document.createElement('li');
            li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'text-start');

            const link = document.createElement('a');
            link.href = `https://build.bitgapps.io/${username}/${fileName}`;
            link.textContent = fileName;
            link.setAttribute('download', '');
            link.classList.add('text-decoration-none', 'fw-medium', 'text-truncate', 'text-wrap');

            const downloadBtn = document.createElement('span');
            downloadBtn.classList.add('badge', 'bg-primary', 'rounded-pill');
            downloadBtn.innerHTML = '<i class="bi bi-download"></i> Download';

            li.appendChild(link);
            li.appendChild(downloadBtn);
            fileList.appendChild(li);
        });

        fileZone.className = 'd-flex flex-column align-items-center w-100';
        fileZone.style.display = 'flex';

    } catch (error) {
        errorText.textContent = error.message;
        errorText.style.display = "block";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('username');
    if (inputField) {
        inputField.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') fetchBuildFiles();
        });
    }
});
