import React, { FunctionComponent } from 'react';
import { css } from '@emotion/core';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

import DonutTest from './DonutTest';
import { DonutProps } from './DonutWall';

interface Props {
  donutList: DonutProps[];
  setOrder: ({ oldIndex, newIndex }: any) => void;
}

const style = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1080px;
  background-color: #ffffff;
  border: 10px ridge #d4af37;
  outline: 10px ridge #d4af37;
  margin: 10px;

  > div {
    margin: 30px;
  }
  > div :hover {
    transition: transform 300ms;
    transform: scale(1.1);
    cursor: grab;
  }
`;

const SortableItem = SortableElement(({ value }) => (
  <div>
    <DonutTest
      topping={value.topping}
      drizzle={value.drizzle}
      Filled={value.filled}
    />
    {value.content}
  </div>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <div css={style}>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});

const Board: FunctionComponent<Props> = props => (
  <SortableList items={props.donutList} onSortEnd={props.setOrder} axis="xy" />
);

export default Board;
