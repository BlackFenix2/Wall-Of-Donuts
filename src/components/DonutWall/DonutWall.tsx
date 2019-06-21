import * as React from 'react';
import arrayMove from 'array-move';
import { useDonut } from 'src/state/context/donutContext';
import Board from './Board';

const DonutWall = () => {
  const [donutList, setDonutList] = useDonut();
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
