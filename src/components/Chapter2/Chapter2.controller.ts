import { MouseEvent } from 'react';

export default function Chapter2Controller() {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('clicked');
  };
  return {
    handleClick,
  };
}
