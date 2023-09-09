import React from 'react';
import * as svg from './svg';

export type TIconType = keyof typeof svg;
export type IIconProps = {
  name?: TIconType;
  className?: string;
  style?: React.CSSProperties;
};

function Icon({ name, className, style }: IIconProps) {
  return React.createElement(svg[name ?? 'close'], {
    className,
    style,
  });
}

export default Icon;
