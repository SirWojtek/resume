import { render } from 'react-dom';
import * as React from 'react';

import { BasicInfo } from './basic-info/basic-info';
import { Education } from './education/education';
import { Languages } from './languages/languages';
import { Projects } from './projects/projects';
import { TechnicalSkills } from './technical-skills/technical-skills';
import { WorkExperience } from './work-experience/work-experience';

const App = () => {
  return (
    <div className="app-container">
      <div className="p-16">
        <BasicInfo/>
      </div>
      <div className="p-16">
        <Education/>
      </div>
      <div className="p-16">
        <Languages/>
      </div>
      <div className="p-16">
        <Projects/>
      </div>
      <div className="p-16">
        <TechnicalSkills/>
      </div>
      <div className="p-16">
        <WorkExperience/>
      </div>
    </div>
  );
};


render(<App />, document.getElementById('root'));
