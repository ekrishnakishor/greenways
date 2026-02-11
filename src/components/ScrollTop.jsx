import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. If there is a hash (like #contact), do NOTHING. 
    // Let the browser scroll to the section naturally.
    if (hash) return;

    // 2. If there is NO hash (just a regular page change), scroll to top.
    window.scrollTo(0, 0);
    
  }, [pathname, hash]); // Re-run if path OR hash changes

  return null;
};

export default ScrollToTop;