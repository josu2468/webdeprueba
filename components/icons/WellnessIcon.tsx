import React from 'react';

const WellnessIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2a5 5 0 0 1 5 5c0 5-5 7.5-5 7.5S7 12 7 7a5 5 0 0 1 5-5"/>
    <path d="M12 22v-6"/>
    <path d="M12 16a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4z"/>
  </svg>
);

export default WellnessIcon;