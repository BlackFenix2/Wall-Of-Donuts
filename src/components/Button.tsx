import React from 'react';
import { css } from '@emotion/core';

const buttonStyle = css`
  background-color: blue;
  color: white;
  border-style: none;
  transition: 0.2s;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: lightgrey;
    color: black;
  }
`;

const Button = props => {
  const theme = css`
    font-size: ${props.big ? '20px' : ''};
  `;

  const style = [buttonStyle, theme];

  return <button css={style}>{props.children}</button>;
};

export default Button;
