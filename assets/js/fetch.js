/* This file is part of The BiTGApps Project */

/*
 * Nested Map: Category -> Platform -> Version -> File Info
 */

const downloadLibrary = new Map([
    ['CORE', new Map([
        ['arm64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/v5.7-release/BiTGApps-arm64-16.0.0-v5.7-CORE.zip' }]
        ])]
    ])],
    ['MINI', new Map([
        ['arm64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/v5.7-release/BiTGApps-arm64-16.0.0-v5.7-MINI.zip' }]
        ])]
    ])],
    ['OMNI', new Map([
        ['arm64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/v5.7-release/BiTGApps-arm64-16.0.0-v5.7-OMNI.zip' }]
        ])]
    ])],
    ['ROAR', new Map([
        ['arm64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/v5.7-release/BiTGApps-arm64-16.0.0-v5.7-ROAR.zip' }]
        ])]
    ])],
    ['NANO', new Map([
        ['arm64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/v5.7-release/BiTGApps-arm64-16.0.0-v5.7-NANO.zip' }]
        ])]
    ])],
    ['ATOM', new Map([
        ['arm64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/v5.7-release/BiTGApps-arm64-16.0.0-v5.7-ATOM.zip' }]
        ])]
    ])],
    ['PICO', new Map([
        ['arm64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/v5.7-release/BiTGApps-arm64-16.0.0-v5.7-PICO.zip' }]
        ])]
    ])],
    ['FULL', new Map([
        ['arm64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/v5.7-release/BiTGApps-arm64-16.0.0-v5.7-FULL.zip' }]
        ])]
    ])],
    ['TINT', new Map([
        ['arm64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/v5.7-release/BiTGApps-arm64-16.0.0-v5.7-TINT.zip' }]
        ])]
    ])]
]);

// Helper to clear and populate a dropdown
function updateDropdown(id, options) {
    const el = document.getElementById(id);
    el.innerHTML = `<option value="" hidden>Select ${id.charAt(0).toUpperCase() + id.slice(1)}</option>`;
    options.forEach(opt => {
        let o = document.createElement('option');
        o.value = opt;
        o.textContent = opt.toUpperCase();
        el.appendChild(o);
    });
    el.disabled = options.length === 0;
}

function populatePlatforms() {
    const soft = document.getElementById('software').value;
    const platforms = soft ? Array.from(downloadLibrary.get(soft).keys()) : [];
    updateDropdown('platform', platforms);
    updateDropdown('version', []); // Reset version
}

function populateVersions() {
    const soft = document.getElementById('software').value;
    const platforms = document.getElementById('platform').value;
    const versions = (soft && platforms) ? Array.from(downloadLibrary.get(soft).get(platforms).keys()) : [];
    updateDropdown('version', versions);
}

function handleDownload() {
    const s = document.getElementById('software').value;
    const p = document.getElementById('platform').value;
    const v = document.getElementById('version').value;

    // Final fetch from the nested map
    const fileData = downloadLibrary.get(s)?.get(p)?.get(v);

    if (fileData) {
        const a = document.createElement('a');
        a.href = fileData.url;
        a.download = fileData.name;   // HTML5 download attribute
        document.body.appendChild(a); // Append
        a.click();                    // Trigger
        document.body.removeChild(a); // Remove
    } else {
        alert("Please select all options to fetch the download link.");
    }
}
