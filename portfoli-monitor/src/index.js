// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import React from "react";
import {render} from "react-dom";


// only necessary if you're using ag-Grid-Enterprise features
// import "ag-grid-enterprise";

// our application
import App from "./App";

document.addEventListener('DOMContentLoaded', () => {
    render(
        <App/>,
        document.querySelector('#root')
    );
});
