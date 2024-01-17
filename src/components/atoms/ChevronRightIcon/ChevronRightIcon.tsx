import { SVGAttributes } from 'react';

export const ChevronRightIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={8}
      height={14}
      fill="none"
      {...props}
    >
      <path fill="#242221" d="M0 1.6 4.9 7 0 12.4 1.5 14 8 7 1.5 0 0 1.6Z" />
    </svg>
  );
};
