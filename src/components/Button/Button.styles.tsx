import { IButton } from './Button.types';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ButtonBase = styled.button<IButton>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100px;

  text-align: center;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.1px;
  line-height: 20px;
  cursor: pointer;

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          font-size: 12px;
          padding: 0.375rem 1.125rem;
        `;
      case 'medium':
        return css`
          font-size: 14px;
          padding: 0.5rem 1.5rem;
        `;
      case 'large':
        return css`
          font-size: 16px;
          padding: 0.625rem 1.875rem;
        `;
      default:
        return css`
          font-size: 14px;
          padding: 0.5rem 1.5rem;
        `;
    }
  }}

  &:disabled {
    cursor: default;
  }
`;

export const filledButton = styled(ButtonBase)`
  color: #ffffff;
  background-color: #6750a4;
  border: none;
  outline: none;

  &:not(:disabled):hover {
    background-color: #735eab;
    box-shadow:
      0px 1px 3px 1px rgba(0, 0, 0, 0.15),
      0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  }

  &:not(:disabled):active {
    background-color: #7965af;
  }

  &:disabled {
    background-color: #1d1b201e;
    color: #a8a3aa;
  }
`;

export const elevatedButton = styled(ButtonBase)`
  color: #6750a4;
  background-color: #f7f2fa;
  border: none;
  outline: none;
  box-shadow:
    0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);

  &:not(:disabled):hover {
    background-color: rgba(103, 80, 164, 0.08);
  }

  &:not(:disabled):active {
    background-color: rgba(103, 80, 164, 0.12);
  }

  &:disabled {
    background-color: #1d1b201e;
    color: #a8a3aa;
  }
`;

export const outlinedButton = styled(ButtonBase)`
  color: #6750a4;
  background-color: #f7f2fa;
  border: #79747e 1px solid;

  &:not(:disabled):hover {
    background-color: rgba(103, 80, 164, 0.08);
  }

  &:not(:disabled):active {
    background-color: rgba(103, 80, 164, 0.12);
  }

  &:disabled {
    background-color: #fff;
    color: #a8a3aa;
    border: #1d1b201f 1px solid;
  }
`;
