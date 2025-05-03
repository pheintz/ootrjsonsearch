// shareModule.js
window.ShareModule = (() => {
    const popupId = 'share-popup';

    function createPopup(shareUrl) {
        const existing = document.getElementById(popupId);
        if (existing) existing.remove();

        const popup = document.createElement('div');
        popup.id = popupId;
        popup.className = 'share-popup';

        popup.innerHTML = `
      <button class="popup-close-x" title="Close">&times;</button>

      <h3>Share this link</h3>
      <div class=display="flex"">
        <input id="share-url" type="text" value="${shareUrl}" readonly class="share-url-input" />
      </div>
      <div class="popup-actions">
        <button id="copy-btn" class="popup-btn copy-btn">Copy Link</button>
        <button id="popup-close-bottom" class="popup-btn close-btn">Close</button>
      </div>
    `;

        document.body.appendChild(popup);

        const removePopup = () => popup.remove();

        document.querySelector('.popup-close-x').addEventListener('click', removePopup);
        document.getElementById('popup-close-bottom').addEventListener('click', removePopup);

        document.getElementById('copy-btn').addEventListener('click', () => {
            const input = document.getElementById('share-url');
            input.select();
            document.execCommand('copy');

            // Show the notification
            const notification = document.getElementById('copy-notification');
            notification.textContent = 'Link copied to clipboard!';
            notification.classList.add('show');

            // Hide the notification after a short delay
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);  // 3 seconds
        });


        setTimeout(() => {
            document.addEventListener('click', outsideClickHandler);
            document.addEventListener('keydown', escKeyHandler);
        }, 10);

        function outsideClickHandler(e) {
            if (!popup.contains(e.target)) {
                removePopup();
                cleanup();
            }
        }

        function escKeyHandler(e) {
            if (e.key === 'Escape') {
                removePopup();
                cleanup();
            }
        }

        function cleanup() {
            document.removeEventListener('click', outsideClickHandler);
            document.removeEventListener('keydown', escKeyHandler);
        }
    }

    return {
        show: (url) => createPopup(url)
    };
})();
