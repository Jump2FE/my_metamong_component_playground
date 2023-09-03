import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ChipProps } from './Chip.types';

export const ChipContainer = styled.div<
  Pick<ChipProps, 'onClick' | 'onDelete' | 'color' | 'variant' | 'size'>
>`
  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          font-size: 12px;
          height: 24px;
          border-radius: 12px;
          padding: 0 8px;
        `;
      default:
        return css`
          font-size: 16px;
          height: 32px;
          border-radius: 16px;
          padding: 0 10px;
        `;
    }
  }}

  ${({ color, variant }) => {
    switch (variant) {
      case 'outlined':
        switch (color) {
          case 'secondary':
            return css`
              border: 1px solid #000;
              background-color: transparent;
              color: #000;
            `;
          default:
            return css`
              border: 1px solid #1876d1;
              background-color: transparent;
              color: #1876d1;
            `;
        }
      default:
        switch (color) {
          case 'secondary':
            return css`
              background-color: #e0e0e0;
              color: #000;
            `;
          default:
            return css`
              background-color: #1876d1;
              color: #fff;
            `;
        }
    }
  }}

  ${({ onClick }) =>
    onClick &&
    css`
      &:active {
        transform: scale(0.97);
      }
      cursor: pointer;
    `}

  ${({ onDelete }) =>
    onDelete &&
    css`
      padding-right: 8px;
    `}

  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const ChipIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const ChipDeleteIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  cursor: pointer;
`;
