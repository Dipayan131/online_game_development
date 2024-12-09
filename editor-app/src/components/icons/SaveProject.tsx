import * as React from 'react';

function SaveProject({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10l6 6v10a2 2 0 0 1-2 2zM17 3v4h4M12 17a3 3 0 1 0-6 0 3 3 0 0 0 6 0zM6 10h12"
      ></path>
    </svg>
  );
}

export default SaveProject;
