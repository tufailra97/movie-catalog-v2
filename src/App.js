import React, { Component } from 'react';
import Movies from './pages/Movies';
import Series from './pages/Series';


//Main app
class App extends Component {

  render(){
    return(
      <div> 
        <Movies />
      </div>
    );
  }
}
export default App;
