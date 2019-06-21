import React from 'react';
import TabLink from 'src/components/TabLink';
import { css } from '@emotion/core';

const Credits = () => (
  <>
    <h1>Licensing</h1>
    <div>
      images/vectors
      <p>
        Food vector created by freepik -
        <TabLink href="https://www.freepik.com/free-photos-vectors/food">
          <span
            css={css`
              text-decoration: underline;
            `}
          >
            {' '}
            freepik.com
          </span>
        </TabLink>
      </p>
    </div>
  </>
);

export default Credits;
