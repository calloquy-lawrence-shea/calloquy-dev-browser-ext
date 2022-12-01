document.addEventListener('DOMContentLoaded', function () {
    const openMeeting = document.getElementById("calloquy-developer-helper-tools-open-meeting");
    openMeeting.addEventListener('click', function () {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {greeting: "fetchData"}, (response) => {
                if (response) {
                    JSON.parse(response).forEach((url) => {
                        chrome.windows.create({"url": url, "incognito": true});
                    });
                }
            });
        });
    });
})
