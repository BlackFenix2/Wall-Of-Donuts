import React from 'react';

import SEO from 'src/components/SEO';
import { css } from '@emotion/core';

import img from 'src/images/Construction.png';

const style = css`
  width: 500px;
  height: 500px;
`;
const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>Wall of Donuts (WIP)</h1>
    <p>Pardon our appearance, our website is under construction </p>

    <div>
      <img src={img} alt="Banner of donuts" css={style} />
    </div>
  </>
);

export default IndexPage;
