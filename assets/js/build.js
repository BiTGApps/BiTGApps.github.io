/* This file is part of The BiTGApps Project */

/*
 * Nested Map: Category -> Platform -> Version -> File Info
 */

const downloadLibrarySafe = new Map([
    ['CORE', new Map([
        ['ARM', new Map([
            ['15.0',  { match1: '-arm-',   match2: '-15.0.0-20260822-112657-CORE.zip' }],
            ['14.0',  { match1: '-arm-',   match2: '-14.0.0-20260822-112657-CORE.zip' }],
            ['13.0',  { match1: '-arm-',   match2: '-13.0.0-20260822-112657-CORE.zip' }],
            ['12.1',  { match1: '-arm-',   match2: '-12.1.0-20260822-112657-CORE.zip' }],
            ['12.0',  { match1: '-arm-',   match2: '-12.0.0-20260822-112657-CORE.zip' }],
            ['11.0',  { match1: '-arm-',   match2: '-11.0.0-20260822-112657-CORE.zip' }],
            ['10.0',  { match1: '-arm-',   match2: '-10.0.0-20260822-112657-CORE.zip' }],
            ['9.0',   { match1: '-arm-',   match2: '-9.0.0-20260822-112657-CORE.zip' }],
            ['8.1.0', { match1: '-arm-',   match2: '-8.1.0-20260822-112657-CORE.zip' }],
            ['8.0.0', { match1: '-arm-',   match2: '-8.0.0-20260822-112657-CORE.zip' }],
            ['7.1.2', { match1: '-arm-',   match2: '-7.1.2-20260822-112657-CORE.zip' }],
            ['7.1.1', { match1: '-arm-',   match2: '-7.1.1-20260822-112657-CORE.zip' }]
        ])],
        ['ARM64', new Map([
            ['15.0',  { match1: '-arm64-', match2: '-15.0.0-20260822-112657-CORE.zip' }],
            ['14.0',  { match1: '-arm64-', match2: '-14.0.0-20260822-112657-CORE.zip' }],
            ['13.0',  { match1: '-arm64-', match2: '-13.0.0-20260822-112657-CORE.zip' }],
            ['12.1',  { match1: '-arm64-', match2: '-12.1.0-20260822-112657-CORE.zip' }],
            ['12.0',  { match1: '-arm64-', match2: '-12.0.0-20260822-112657-CORE.zip' }],
            ['11.0',  { match1: '-arm64-', match2: '-11.0.0-20260822-112657-CORE.zip' }],
            ['10.0',  { match1: '-arm64-', match2: '-10.0.0-20260822-112657-CORE.zip' }],
            ['9.0',   { match1: '-arm64-', match2: '-9.0.0-20260822-112657-CORE.zip' }],
            ['8.1.0', { match1: '-arm64-', match2: '-8.1.0-20260822-112657-CORE.zip' }],
            ['8.0.0', { match1: '-arm64-', match2: '-8.0.0-20260822-112657-CORE.zip' }],
            ['7.1.2', { match1: '-arm64-', match2: '-7.1.2-20260822-112657-CORE.zip' }],
            ['7.1.1', { match1: '-arm64-', match2: '-7.1.1-20260822-112657-CORE.zip' }]
        ])]
    ])],
    ['MINI', new Map([
        ['ARM', new Map([
            ['15.0',  { match1: '-arm-',   match2: '-15.0.0-20260822-112657-MINI.zip' }],
            ['14.0',  { match1: '-arm-',   match2: '-14.0.0-20260822-112657-MINI.zip' }],
            ['13.0',  { match1: '-arm-',   match2: '-13.0.0-20260822-112657-MINI.zip' }],
            ['12.1',  { match1: '-arm-',   match2: '-12.1.0-20260822-112657-MINI.zip' }],
            ['12.0',  { match1: '-arm-',   match2: '-12.0.0-20260822-112657-MINI.zip' }],
            ['11.0',  { match1: '-arm-',   match2: '-11.0.0-20260822-112657-MINI.zip' }],
            ['10.0',  { match1: '-arm-',   match2: '-10.0.0-20260822-112657-MINI.zip' }],
            ['9.0',   { match1: '-arm-',   match2: '-9.0.0-20260822-112657-MINI.zip' }],
            ['8.1.0', { match1: '-arm-',   match2: '-8.1.0-20260822-112657-MINI.zip' }],
            ['8.0.0', { match1: '-arm-',   match2: '-8.0.0-20260822-112657-MINI.zip' }],
            ['7.1.2', { match1: '-arm-',   match2: '-7.1.2-20260822-112657-MINI.zip' }],
            ['7.1.1', { match1: '-arm-',   match2: '-7.1.1-20260822-112657-MINI.zip' }]
        ])],
        ['ARM64', new Map([
            ['15.0',  { match1: '-arm64-', match2: '-15.0.0-20260822-112657-MINI.zip' }],
            ['14.0',  { match1: '-arm64-', match2: '-14.0.0-20260822-112657-MINI.zip' }],
            ['13.0',  { match1: '-arm64-', match2: '-13.0.0-20260822-112657-MINI.zip' }],
            ['12.1',  { match1: '-arm64-', match2: '-12.1.0-20260822-112657-MINI.zip' }],
            ['12.0',  { match1: '-arm64-', match2: '-12.0.0-20260822-112657-MINI.zip' }],
            ['11.0',  { match1: '-arm64-', match2: '-11.0.0-20260822-112657-MINI.zip' }],
            ['10.0',  { match1: '-arm64-', match2: '-10.0.0-20260822-112657-MINI.zip' }],
            ['9.0',   { match1: '-arm64-', match2: '-9.0.0-20260822-112657-MINI.zip' }],
            ['8.1.0', { match1: '-arm64-', match2: '-8.1.0-20260822-112657-MINI.zip' }],
            ['8.0.0', { match1: '-arm64-', match2: '-8.0.0-20260822-112657-MINI.zip' }],
            ['7.1.2', { match1: '-arm64-', match2: '-7.1.2-20260822-112657-MINI.zip' }],
            ['7.1.1', { match1: '-arm64-', match2: '-7.1.1-20260822-112657-MINI.zip' }]
        ])]
    ])],
    ['OMNI', new Map([
        ['ARM', new Map([
            ['15.0',  { match1: '-arm-',   match2: '-15.0.0-20260822-112657-OMNI.zip' }],
            ['14.0',  { match1: '-arm-',   match2: '-14.0.0-20260822-112657-OMNI.zip' }],
            ['13.0',  { match1: '-arm-',   match2: '-13.0.0-20260822-112657-OMNI.zip' }],
            ['12.1',  { match1: '-arm-',   match2: '-12.1.0-20260822-112657-OMNI.zip' }],
            ['12.0',  { match1: '-arm-',   match2: '-12.0.0-20260822-112657-OMNI.zip' }],
            ['11.0',  { match1: '-arm-',   match2: '-11.0.0-20260822-112657-OMNI.zip' }],
            ['10.0',  { match1: '-arm-',   match2: '-10.0.0-20260822-112657-OMNI.zip' }],
            ['9.0',   { match1: '-arm-',   match2: '-9.0.0-20260822-112657-OMNI.zip' }],
            ['8.1.0', { match1: '-arm-',   match2: '-8.1.0-20260822-112657-OMNI.zip' }],
            ['8.0.0', { match1: '-arm-',   match2: '-8.0.0-20260822-112657-OMNI.zip' }],
            ['7.1.2', { match1: '-arm-',   match2: '-7.1.2-20260822-112657-OMNI.zip' }],
            ['7.1.1', { match1: '-arm-',   match2: '-7.1.1-20260822-112657-OMNI.zip' }]
        ])],
        ['ARM64', new Map([
            ['15.0',  { match1: '-arm64-', match2: '-15.0.0-20260822-112657-OMNI.zip' }],
            ['14.0',  { match1: '-arm64-', match2: '-14.0.0-20260822-112657-OMNI.zip' }],
            ['13.0',  { match1: '-arm64-', match2: '-13.0.0-20260822-112657-OMNI.zip' }],
            ['12.1',  { match1: '-arm64-', match2: '-12.1.0-20260822-112657-OMNI.zip' }],
            ['12.0',  { match1: '-arm64-', match2: '-12.0.0-20260822-112657-OMNI.zip' }],
            ['11.0',  { match1: '-arm64-', match2: '-11.0.0-20260822-112657-OMNI.zip' }],
            ['10.0',  { match1: '-arm64-', match2: '-10.0.0-20260822-112657-OMNI.zip' }],
            ['9.0',   { match1: '-arm64-', match2: '-9.0.0-20260822-112657-OMNI.zip' }],
            ['8.1.0', { match1: '-arm64-', match2: '-8.1.0-20260822-112657-OMNI.zip' }],
            ['8.0.0', { match1: '-arm64-', match2: '-8.0.0-20260822-112657-OMNI.zip' }],
            ['7.1.2', { match1: '-arm64-', match2: '-7.1.2-20260822-112657-OMNI.zip' }],
            ['7.1.1', { match1: '-arm64-', match2: '-7.1.1-20260822-112657-OMNI.zip' }]
        ])]
    ])],
    ['ROAR', new Map([
        ['ARM', new Map([
            ['15.0',  { match1: '-arm-',   match2: '-15.0.0-20260822-112657-ROAR.zip' }],
            ['14.0',  { match1: '-arm-',   match2: '-14.0.0-20260822-112657-ROAR.zip' }],
            ['13.0',  { match1: '-arm-',   match2: '-13.0.0-20260822-112657-ROAR.zip' }],
            ['12.1',  { match1: '-arm-',   match2: '-12.1.0-20260822-112657-ROAR.zip' }],
            ['12.0',  { match1: '-arm-',   match2: '-12.0.0-20260822-112657-ROAR.zip' }],
            ['11.0',  { match1: '-arm-',   match2: '-11.0.0-20260822-112657-ROAR.zip' }],
            ['10.0',  { match1: '-arm-',   match2: '-10.0.0-20260822-112657-ROAR.zip' }],
            ['9.0',   { match1: '-arm-',   match2: '-9.0.0-20260822-112657-ROAR.zip' }],
            ['8.1.0', { match1: '-arm-',   match2: '-8.1.0-20260822-112657-ROAR.zip' }],
            ['8.0.0', { match1: '-arm-',   match2: '-8.0.0-20260822-112657-ROAR.zip' }],
            ['7.1.2', { match1: '-arm-',   match2: '-7.1.2-20260822-112657-ROAR.zip' }],
            ['7.1.1', { match1: '-arm-',   match2: '-7.1.1-20260822-112657-ROAR.zip' }]
        ])],
        ['ARM64', new Map([
            ['15.0',  { match1: '-arm64-', match2: '-15.0.0-20260822-112657-ROAR.zip' }],
            ['14.0',  { match1: '-arm64-', match2: '-14.0.0-20260822-112657-ROAR.zip' }],
            ['13.0',  { match1: '-arm64-', match2: '-13.0.0-20260822-112657-ROAR.zip' }],
            ['12.1',  { match1: '-arm64-', match2: '-12.1.0-20260822-112657-ROAR.zip' }],
            ['12.0',  { match1: '-arm64-', match2: '-12.0.0-20260822-112657-ROAR.zip' }],
            ['11.0',  { match1: '-arm64-', match2: '-11.0.0-20260822-112657-ROAR.zip' }],
            ['10.0',  { match1: '-arm64-', match2: '-10.0.0-20260822-112657-ROAR.zip' }],
            ['9.0',   { match1: '-arm64-', match2: '-9.0.0-20260822-112657-ROAR.zip' }],
            ['8.1.0', { match1: '-arm64-', match2: '-8.1.0-20260822-112657-ROAR.zip' }],
            ['8.0.0', { match1: '-arm64-', match2: '-8.0.0-20260822-112657-ROAR.zip' }],
            ['7.1.2', { match1: '-arm64-', match2: '-7.1.2-20260822-112657-ROAR.zip' }],
            ['7.1.1', { match1: '-arm64-', match2: '-7.1.1-20260822-112657-ROAR.zip' }]
        ])]
    ])],
    ['NANO', new Map([
        ['ARM64', new Map([
            ['15.0',  { match1: '-arm64-', match2: '-15.0.0-20260822-112657-NANO.zip' }],
            ['14.0',  { match1: '-arm64-', match2: '-14.0.0-20260822-112657-NANO.zip' }]
        ])]
    ])],
    ['ATOM', new Map([
        ['ARM64', new Map([
            ['15.0',  { match1: '-arm64-', match2: '-15.0.0-20260822-112657-ATOM.zip' }],
            ['14.0',  { match1: '-arm64-', match2: '-14.0.0-20260822-112657-ATOM.zip' }]
        ])]
    ])],
    ['PICO', new Map([
        ['ARM64', new Map([
            ['15.0',  { match1: '-arm64-', match2: '-15.0.0-20260822-112657-PICO.zip' }],
            ['14.0',  { match1: '-arm64-', match2: '-14.0.0-20260822-112657-PICO.zip' }]
        ])]
    ])],
    ['FULL', new Map([
        ['ARM64', new Map([
            ['15.0',  { match1: '-arm64-', match2: '-15.0.0-20260822-112657-FULL.zip' }],
            ['14.0',  { match1: '-arm64-', match2: '-14.0.0-20260822-112657-FULL.zip' }]
        ])]
    ])],
    ['TINT', new Map([
        ['ARM64', new Map([
            ['15.0',  { match1: '-arm64-', match2: '-15.0.0-20260822-112657-TINT.zip' }],
            ['14.0',  { match1: '-arm64-', match2: '-14.0.0-20260822-112657-TINT.zip' }]
        ])]
    ])],
    ['ADDON', new Map([
        ['ALL', new Map([
            ['AndroidAuto', { match1: 'AndroidAuto', match2: '-20260822-122221.zip' }],
            ['Calculator',  { match1: 'Calculator',  match2: '-20260822-122221.zip' }],
            ['Calendar',    { match1: 'Calendar',    match2: '-20260822-122221.zip' }],
            ['Chrome',      { match1: 'Chrome',      match2: '-20260822-122221.zip' }],
            ['Contacts',    { match1: 'Contacts',    match2: '-20260822-122221.zip' }],
            ['DeskClock',   { match1: 'DeskClock',   match2: '-20260822-122221.zip' }],
            ['WebView',     { match1: 'WebView',     match2: '-20260822-122221.zip' }],
            ['Wellbeing',   { match1: 'Wellbeing',   match2: '-20260822-122221.zip' }]
        ])],
        ['ARM', new Map([
            ['Assistant',   { match1: 'Assistant',   match2: '-20260822-122221-ARM.zip' }],
            ['Dialer',      { match1: 'Dialer',      match2: '-20260822-122221-ARM.zip' }],
            ['Drive',       { match1: 'Drive',       match2: '-20260822-122221-ARM.zip' }],
            ['Gmail',       { match1: 'Gmail',       match2: '-20260822-122221-ARM.zip' }],
            ['GoogleTTS',   { match1: 'GoogleTTS',   match2: '-20260822-122221-ARM.zip' }],
            ['Gboard',      { match1: 'LatinIME',    match2: '-20260822-122221-ARM.zip' }],
            ['Maps',        { match1: 'Maps',        match2: '-20260822-122221-ARM.zip' }],
            ['Markup',      { match1: 'Markup',      match2: '-20260822-122221-ARM.zip' }],
            ['Messaging',   { match1: 'Messaging',   match2: '-20260822-122221-ARM.zip' }],
            ['Photos',      { match1: 'Photos',      match2: '-20260822-122221-ARM.zip' }]
        ])],
        ['ARM64', new Map([
            ['Assistant',   { match1: 'Assistant',   match2: '-20260822-122221-ARM64.zip' }],
            ['Dialer',      { match1: 'Dialer',      match2: '-20260822-122221-ARM64.zip' }],
            ['Drive',       { match1: 'Drive',       match2: '-20260822-122221-ARM64.zip' }],
            ['Gmail',       { match1: 'Gmail',       match2: '-20260822-122221-ARM64.zip' }],
            ['GoogleTTS',   { match1: 'GoogleTTS',   match2: '-20260822-122221-ARM64.zip' }],
            ['Gboard',      { match1: 'LatinIME',    match2: '-20260822-122221-ARM64.zip' }],
            ['Maps',        { match1: 'Maps',        match2: '-20260822-122221-ARM64.zip' }],
            ['Markup',      { match1: 'Markup',      match2: '-20260822-122221-ARM64.zip' }],
            ['Messaging',   { match1: 'Messaging',   match2: '-20260822-122221-ARM64.zip' }],
            ['Photos',      { match1: 'Photos',      match2: '-20260822-122221-ARM64.zip' }]
        ])]
    ])]
]);

