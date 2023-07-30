import './Cracker.scss';

import { AboutCracker } from "./AboutCracker";
import { CrackerConstructor } from "./CrackerConstructor";

export const Cracker = () => {
  return (
    <div className="section-cracker">
      <AboutCracker />
      <CrackerConstructor />
    </div>
  );
};
