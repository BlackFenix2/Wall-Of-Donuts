import React from 'react';
import { css } from '@emotion/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TabLink from 'src/components/TabLink';

const style = css`
  background-color: black;
  color: white;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
`;

export const Footer = () => (
  <footer css={style}>
    <div
      css={css`
        padding: 10px;
      `}
    >
      <TabLink href="https://github.com/BlackFenix2/Wall-Of-Donuts">
        <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
      </TabLink>
    </div>
    <div>
      <span>
        Ernie Francis &copy;
        {new Date().getFullYear()}
      </span>
    </div>
  </footer>
);
export default Footer;
