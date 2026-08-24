// Interactive JavaScript for X / Twitter Notifications Front-End

document.addEventListener('DOMContentLoaded', () => {
  // 1. Tab Switching Functionality
  const tabButtons = document.querySelectorAll('.tab-item');
  const tabContents = {
    all: document.getElementById('feed-all'),
    priority: document.getElementById('feed-priority'),
    mentions: document.getElementById('feed-mentions')
  };

  tabButtons.forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      // Remove active from all tabs
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });

      // Activate clicked tab
      tabBtn.classList.add('active');
      tabBtn.setAttribute('aria-selected', 'true');

      // Toggle tab panel visibility
      const targetTab = tabBtn.getAttribute('data-tab');
      Object.keys(tabContents).forEach(key => {
        if (tabContents[key]) {
          if (key === targetTab) {
            tabContents[key].style.display = 'flex';
          } else {
            tabContents[key].style.display = 'none';
          }
        }
      });
    });
  });

  // 2. Follow / Following Button Toggles
  const followButtons = document.querySelectorAll('.follow-action-btn');
  followButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isFollowing = btn.classList.contains('following');
      const originalState = btn.getAttribute('data-state');

      if (isFollowing) {
        btn.classList.remove('following');
        btn.textContent = originalState === 'follow-back' ? 'Follow back' : 'Follow';
      } else {
        btn.classList.add('following');
        btn.textContent = 'Following';
      }
    });

    // Hover effect for Following state (shows "Unfollow")
    btn.addEventListener('mouseenter', () => {
      if (btn.classList.contains('following')) {
        btn.textContent = 'Unfollow';
      }
    });

    btn.addEventListener('mouseleave', () => {
      if (btn.classList.contains('following')) {
        btn.textContent = 'Following';
      }
    });
  });

  // 3. Compose Post Modal
  const postModal = document.getElementById('post-modal');
  const openModalBtn = document.getElementById('open-post-modal');
  const closeModalBtn = document.getElementById('modal-close');
  const postTextarea = document.querySelector('.post-textarea');

  if (openModalBtn && postModal) {
    openModalBtn.addEventListener('click', () => {
      postModal.classList.add('open');
      postModal.setAttribute('aria-hidden', 'false');
      if (postTextarea) postTextarea.focus();
    });
  }

  if (closeModalBtn && postModal) {
    closeModalBtn.addEventListener('click', () => {
      postModal.classList.remove('open');
      postModal.setAttribute('aria-hidden', 'true');
    });
  }

  // Close modal when clicking outside
  if (postModal) {
    postModal.addEventListener('click', (e) => {
      if (e.target === postModal) {
        postModal.classList.remove('open');
        postModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && postModal && postModal.classList.contains('open')) {
      postModal.classList.remove('open');
      postModal.setAttribute('aria-hidden', 'true');
    }
  });

  // 4. Notifications Feed Item Click Feedback
  const notifItems = document.querySelectorAll('.notification-item');
  notifItems.forEach(item => {
    item.addEventListener('click', (e) => {
      // Optional interactive feedback
      if (!e.target.closest('button') && !e.target.closest('a')) {
        item.classList.remove('highlighted');
      }
    });
  });

  // 5. Floating Action Buttons
  const grokBtn = document.querySelector('.grok-float-btn');
  const chatBtn = document.querySelector('.chat-float-btn');

  if (grokBtn) {
    grokBtn.addEventListener('click', () => {
      alert('Opening Grok Assistant');
    });
  }

  if (chatBtn) {
    chatBtn.addEventListener('click', () => {
      alert('Opening Direct Messages');
    });
  }
});
