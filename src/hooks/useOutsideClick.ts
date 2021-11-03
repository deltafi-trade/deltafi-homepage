import { useEffect } from 'react';

const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | HTMLTextAreaElement>,
  handler: (e: MouseEvent) => void,
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (!ref.current?.contains(event.target as Node)) {
        if (handler) handler(event);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
};

export default useOutsideClick;
