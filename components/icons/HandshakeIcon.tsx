import React from 'react';

const HandshakeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 14.5l3.5-3.5a2 2 0 0 1 2.8 0l1.4 1.4" />
    <path d="M19.5 9.5L16 13a2 2 0 0 1-2.8 0L9 8.7" />
    <path d="M18 22V10" />
    <path d="M6 22V10" />
  </svg>
);

export default HandshakeIcon;
