import { Fragment } from 'react';
import { Link } from 'react-router-dom'; 
import Home from "./routes/home/home";
import Nav from './components/nav/nav'

const App = () => {
  return (
    <Fragment className="App">
      <div>
        <Home/>
      </div>
    </Fragment>
  );
}

export default App;
