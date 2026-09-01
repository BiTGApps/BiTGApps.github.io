/* This file is part of The BiTGApps Project */

/*
 * Nested Map: Category -> Platform -> Version -> File Info
 */

const downloadLibrary = new Map([
    ['CORE', new Map([
        ['ARM64', new Map([
            ['17.0', { match1: '-arm64-', match2: '-17.0.0-20260822-193203-CORE.zip' }],
            ['16.0', { match1: '-arm64-', match2: '-16.0.0-20260822-141411-CORE.zip' }]
        ])]
    ])],
    ['MINI', new Map([
        ['ARM64', new Map([
            ['17.0', { match1: '-arm64-', match2: '-17.0.0-20260822-193203-MINI.zip' }],
            ['16.0', { match1: '-arm64-', match2: '-16.0.0-20260822-141411-MINI.zip' }]
        ])]
    ])],
    ['OMNI', new Map([
        ['ARM64', new Map([
            ['17.0', { match1: '-arm64-', match2: '-17.0.0-20260822-193203-OMNI.zip' }],
            ['16.0', { match1: '-arm64-', match2: '-16.0.0-20260822-141411-OMNI.zip' }]
        ])]
    ])],
    ['ROAR', new Map([
        ['ARM64', new Map([
            ['17.0', { match1: '-arm64-', match2: '-17.0.0-20260822-193203-ROAR.zip' }],
            ['16.0', { match1: '-arm64-', match2: '-16.0.0-20260822-141411-ROAR.zip' }]
        ])]
    ])],
    ['NANO', new Map([
        ['ARM64', new Map([
            ['17.0', { match1: '-arm64-', match2: '-17.0.0-20260822-193203-NANO.zip' }],
            ['16.0', { match1: '-arm64-', match2: '-16.0.0-20260822-141411-NANO.zip' }]
        ])]
    ])],
    ['ATOM', new Map([
        ['ARM64', new Map([
            ['17.0', { match1: '-arm64-', match2: '-17.0.0-20260822-193203-ATOM.zip' }],
            ['16.0', { match1: '-arm64-', match2: '-16.0.0-20260822-141411-ATOM.zip' }]
        ])]
    ])],
    ['PICO', new Map([
        ['ARM64', new Map([
            ['17.0', { match1: '-arm64-', match2: '-17.0.0-20260822-193203-PICO.zip' }],
            ['16.0', { match1: '-arm64-', match2: '-16.0.0-20260822-141411-PICO.zip' }]
        ])]
    ])],
    ['FULL', new Map([
        ['ARM64', new Map([
            ['17.0', { match1: '-arm64-', match2: '-17.0.0-20260822-193203-FULL.zip' }],
            ['16.0', { match1: '-arm64-', match2: '-16.0.0-20260822-141411-FULL.zip' }]
        ])]
    ])],
    ['TINT', new Map([
        ['ARM64', new Map([
            ['17.0', { match1: '-arm64-', match2: '-17.0.0-20260822-193203-TINT.zip' }],
            ['16.0', { match1: '-arm64-', match2: '-16.0.0-20260822-141411-TINT.zip' }]
        ])]
    ])],
    ['ADDON', new Map([
        ['ALL', new Map([
            ['17.0', new Map([
                ['AndroidAuto', { match1: 'AndroidAuto', match2: '-20260822-192423.zip' }],
                ['Calculator',  { match1: 'Calculator',  match2: '-20260822-192423.zip' }],
                ['Calendar',    { match1: 'Calendar',    match2: '-20260822-192423.zip' }],
                ['Chrome',      { match1: 'Chrome',      match2: '-20260822-192423.zip' }],
                ['Contacts',    { match1: 'Contacts',    match2: '-20260822-192423.zip' }],
                ['DeskClock',   { match1: 'DeskClock',   match2: '-20260822-192423.zip' }],
                ['WebView',     { match1: 'WebView',     match2: '-20260822-192423.zip' }],
                ['Wellbeing',   { match1: 'Wellbeing',   match2: '-20260822-192423.zip' }]
            ])],
            ['16.0', new Map([
                ['AndroidAuto', { match1: 'AndroidAuto', match2: '-20260822-130844.zip' }],
                ['Calculator',  { match1: 'Calculator',  match2: '-20260822-130844.zip' }],
                ['Calendar',    { match1: 'Calendar',    match2: '-20260822-130844.zip' }],
                ['Chrome',      { match1: 'Chrome',      match2: '-20260822-130844.zip' }],
                ['Contacts',    { match1: 'Contacts',    match2: '-20260822-130844.zip' }],
                ['DeskClock',   { match1: 'DeskClock',   match2: '-20260822-130844.zip' }],
                ['WebView',     { match1: 'WebView',     match2: '-20260822-130844.zip' }],
                ['Wellbeing',   { match1: 'Wellbeing',   match2: '-20260822-130844.zip' }]
            ])]
        ])],
        ['ARM64', new Map([
            ['17.0', new Map([
                ['Assistant',   { match1: 'Assistant',   match2: '-20260822-192423-ARM64.zip' }],
                ['Dialer',      { match1: 'Dialer',      match2: '-20260822-192423-ARM64.zip' }],
                ['Drive',       { match1: 'Drive',       match2: '-20260822-192423-ARM64.zip' }],
                ['Gmail',       { match1: 'Gmail',       match2: '-20260822-192423-ARM64.zip' }],
                ['GoogleTTS',   { match1: 'GoogleTTS',   match2: '-20260822-192423-ARM64.zip' }],
                ['Gboard',      { match1: 'LatinIME',    match2: '-20260822-192423-ARM64.zip' }],
                ['Maps',        { match1: 'Maps',        match2: '-20260822-192423-ARM64.zip' }],
                ['Markup',      { match1: 'Markup',      match2: '-20260822-192423-ARM64.zip' }],
                ['Messaging',   { match1: 'messaging',   match2: '-20260822-192423-ARM64.zip' }],
                ['Photos',      { match1: 'Photos',      match2: '-20260822-192423-ARM64.zip' }]
            ])],
            ['16.0', new Map([
                ['Assistant',   { match1: 'Assistant',   match2: '-20260822-130844-ARM64.zip' }],
                ['Dialer',      { match1: 'Dialer',      match2: '-20260822-130844-ARM64.zip' }],
                ['Drive',       { match1: 'Drive',       match2: '-20260822-130844-ARM64.zip' }],
                ['Gmail',       { match1: 'Gmail',       match2: '-20260822-130844-ARM64.zip' }],
                ['GoogleTTS',   { match1: 'GoogleTTS',   match2: '-20260822-130844-ARM64.zip' }],
                ['Gboard',      { match1: 'LatinIME',    match2: '-20260822-130844-ARM64.zip' }],
                ['Maps',        { match1: 'Maps',        match2: '-20260822-130844-ARM64.zip' }],
                ['Markup',      { match1: 'Markup',      match2: '-20260822-130844-ARM64.zip' }],
                ['Messaging',   { match1: 'messaging',   match2: '-20260822-130844-ARM64.zip' }],
                ['Photos',      { match1: 'Photos',      match2: '-20260822-130844-ARM64.zip' }]
            ])]
        ])]
    ])]
]);

