chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.greeting === "fetchData") {
        const links = [...document.querySelectorAll(
            "ul.absolute.min-w-min.w-48.overflow-hidden.bg-white"
            + ".rounded.shadow-sm.top-full.whitespace-nowrap.right-0 li:last-child button"
        )].map((button) => {
            const onclick = button.getAttribute("onclick");
            return onclick.substring(31, onclick.length - 3);
        });
        sendResponse(JSON.stringify(links));
    }
});
