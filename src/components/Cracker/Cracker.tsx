import React from 'react';

import { AboutCracker } from './AboutCracker';
import { CrackerConstructor } from './CrackerConstructor';

import './Cracker.scss';

export const Cracker:React.FC = () => {
  return (
    <div className="section-cracker">
      <AboutCracker />
      <CrackerConstructor />
    </div>
  );
};
