/* This file is part of The BiTGApps Project */

/*
 * Nested Map: Category -> Platform -> Version -> File Info
 */

const downloadLibrary = new Map([
    ['CORE', new Map([
        ['ARM64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-112338-release/BiTGApps-arm64-16.0.0-20260425-112338-CORE.zip' }]
        ])]
    ])],
    ['MINI', new Map([
        ['ARM64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-112338-release/BiTGApps-arm64-16.0.0-20260425-112338-MINI.zip' }]
        ])]
    ])],
    ['OMNI', new Map([
        ['ARM64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-112338-release/BiTGApps-arm64-16.0.0-20260425-112338-OMNI.zip' }]
        ])]
    ])],
    ['ROAR', new Map([
        ['ARM64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-112338-release/BiTGApps-arm64-16.0.0-20260425-112338-ROAR.zip' }]
        ])]
    ])],
    ['NANO', new Map([
        ['ARM64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-112338-release/BiTGApps-arm64-16.0.0-20260425-112338-NANO.zip' }]
        ])]
    ])],
    ['ATOM', new Map([
        ['ARM64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-112338-release/BiTGApps-arm64-16.0.0-20260425-112338-ATOM.zip' }]
        ])]
    ])],
    ['PICO', new Map([
        ['ARM64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-112338-release/BiTGApps-arm64-16.0.0-20260425-112338-PICO.zip' }]
        ])]
    ])],
    ['FULL', new Map([
        ['ARM64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-112338-release/BiTGApps-arm64-16.0.0-20260425-112338-FULL.zip' }]
        ])]
    ])],
    ['TINT', new Map([
        ['ARM64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-112338-release/BiTGApps-arm64-16.0.0-20260425-112338-TINT.zip' }]
        ])]
    ])],
    ['ADDON', new Map([
        ['ALL', new Map([
            ['AndroidAuto', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-113539-addons/AndroidAuto-20260425-113539.zip' }],
            ['Calculator', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-113539-addons/Calculator-20260425-113539.zip' }],
            ['Calendar', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-113539-addons/Calendar-20260425-113539.zip' }],
            ['Chrome', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-113539-addons/Chrome-20260425-113539.zip' }],
            ['Contacts', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-113539-addons/Contacts-20260425-113539.zip' }],
            ['DeskClock', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-113539-addons/DeskClock-20260425-113539.zip' }],
            ['WebView', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-113539-addons/WebView-20260425-113539.zip' }],
            ['Wellbeing', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-113539-addons/Wellbeing-20260425-113539.zip' }]
        ])],
        ['ARM64', new Map([
            ['Assistant', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-113539-addons/Assistant-20260425-113539-ARM64.zip' }],
            ['Dialer', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-113539-addons/Dialer-20260425-113539-ARM64.zip' }],
            ['Drive', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-113539-addons/Drive-20260425-113539-ARM64.zip' }],
            ['Gmail', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-113539-addons/Gmail-20260425-113539-ARM64.zip' }],
            ['GoogleTTS', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-113539-addons/GoogleTTS-20260425-113539-ARM64.zip' }],
            ['Gboard', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-113539-addons/LatinIME-20260425-113539-ARM64.zip' }],
            ['Maps', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-113539-addons/Maps-20260425-113539-ARM64.zip' }],
            ['Markup', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-113539-addons/Markup-20260425-113539-ARM64.zip' }],
            ['Messaging', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-113539-addons/Messaging-20260425-113539-ARM64.zip' }],
            ['Photos', { url: 'https://github.com/BiTGApps/release/releases/download/20260425-113539-addons/Photos-20260425-113539-ARM64.zip' }]
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
