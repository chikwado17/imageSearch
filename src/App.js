import React, { Component } from 'react';
import PhotoList from './components/PhotoList';
import SearchBar from './components/SearchBar';
import PhotoContextProvider from './Context/PhotoContext';


class App extends Component {

  render() {
    return (
      <div className="ui container" style={{marginTop: '20px'}}>
         <PhotoContextProvider>
            <SearchBar/>
            <PhotoList/>
         </PhotoContextProvider>
      </div>
    );
  }
}

export default App;
