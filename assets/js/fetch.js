/* This file is part of The BiTGApps Project */

/*
 * Nested Map: Category -> Platform -> Version -> File Info
 */

const downloadLibrary = new Map([
    ['CORE', new Map([
        ['arm64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/v5.9-release/BiTGApps-arm64-16.0.0-v5.9-CORE.zip' }]
        ])]
    ])],
    ['MINI', new Map([
        ['arm64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/v5.9-release/BiTGApps-arm64-16.0.0-v5.9-MINI.zip' }]
        ])]
    ])],
    ['OMNI', new Map([
        ['arm64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/v5.9-release/BiTGApps-arm64-16.0.0-v5.9-OMNI.zip' }]
        ])]
    ])],
    ['ROAR', new Map([
        ['arm64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/v5.9-release/BiTGApps-arm64-16.0.0-v5.9-ROAR.zip' }]
        ])]
    ])],
    ['NANO', new Map([
        ['arm64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/v5.9-release/BiTGApps-arm64-16.0.0-v5.9-NANO.zip' }]
        ])]
    ])],
    ['ATOM', new Map([
        ['arm64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/v5.9-release/BiTGApps-arm64-16.0.0-v5.9-ATOM.zip' }]
        ])]
    ])],
    ['PICO', new Map([
        ['arm64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/v5.9-release/BiTGApps-arm64-16.0.0-v5.9-PICO.zip' }]
        ])]
    ])],
    ['FULL', new Map([
        ['arm64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/v5.9-release/BiTGApps-arm64-16.0.0-v5.9-FULL.zip' }]
        ])]
    ])],
    ['TINT', new Map([
        ['arm64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/v5.9-release/BiTGApps-arm64-16.0.0-v5.9-TINT.zip' }]
        ])]
    ])],
    ['ADDON', new Map([
        ['all', new Map([
            ['AndroidAuto', { url: 'https://build.bitgapps.io/addons/AndroidAuto-v5.9.zip' }],
            ['Calculator', { url: 'https://build.bitgapps.io/addons/Calculator-v5.9.zip' }],
            ['Calendar', { url: 'https://build.bitgapps.io/addons/Calendar-v5.9.zip' }],
            ['Chrome', { url: 'https://build.bitgapps.io/addons/Chrome-v5.9.zip' }],
            ['Contacts', { url: 'https://build.bitgapps.io/addons/Contacts-v5.9.zip' }],
            ['DeskClock', { url: 'https://build.bitgapps.io/addons/DeskClock-v5.9.zip' }],
            ['WebView', { url: 'https://build.bitgapps.io/addons/WebView-v5.9.zip' }],
            ['Wellbeing', { url: 'https://build.bitgapps.io/addons/Wellbeing-v5.9.zip' }]
        ])],
        ['arm64', new Map([
            ['Assistant', { url: 'https://build.bitgapps.io/addons/Assistant-v5.9-ARM64.zip' }],
            ['Dialer', { url: 'https://build.bitgapps.io/addons/Dialer-v5.9-ARM64.zip' }],
            ['Drive', { url: 'https://build.bitgapps.io/addons/Drive-v5.9-ARM64.zip' }],
            ['Gmail', { url: 'https://build.bitgapps.io/addons/Gmail-v5.9-ARM64.zip' }],
            ['GoogleTTS', { url: 'https://build.bitgapps.io/addons/GoogleTTS-v5.9-ARM64.zip' }],
            ['Gboard', { url: 'https://build.bitgapps.io/addons/LatinIME-v5.9-ARM64.zip' }],
            ['Maps', { url: 'https://build.bitgapps.io/addons/Maps-v5.9-ARM64.zip' }],
            ['Markup', { url: 'https://build.bitgapps.io/addons/Markup-v5.9-ARM64.zip' }],
            ['Messaging', { url: 'https://build.bitgapps.io/addons/Messaging-v5.9-ARM64.zip' }],
            ['Photos', { url: 'https://build.bitgapps.io/addons/Photos-v5.9-ARM64.zip' }]
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
        o.textContent = opt;
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
