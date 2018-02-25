import * as React from 'react';
import * as ReactDOM from 'react-dom';

//import 'styles.scss'

const App = () => {
  return (
    <div className="test">
      <p>Hello world!</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
