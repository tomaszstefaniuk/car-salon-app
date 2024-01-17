import { SVGAttributes } from 'react';

export const ChevronDownIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={10}
      height={7}
      fill="none"
      {...props}
    >
      <path fill="url(#a)" d="M0 0h10v7H0z" />
      <defs>
        <pattern
          id="a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#b" transform="scale(.05 .07143)" />
        </pattern>
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAFKADAAQAAAABAAAADgAAAAC7RV3kAAAAg0lEQVQ4EWNgoAFQAZrJRKG56sj63wE5iykw1A+o9ycQNwAxGHwCkv+BmBxDQYb9gurvBtJgYAUkyTEU5jKQY+CGQYxkYCDVULyGkWooUYYRayhJhhEylCzDcBkaCJQAJQ2sEQDTRIhGjiiQQRQZBrMM2VCMpAFTRCoNMrSJVE1UUw8ALwEy/ZfDuZ8AAAAASUVORK5CYII="
          id="b"
          width={20}
          height={14}
        />
      </defs>
    </svg>
  );
};
