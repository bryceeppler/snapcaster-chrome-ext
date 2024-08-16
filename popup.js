document.addEventListener('DOMContentLoaded', function () {
    try {
        const manifestData = chrome.runtime.getManifest();
        document.getElementById('version').textContent = manifestData.version;

        const status = "Active";
        document.getElementById('status').textContent = status;
    } catch (error) {
        console.error("Error accessing manifest data: ", error);
    }
});
