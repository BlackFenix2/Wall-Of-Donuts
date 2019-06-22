import React from 'react';
import DonutWall from 'src/components/DonutWall';
import SEO from 'src/components/SEO';
import { DonutProvider } from 'src/state/context/donutContext';
import { CountProvider } from 'src/state/context/countContext';

const WallOfDonuts = () => (
  <>
    <SEO title="Donuts" />
    <DonutProvider>
      <CountProvider>
        <DonutWall />
      </CountProvider>
    </DonutProvider>
  </>
);

export default WallOfDonuts;
