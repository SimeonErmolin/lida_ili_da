let lockCount = 0;
let scrollY = 0;

export const lockScroll = () => {
  if (lockCount === 0) {
    scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflowY = 'scroll';
    document.body.style.width = '100%';
  }
  lockCount++;
};

export const unlockScroll = () => {
  lockCount--;
  if (lockCount <= 0) {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.overflowY = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollY);
    lockCount = 0;
  }
};
