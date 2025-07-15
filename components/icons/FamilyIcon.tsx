
import React from 'react';

const FamilyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h4.5V16.5M12 3V2.25m0 21h-9.75V3.545M12 3c0-.828-1.119-1.5-2.5-1.5S7 2.172 7 3v4.5M12 3c0-.828 1.119-1.5 2.5-1.5S17 2.172 17 3v4.5" />
  </svg>
);

export default FamilyIcon;
