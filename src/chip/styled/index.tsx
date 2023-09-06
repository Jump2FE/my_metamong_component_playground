import { styled } from 'styled-components';

export const ChipContainer = styled.div<{
  selected?: boolean;
  background: { default: string; select: string };
  border: { default: string; select: string };
}>`
  display: flex;
  margin: 2.778vw;
  padding: 2.778vw;
  border: 0.2778vw solid ${(props) => (props.selected ? props.border.select : props.border.default)};
  border-radius: 5.556vw;
  width: fit-content;
  background-color: ${(props) => (props.selected ? props.background.select : props.background.default)};
  cursor: pointer;
`;

export const ChipLabel = styled.span`
  font-size: 4.444vw;
`;

export const ChipLeadingImg = styled.img`
  height: 5.556vw;
  width: 5.556vw;
  margin-right: 1.389vw;
`;

export const ChipTrailingImg = styled.img`
  height: 5.556vw;
  width: 5.556vw;
  margin-left: 1.389vw;
  cursor: pointer;
`;
