// Block Shorts navigation and hide Shorts shelf
(function() {
  // Redirect if user tries to access Shorts directly
  if (window.location.pathname.includes('/shorts/')) {
    window.location.href = 'https://www.youtube.com/';
    return;
  }

  // Hide Shorts shelf and individual Shorts videos
  const hideShorts = () => {
    // Find and hide shelves that contain Shorts (by heading text)
    const shelves = document.querySelectorAll('ytd-shelf-renderer, ytd-rich-section-renderer');
    shelves.forEach(shelf => {
      const titleEl = shelf.querySelector('#title yt-formatted-string, #title-element yt-formatted-string, h2');
      if (titleEl && titleEl.textContent.trim() === 'Shorts') {
        shelf.style.display = 'none';
      }
      // Also check if shelf contains the word Shorts prominently
      const headingText = shelf.querySelector('[role="heading"]');
      if (headingText && headingText.textContent.trim() === 'Shorts') {
        shelf.style.display = 'none';
      }
    });

    // Hide Shorts videos in recommendations
    // Target the reel video renderer (Shorts container)
    const reelVideos = document.querySelectorAll('ytd-reel-video-renderer');
    reelVideos.forEach(video => {
      video.style.display = 'none';
    });

    // Also hide any video with yt-shorts class
    const shortsContainers = document.querySelectorAll('[class*="yt-shorts"], [class*="short-video-container"]');
    shortsContainers.forEach(container => {
      const parent = container.closest('ytd-reel-video-renderer') || container.closest('[class*="reel"]');
      if (parent) {
        parent.style.display = 'none';
      }
    });

    // Hide any guide entries (sidebar buttons) for Shorts
    const guideEntries = document.querySelectorAll('ytd-guide-entry-renderer');
    guideEntries.forEach(entry => {
      const text = entry.textContent;
      if (text.includes('Shorts')) {
        entry.style.display = 'none';
      }
    });
  };

  // Run immediately
  hideShorts();

  // Run on page load
  window.addEventListener('load', hideShorts);

  // Watch for dynamic content changes (important for YouTube's infinite scroll)
  const observer = new MutationObserver(hideShorts);
  if (document.body) {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }

  // Block navigation to Shorts
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href*="/shorts/"]');
    if (link) {
      e.preventDefault();
      e.stopPropagation();
      window.location.href = 'https://www.youtube.com/';
    }
  }, true);
})();