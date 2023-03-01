chrome.storage.sync.get('cursor', ({cursor}) => {
    document.body.style.cursor = 'url("https://raw.githubusercontent.com/IbethOrtega/PuginChrome/main/images/cursor_' + cursor + '.png"), auto';
});