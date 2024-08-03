function generateCatArt() {
    const randomIndex = Math.floor(Math.random() * catArts.length);
    const randomCatArt = catArts[randomIndex];
    const catArtDisplay = document.getElementById('catArtDisplay');
    catArtDisplay.textContent = randomCatArt;
    catArtDisplay.classList.remove('show');
    setTimeout(() => {
        catArtDisplay.classList.add('show');
    }, 100); // To trigger the CSS animation
    document.getElementById('copyButton').style.display = 'inline-block';
}

function copyToClipboard() {
    const textToCopy = document.getElementById('catArtDisplay').textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('Copied to clipboard!');
    }).catch(() => {
        showToast('Failed to copy!');
    });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = "toast show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

