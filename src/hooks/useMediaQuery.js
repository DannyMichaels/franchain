import { useLayoutEffect, useState } from 'react';

/**
 * @name useMediaQuery
 * @desc Hook to check if a media query matches
 * @param {string} query - Media query string
 * @returns {boolean} - Returns true if the media query matches, false otherwise
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);
    const handler = (event) => setMatches(event.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
};
