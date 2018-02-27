import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Button from 'material-ui/Button';

const App = () => {
  return (
    <div className="test">
      <Button>Test</Button>
      <p>Hello world!</p>
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));
