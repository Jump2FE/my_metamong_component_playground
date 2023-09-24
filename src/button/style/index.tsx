import { styled } from 'styled-components';

export const StyledButton = styled.button<{
  isFetching?: boolean;
  borderRadius?: string;
  height?: string;
  width?: string;
  bgColor?: string;
  hoverOption?: {
    bgColor?: string;
    color?: string;
  };
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  border-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.borderRadius};
  margin: 16px;
  ${(props) => !props.disabled && 'cursor: pointer;'}
  ${(props) =>
    !props.disabled &&
    `
  &:hover {
    border-color: ${props.hoverOption?.bgColor};
    background-color: ${props.hoverOption?.bgColor};
    color: ${props.hoverOption?.color};
  }
  `}
`;
