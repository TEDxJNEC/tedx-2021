import { useLayoutEffect } from 'react';

const useLockBodyScroll = (value) => {
  useLayoutEffect(() => {
    if (value) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
};

export default useLockBodyScroll;
