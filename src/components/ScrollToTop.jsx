import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolls to the top of the page on every route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // It doesn't render anything
};

export default ScrollToTop;