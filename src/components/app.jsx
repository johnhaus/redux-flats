import React, { Component } from 'react';

import Flatlist from '../containers/flat_list';
import Map from '../containers/map';

class App extends Component {
  render () {
    return (
      <div className="row">
        <Flatlist />
        <Map />
      </div>
    );
  }
}

export default App;
