import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div<{
  height?: string;
  width?: string;
  color?: string;
}>`
  position: relative;
  height: ${(props) => props.height || '30px'};
  width: ${(props) => props.width || '30px'};
  border: 1px solid ${(props) => props.color || '#000'};
  border-radius: 50%;
  border-top: none;
  border-right: none;
  animation: ${rotation} 1s linear infinite;
`;
