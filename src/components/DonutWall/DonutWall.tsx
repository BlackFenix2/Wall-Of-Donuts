import * as React from 'react';
import arrayMove from 'array-move';
import Board from './Board';

export interface DonutProps {
  id?: string;
  content: string;
  topping?: 'vanilla' | 'chocolate' | 'strawberry';
  drizzle?: 'sprinkles';
}

const donuts: DonutProps[] = [
  {
    content: `Pink Donut`,
    topping: 'strawberry',
    drizzle: 'sprinkles'
  },
  {
    content: `Pink Donut`,
    topping: 'strawberry',
    drizzle: 'sprinkles'
  },
  {
    content: `Pink Donut`,
    topping: 'strawberry',
    drizzle: 'sprinkles'
  },
  {
    content: `Pink Donut`,
    topping: 'strawberry',
    drizzle: 'sprinkles'
  },
  {
    content: `Pink Donut`,
    topping: 'strawberry',
    drizzle: 'sprinkles'
  },
  {
    content: `Pink Donut`,
    topping: 'strawberry',
    drizzle: 'sprinkles'
  },
  {
    content: `Pink Donut`,
    topping: 'strawberry',
    drizzle: 'sprinkles'
  },
  {
    content: `Pink Donut`,
    topping: 'strawberry',
    drizzle: 'sprinkles'
  },
  {
    content: `Pink Donut`,
    topping: 'strawberry',
    drizzle: 'sprinkles'
  },
  {
    content: `Pink Donut`,
    topping: 'strawberry',
    drizzle: 'sprinkles'
  },
  {
    content: `Pink Donut`,
    topping: 'strawberry',
    drizzle: 'sprinkles'
  },
  {
    content: `Pink Donut`,
    topping: 'strawberry',
    drizzle: 'sprinkles'
  }
];

const DonutWall = () => {
  const [donutList, setDonutList] = React.useState<DonutProps[]>(donuts);

  // persist sort list on drag exit
  const sortEnd: ({ oldIndex, newIndex }: any) => void = ({
    oldIndex,
    newIndex
  }) => {
    setDonutList(arrayMove(donutList, oldIndex, newIndex));
  };
  return (
    <div>
      <h1>Wall of Donuts</h1>

      <Board donutList={donutList} setOrder={sortEnd} />
    </div>
  );
};

export default DonutWall;
