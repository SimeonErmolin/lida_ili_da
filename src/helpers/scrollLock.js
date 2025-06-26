let lockCount = 0;
let scrollY = 0;

export const lockScroll = () => {
  if (lockCount === 0) {
    scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflowY = 'scroll';
  }
  lockCount++;
};

export const unlockScroll = () => {
  lockCount--;
  if (lockCount <= 0) {
    setTimeout(() => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflowY = '';
      document.body.style.width = '';

      window.scrollTo({
        top: scrollY,
        behavior: 'instant',
      });

      lockCount = 0;
    }, 0);
  }
};
