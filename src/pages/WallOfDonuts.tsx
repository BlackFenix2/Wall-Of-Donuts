import React from 'react';
import DonutWall from 'src/components/DonutWall';
import SEO from 'src/components/SEO';
import { DonutProvider } from 'src/state/context/donutContext';

const WallOfDonuts = () => (
  <>
    <SEO title="Donuts" />
    <DonutProvider>
      <DonutWall />
    </DonutProvider>
  </>
);

export default WallOfDonuts;
