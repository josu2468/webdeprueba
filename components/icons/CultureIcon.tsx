
import React from 'react';

const CultureIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.57-1.023-.19-2.3-1.332-2.3A4.5 4.5 0 006 13.5v2.25A4.5 4.5 0 0010.5 20h.75a4.5 4.5 0 004.5-4.5v-2.25m-5.25-1.125a4.5 4.5 0 017.5 0m-7.5 0a4.5 4.5 0 00-7.5 0M12 15.75a3 3 0 01-3-3V4.5a3 3 0 013-3h.008a3 3 0 013 3v8.25a3 3 0 01-3 3h-.008z" />
  </svg>
);

export default CultureIcon;
