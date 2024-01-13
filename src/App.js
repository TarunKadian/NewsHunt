// import "./App.css";
// import Navbar from './component/Navbar'
// import React, { Component } from "react";
// import News from "./component/News";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

// import LoadingBar from "react-top-loading-bar";
// export default class App extends Component {
//   pageSize=6;
//   apiKey = process.env.REACT_APP_NEWS_API
//   state = {
//     progress:0
//   }
//   setProgress = (progress) => {
//     setState({progress:progress})
//   }
//   render() {
    
//     return (
//       <div>
//         <Router>
//         <LoadingBar
//         color='#f11946'
//         height={3}
//         progress={state.progress}
//         // onLoaderFinished={() => setProgress(0)}
//       />
//         <Navbar/>
//         <Routes>
//           <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/>
//           <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
//           <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}/>
//           <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
//           <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
//           <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}/>
//           <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}/>
//         </Routes>
//         </Router>
        
//       </div>
//     );
//   }
// }

//function based
import "./App.css";
import Navbar from './component/Navbar'
import React ,{useState} from "react";
import News from "./component/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

import LoadingBar from "react-top-loading-bar";
const App = () => {
  const pageSize=6;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress,setProgress]=useState(0);
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Navbar/>
        <Routes>
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}/>
        </Routes>
        </Router>
        
      </div>
    );
};
export default App;