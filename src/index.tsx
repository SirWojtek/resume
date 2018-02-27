import { render } from 'react-dom';
import * as React from 'react';

import { BasicInfo } from './basic-info/basic-info';

const App = () => {
  return (
    <div className="test">
      <BasicInfo/>
    </div>
  );
};


render(<App />, document.getElementById('root'));