// Helper to clear and populate a dropdown
function updateDropdown(id, options, text) {
    const el = document.getElementById(id);
    el.innerHTML = `<option value="" hidden>${text}</option>`;
    options.forEach(opt => {
        let o = document.createElement('option');
        o.value = opt;
        o.textContent = opt;
        el.appendChild(o);
    });
    el.disabled = options.length === 0;
}

function populatePlatforms() {
    const soft = document.getElementById('software-0').value;
    const platforms = soft ? Array.from(downloadLibrary.get(soft).keys()) : [];
    updateDropdown('platform-0', platforms, 'Select Platform');
    updateDropdown('version-0', [], 'Select Version'); // Reset version
}

function populateVersions() {
    const soft = document.getElementById('software-0').value;
    const platforms = document.getElementById('platform-0').value;
    const versions = (soft && platforms) ? Array.from(downloadLibrary.get(soft).get(platforms).keys()) : [];
    document.getElementById('version-0').removeAttribute('data-version');
    updateDropdown('version-0', versions, 'Select Version');
    if (soft === 'ADDON' && platforms) {
        const versionSelect = document.getElementById('version-0');
        versionSelect.onchange = function() {
            const selectedVersion = this.value;
            if (!selectedVersion) return;
            versionSelect.setAttribute('data-version', selectedVersion);
            const packagesMap = downloadLibrary.get('ADDON').get(platforms).get(selectedVersion);
            if (packagesMap) {
                const packages = Array.from(packagesMap.keys());
                updateDropdown('version-0', packages, 'Select Package');
                versionSelect.onchange = null;
            }
        }
    } else {
        document.getElementById('version-0').onchange = null;
    }
}

