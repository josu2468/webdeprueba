import React from 'react';

const HospitalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 22V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" />
    <path d="M10 16h4" />
    <path d="M12 14v4" />
    <path d="M10 10h4" />
    <path d="M12 8v4" />
  </svg>
);

export default HospitalIcon;