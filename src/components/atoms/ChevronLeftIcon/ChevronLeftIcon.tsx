import { SVGAttributes } from 'react';

export const ChevronLeftIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={8}
      height={14}
      fill="none"
      {...props}
    >
      <path fill="#242221" d="M8 12.4 3.1 7 8 1.6 6.5 0 0 7l6.5 7L8 12.4Z" />
    </svg>
  );
};
