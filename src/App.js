import React from 'react';
import './App.css';
// import axios from 'axios';

import BaseRouter from './BaseRouter';
function App() {
 

  return (
    
    <div className="App">
         <BaseRouter />
    </div>
  );
}

// function onhandleClick(){
//   console.log("zin lynn htun");
//  axios.post('https://api.github.com/repos/veerLH/-nuxt-gh-pages/issues',{
//   "title": "Found a bug",
//   "body": "I'm having a problem with this.",
//  },
//  {
//   headers: {'Authorization':'token b0abae05be60d58b599d742de456095cca6382a6'}
//  }
//  )
//  .then(function (response) {
//    console.log('response',response.data);
//  })
//  .catch(function (error) {
//    console.log(error);
//  })
//  .then(function () {
//    // always executed
//  }); 
// }

export default App;
