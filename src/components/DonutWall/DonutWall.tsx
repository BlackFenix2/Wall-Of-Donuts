import * as React from 'react';
import arrayMove from 'array-move';
import Board from './Board';

export interface DonutProps {
  id?: string;
  content: string;
  base?: 'black' | 'powdered';
  topping?: 'vanilla' | 'chocolate' | 'strawberry';
  drizzle?: 'sprinkles';
  filled?: boolean;
}

const donuts: DonutProps[] = [
  {
    content: `Vanilla Kreme`,
    topping: 'vanilla',
    filled: true
  },
  {
    content: `Chocolate Overload`,
    base: 'black',
    drizzle: 'sprinkles'
  },
  {
    base: 'powdered',
    content: `Vanilla Powder`,
    topping: 'vanilla'
  },
  {
    content: `Swirl`,
    base: 'powdered',
    topping: 'chocolate',
    drizzle: 'sprinkles'
  },
  {
    content: `Pink Donut`,
    topping: 'vanilla',
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
    drizzle: 'sprinkles',
    filled: true
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