// Helper to clear and populate a dropdown
function updateDropdownSafe(id, options, text) {
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

function populatePlatformsSafe() {
    const soft = document.getElementById('software-1').value;
    const platforms = soft ? Array.from(downloadLibrarySafe.get(soft).keys()) : [];
    updateDropdownSafe('platform-1', platforms, 'Select Platform');
    updateDropdownSafe('version-1', [], 'Select Version'); // Reset version
}

function populateVersionsSafe() {
    const soft = document.getElementById('software-1').value;
    const platforms = document.getElementById('platform-1').value;
    const versions = (soft && platforms) ? Array.from(downloadLibrarySafe.get(soft).get(platforms).keys()) : [];
    updateDropdownSafe('version-1', versions, 'Select Version');
}

async function handleDownloadSafe() {
    const s = document.getElementById('software-1').value;
    const p = document.getElementById('platform-1').value;
    const v = document.getElementById('version-1').value;

    const downloadBtn = document.querySelector("button[onclick='handleDownloadSafe()']");

    // Final fetch from the nested map
    const fileData = downloadLibrarySafe.get(s)?.get(p)?.get(v);

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

let currentFileChecksumSafe = "";

async function handleFetchChecksumSafe() {
    const s = document.getElementById('software-1').value;
    const p = document.getElementById('platform-1').value;
    const v = document.getElementById('version-1').value;

    const checksumBox = document.getElementById('checksum-box-safe');
    const checksumView = document.getElementById('checksum-view-safe');
    const checksumBtn = document.getElementById('checksum-btn-safe');
    const saveHashBtn = document.getElementById('save-hash-btn-safe');

    const fileData = downloadLibrarySafe.get(s)?.get(p)?.get(v);

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
        currentFileChecksumSafe = data.hash;

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

function saveChecksumToClipboardSafe() {
    if (!currentFileChecksumSafe) return;
    navigator.clipboard.writeText(currentFileChecksumSafe).then(() => {
        const saveHashBtn = document.getElementById('save-hash-btn-safe');
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
