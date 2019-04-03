// import 'es5-shim';
// import 'es6-shim';
// import 'es6-promise';
//
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

import App from './containers/app';

//import packages
import React from 'react';
import ReactDOM from 'react-dom';

//import CSS
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter } from 'react-router-dom';


// Global styles
// import './styles/index.css';
// import './assets/css/Header-Blue.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



// const store = configureStore({});
// // const history = syncHistoryWithStore(browserHistory, store);
//
// ReactDOM.render(
//     <div>
//         <Provider store={ store }>
//             <Router history={ browserHistory }>
//                 { routes }
//             </Router>
//         </Provider>
//     </div>,
//     document.getElementById('root')
// );

ReactDOM.render(<App />, document.getElementById('root'))


