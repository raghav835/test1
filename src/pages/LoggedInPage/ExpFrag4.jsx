import React, { useRef, useEffect, useState } from 'react';

const ExperienceFragment4 = () => {
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState('100vh');

  useEffect(() => {
    const updateIframeHeight = () => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        const height = iframeRef.current.contentWindow.document.body.scrollHeight;
        setIframeHeight(`${height}px`);
      }
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', updateIframeHeight);
      window.addEventListener('resize', updateIframeHeight);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', updateIframeHeight);
      }
      window.removeEventListener('resize', updateIframeHeight);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <iframe
        ref={iframeRef}
        src="/index.html"
        title="Experience Fragment"
        className="w-full border-0"
        style={{ height: iframeHeight }}
        scrolling="no"
      />
    </div>
  );
};

export default ExperienceFragment4;