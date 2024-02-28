import React from 'react';
import ReactDom from 'react-dom'
// Imports two libraries the react app to help build UI's and React dom is a library used to Render React Components. 
import App from './app';
// Import the component

ReactDom.render(<App />, document.getElementById('root'));
// This render the app and finds it by finding the html element which has an id of root. This is found in the index.html file



