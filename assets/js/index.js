/* This file is part of The BiTGApps Project */

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function downloadSelectedFile() {
    const selectElement = document.getElementById('MicroGPlus');
    const selectedFile = selectElement.options[selectElement.selectedIndex].value;
    if (selectedFile) {
        const link = document.createElement('a');
        link.href = selectedFile;
        link.download = selectedFile.substring(selectedFile.lastIndexOf('/') + 1);
        document.body.appendChild(link); // Append
        link.click();                    // Trigger
        document.body.removeChild(link); // Remove
    }
}
document.getElementById('MicroGPlus').addEventListener('change', downloadSelectedFile);

function resetSelectedFile() {
    document.getElementById("MicroGPlus").selectedIndex = 0;
}

function downloadRadioFile() {
    const radioButtons = document.querySelectorAll('input[name="downloadRadioFile"]');
    let selectedFile = null;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedFile = radioButton.value;
            break;
        }
    }
    if (selectedFile) {
        const link = document.createElement('a');
        link.href = selectedFile;
        link.download = selectedFile;
        document.body.appendChild(link); // Append
        link.click();                    // Trigger
        document.body.removeChild(link); // Remove
    } else {
        alert('Please select MicroGPlus to download.');
    }
}

function resetRadioFile() {
    document.querySelector('input[name="downloadRadioFile"]:checked').checked = false;
}