async function handleDownload() {
    const s = document.getElementById('software-0').value;
    const p = document.getElementById('platform-0').value;
    const v = document.getElementById('version-0').value;

    const downloadBtn = document.querySelector("button[onclick='handleDownload()']");

    if (s !== 'ADDON') {
        fileData = downloadLibrary.get(s)?.get(p)?.get(v);
    } else {
        const savedVersion = document.getElementById('version-0').getAttribute('data-version');
        if (savedVersion) {
            fileData = downloadLibrary.get('ADDON')?.get(p)?.get(savedVersion)?.get(v);
        }
    }

    // Send the specific match parameters down to the server
    if (fileData) {
        try {
            if (downloadBtn) {
                downloadBtn.disabled = true;
                downloadBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>Preparing...`;
            }

            const response = await fetch(`https://build.bitgapps.io/download.php?action=token&m1=${encodeURIComponent(fileData.match1)}&m2=${encodeURIComponent(fileData.match2)}`);

            if (!response.ok) {
                throw new Error("Server refused to issue a secure token.");
            }

            const securePayload = await response.text();
            window.location.href = `https://build.bitgapps.io/download.php?d=${encodeURIComponent(securePayload)}`;
        } catch (error) {
            alert("Error preparing download: " + error.message);
        } finally {
            if (downloadBtn) {
                downloadBtn.disabled = false;
                downloadBtn.innerHTML = `<i class="bi bi-cloud-download me-1"></i>Download Selected File`;
            }
        }
    } else {
        alert("Please select all options to fetch the download link.");
    }
}

let currentFileChecksum = "";

async function handleFetchChecksum() {
    const s = document.getElementById('software-0').value;
    const p = document.getElementById('platform-0').value;
    const v = document.getElementById('version-0').value;

    const checksumBox = document.getElementById('checksum-box');
    const checksumView = document.getElementById('checksum-view');
    const checksumBtn = document.getElementById('checksum-btn');
    const saveHashBtn = document.getElementById('save-hash-btn');

    if (s !== 'ADDON') {
        fileData = downloadLibrary.get(s)?.get(p)?.get(v);
    } else {
        const savedVersion = document.getElementById('version-0').getAttribute('data-version');
        if (savedVersion) {
            fileData = downloadLibrary.get('ADDON')?.get(p)?.get(savedVersion)?.get(v);
        }
    }

    if (!fileData) {
        alert("Please select options before requesting a checksum.");
        return;
    }

    try {
        if (checksumBtn) {
            checksumBtn.disabled = true;
            checksumBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>Computing...`;
        }
        if (saveHashBtn) saveHashBtn.classList.add('d-none');

        checksumBox.classList.remove('d-none');
        checksumView.className = "text-muted";
        checksumView.innerText = "Computing live SHA-256 stream hash from GitHub asset...";

        const response = await fetch(`https://build.bitgapps.io/download.php?action=checksum&m1=${encodeURIComponent(fileData.match1)}&m2=${encodeURIComponent(fileData.match2)}`);

        if (!response.ok) {
            throw new Error(await response.text() || "Failed to process query.");
        }

        const data = await response.json();
        currentFileChecksum = data.hash;

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
}

function saveChecksumToClipboard() {
    if (!currentFileChecksum) return;
    navigator.clipboard.writeText(currentFileChecksum).then(() => {
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
