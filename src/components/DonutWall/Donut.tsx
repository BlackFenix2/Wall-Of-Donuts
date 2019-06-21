import React from 'react';
import { css } from '@emotion/core';

const style = css`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin: 30px;
  position: relative;

  &:before {
    content: '';
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const donutStyle = css`
  background: radial-gradient(#eacb9e, #c45700);
  box-shadow: 0px 1px 4px 2px #00000045;
`;

const stickStyle = css`
  width: 45px;
  height: 72px;
  background: #e3bc9f;
  border-radius: 50px;
  position: absolute;
  border-bottom-left-radius: 85%;
  border-bottom-right-radius: 100%;
  top: 30px;
  left: 65px;
  transform: rotate(10deg);
  transform-origin: center;

  &:after {
    content: '';
    width: 45px;
    height: 45px;
    background: #bb7240;
    border-radius: 50px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Donut = props => (
  <div css={[style, props.active && donutStyle]}>
    <div css={stickStyle} />
  </div>
);
export default Donut;
