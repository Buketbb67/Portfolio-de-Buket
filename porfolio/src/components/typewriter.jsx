import  { useState, useEffect } from 'react';

function useTypewriter(text, speed = 50) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    let isCancelled = false;

    const type = () => {
      if (i < text.length && !isCancelled) {
        setDisplayText(prev => prev + text.charAt(i));
        i++;
        setTimeout(type, speed);
      }
    };

    setDisplayText(""); // reset avant écriture 
    type(); 

    return () => {
      isCancelled = true;
    };
  }, [text, speed]);

  return displayText;
}

function Typewriter ({ text, speed }) {
  const displayText = useTypewriter(text, speed);

  return <p className="text-right border-2 border-[#B68CD1] p-4 bg-white rounded shadow">
      {displayText}
        </p>
}

export default Typewriter;
