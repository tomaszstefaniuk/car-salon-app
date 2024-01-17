import { SVGAttributes } from 'react';

export const InstagramIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <g opacity={0.7}>
        <path
          fill="#242221"
          fillRule="evenodd"
          d="M23.273 10.364v11.09a1.806 1.806 0 0 1-1.819 1.819H2.546a1.806 1.806 0 0 1-1.818-1.819V2.546c0-1.013.805-1.818 1.818-1.818h18.91c1.013 0 1.818.805 1.818 1.818v7.819ZM2.545 0A2.548 2.548 0 0 0 0 2.545v18.91A2.548 2.548 0 0 0 2.545 24h18.91A2.548 2.548 0 0 0 24 21.454V2.546A2.548 2.548 0 0 0 21.454 0H2.546Z"
          clipRule="evenodd"
        />
        <path
          stroke="#242221"
          strokeWidth={0.7}
          d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        />
        <path
          fill="#242221"
          d="M18.17 4.37a1.43 1.43 0 0 0-1.435 1.434c0 .796.639 1.435 1.435 1.435a1.43 1.43 0 0 0 1.434-1.435 1.43 1.43 0 0 0-1.434-1.435Z"
        />
      </g>
    </svg>
  );
};
