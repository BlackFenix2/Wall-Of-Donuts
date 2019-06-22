import React from 'react';
import { css } from '@emotion/core';

import image from 'src/lib/img/donuts/sprinkles.png';

// import imageChocolate from 'src/lib/img/donuts/chocolate.png';

interface Props {
  topping?: 'vanilla' | 'chocolate' | 'strawberry';
  drizzle?: 'sprinkles';
  Filled?: boolean;
  base?: 'black' | 'powdered';
}

const style = css`
  /*donut base*/
  width: 170px;
  height: 170px;
  border-radius: 50%;
  position: relative;
  background: radial-gradient(#eacb9e, #c45700);
  box-shadow: 0px 1px 4px 2px #00000045;
`;

const donutBasePowdered = css`
  background: radial-gradient(white, grey);
`;

const donutBaseBlack = css`
  background: radial-gradient(chocolate, saddlebrown, grey);
`;

const donutHole = css`
  /*donut hole*/
  &:after {
    content: '';
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 1px 4px 2px #00000045;
  }
`;
const drizzles = css`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-size: contain;
  position: relative;
`;

const sprinkles = css`
  ${drizzles}
  background-image: url(${image});
  background-size: contain;
  background-position: center;
`;

const glaze = css`
  /*donut toppings*/
  content: '';
  padding-bottom: 150px;
  padding-left: 150px;
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 1px 1px 2px #00000045;
`;

const vanilla = css`
  &:before {
    ${glaze}

    background: radial-gradient( white, grey);
  }
`;

const chocolate = css`
  &:before {
    ${glaze}
    background: radial-gradient(chocolate, saddlebrown);
  }
`;

const strawberry = css`
  &:before {
    ${glaze}
    background: radial-gradient(#fc5a8d, #f07f9c);
  }
`;

/** checks incoming props to doncitionally style donut toppings */
const checkToppings = toppings => {
  switch (toppings) {
    case 'chocolate':
      return chocolate;
    case 'vanilla':
      return vanilla;
    case 'strawberry':
      return strawberry;
    default:
      break;
  }
  return null;
};

/** checks incoming props to conditionally style donut toppings */
const checkDrizzle = drizzle => {
  switch (drizzle) {
    case 'sprinkles':
      return sprinkles;

    default:
      break;
  }
  return null;
};

const checkBase = base => {
  switch (base) {
    case 'powdered':
      return donutBasePowdered;
    case 'black':
      return donutBaseBlack;

    default:
      break;
  }
  return null;
};
const DonutTest: React.FunctionComponent<Props> = props => (
  <div
    css={[
      style,
      checkBase(props.base),
      checkToppings(props.topping),
      !props.Filled && donutHole
    ]}
  >
    <div css={checkDrizzle(props.drizzle)} />
  </div>
);
export default DonutTest;
