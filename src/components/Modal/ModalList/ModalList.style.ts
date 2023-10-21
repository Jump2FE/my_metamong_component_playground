import { flex, clearFix, inlineBlockBox } from 'styles/mixin.style';
import styled from 'styled-components';
import IconClose from 'assets/images/btn_modal_close.png';
import { Color } from 'styles/varialbes.style';

export const DimLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
`;

export const DimBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: ${Color.black_30};
  margin: 0 auto;
`;

export const ModalLayer = styled.div<{ isLong: boolean }>`
  ${flex()};
  position: ${({ isLong }) => (isLong ? 'fixed' : 'absolute')};
  align-items: ${({ isLong }) => (isLong ? 'baseline' : 'none')};
  overflow-y: ${({ isLong }) => (isLong ? 'auto' : 'none')};
  padding: ${({ isLong }) => (isLong ? '30px 0' : '0')};
  width: 100%;
  height: 100%;
  background: ${Color.black_30};

  .mini_modal_container {
    position: relative;
    width: 320px;
    text-align: center;
    font-size: 14px;
    line-height: 17px;
    background: ${Color.blue100};
    border-radius: 6px;
    &.pw {
      width: 300px;
      .modal_message {
        color: ${Color.white};
        text-align: left;
        padding: 30px 24px;
      }
    }
    .close {
      position: absolute;
      top: 18px;
      right: 18px;
      width: 16px;
      height: 16px;
      z-index: 10;
      background: url(${IconClose}) 50% 50% / 16px auto no-repeat;
    }
    &.white {
      background-color: #fff;
      color: #525252;
      button {
        color: #000;
      }
    }
    .modal_message {
      white-space: pre-wrap;
      padding: 58px 15px 36px;
      color: ${Color.white};

      i {
        display: block;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
        margin-top: 8px;
      }
      &.exceed {
        padding: 58px 0 36px;
      }
    }
    .btn_modal_close {
      position: absolute;

      top: 10px;
      right: 10px;
      width: 26px;
      height: 26px;
      background: url(${IconClose}) 50% 50% / 16px auto no-repeat;
    }
    .btn_group_modal {
      ${flex()}
      border-top: 1px solid ${Color.line_color_grey_30};
      button {
        cursor: pointer;
        width: 100%;
        font-size: inherit;
        line-height: inherit;
        font-weight: bold;
        padding: 19px 10px 18px;
      }
      &.btn_2 {
        button {
          width: 50%;
          &:first-child {
            border-right: 1px solid ${Color.line_color_grey_30};
          }
        }
      }
    }
    &.wide {
      width: 410px;
    }
    &.has_title {
      .modal_title {
        font-size: inherit;
        border-bottom: 1px solid ${Color.black_30};
        padding: 18px 66px 18px 25px;
      }
      .modal_message {
        padding: 30px 25px 20px;
        p {
          color: ${Color.white_80};
          padding-bottom: 10px;
        }
        a {
          color: ${Color.white_50};
          text-decoration: underline;
        }
        .upload_file {
          ${clearFix()};
          margin-top: 28px;
          input[type='file'] {
            position: absolute;
            width: 0;
            height: 0;
            padding: 0;
            overflow: hidden;
            border: 0;
          }
          input[type='text'] {
            float: left;
            width: calc(100% - 148px);
            line-height: 38px;
            font-size: 14px;
            color: ${Color.white};
            background: ${Color.black_30};
            border: 1px solid ${Color.white_10};
            padding: 0 10px;
          }
          label {
            float: left;
            width: 138px;
            line-height: 38px;
            font-size: 14px;
            font-weight: bold;
            background: #484848;
            border: 1px solid ${Color.white_20};
            border-radius: 4px;
            padding: 0 30px;
            margin-left: 10px;
          }
        }
        .select_radio {
          li {
            margin-bottom: 10px;
          }
        }
      }
      .btn_group_modal {
        button {
          i.icon_check {
            ${inlineBlockBox('0px')};
            width: 12px;
            height: 9px;
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='9' viewBox='0 0 12 9' fill='none'%3E%3Cpath d='M1 4L4.33333 7.66667L11 1' stroke='white' stroke-width='1.5'/%3E%3C/svg%3E%0A")
              no-repeat;
            margin-right: 8px;
          }
        }
      }
    }
  }
`;
