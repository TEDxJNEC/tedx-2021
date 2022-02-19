import { useCallback, useEffect, useState } from 'react';

const useHorizontalNavRef = (ScrollNavRef) => {
  const [elmSize, setElmSize] = useState(0);
  const [hasLeftItems, setHasLeftItems] = useState(true);
  const [hasRightItems, setHasRightItems] = useState(false);
  const handleScroll = useCallback(() => {
    if (ScrollNavRef.current) {
      setHasLeftItems(ScrollNavRef.current.scrollLeft === 0);
      setHasRightItems(
        Math.ceil(
          ScrollNavRef.current.scrollLeft + ScrollNavRef.current.clientWidth
        ) === ScrollNavRef.current.scrollWidth
      );
    }
  }, [ScrollNavRef]);
  const handleRightNav = () => {
    return ScrollNavRef.current?.scrollBy({
      left: elmSize,
      behavior: 'smooth',
    });
  };
  const handleLeftNav = () => {
    return ScrollNavRef.current?.scrollBy({
      left: -elmSize,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const scrollNavNode = ScrollNavRef.current;
    const cardItem = scrollNavNode?.children[0];
    setElmSize(cardItem?.clientWidth + 20);
    scrollNavNode?.addEventListener('scroll', handleScroll);
    return () => scrollNavNode?.removeEventListener('scroll', handleScroll);
  }, [handleScroll, ScrollNavRef]);

  return {
    hasLeftItems,
    handleLeftNav,
    hasRightItems,
    handleRightNav,
  };
};
export default useHorizontalNavRef;
