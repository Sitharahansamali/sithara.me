import React, { useState, useEffect } from 'react';

const roles = [
  'Artificial Intelligence',
  'Machine Learning',
  'Generative AI',
  'Computer Vision',
  'Natural Language Processing',
  'Full-Stack Development'
];

export default function TypingEffect() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    let timeoutId: NodeJS.Timeout;

    if (!isDeleting && currentText === fullText) {
      timeoutId = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeoutId = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <span className="inline-flex items-center text-gradient font-bold">
      <span>{currentText}</span>
      <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-[#58a6ff]" />
    </span>
  );
}
