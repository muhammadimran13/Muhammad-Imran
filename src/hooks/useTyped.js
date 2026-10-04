import { useState, useEffect, useRef } from 'react';

/**
 * Typing animation hook.
 * @param {string[]} phrases - Array of strings to cycle through
 * @returns {string} current displayed text
 */
export function useTyped(phrases) {
  const [text, setText] = useState('');
  const stateRef = useRef({ phraseIdx: 0, charIdx: 0, deleting: false });

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;

    let timeout;

    const tick = () => {
      const { phraseIdx, charIdx, deleting } = stateRef.current;
      const current = phrases[phraseIdx];

      if (!deleting) {
        const next = current.substring(0, charIdx + 1);
        setText(next);
        stateRef.current.charIdx += 1;

        if (stateRef.current.charIdx === current.length) {
          stateRef.current.deleting = true;
          timeout = setTimeout(tick, 1800);
          return;
        }
      } else {
        const next = current.substring(0, charIdx - 1);
        setText(next);
        stateRef.current.charIdx -= 1;

        if (stateRef.current.charIdx === 0) {
          stateRef.current.deleting = false;
          stateRef.current.phraseIdx = (phraseIdx + 1) % phrases.length;
        }
      }

      timeout = setTimeout(tick, stateRef.current.deleting ? 60 : 90);
    };

    timeout = setTimeout(tick, 500);
    return () => clearTimeout(timeout);
  }, [phrases]);

  return text;
}
