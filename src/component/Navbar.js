// import React,{Component} from 'react'
// import { Link } from 'react-router-dom'

// export default class Navbar extends Component {

//   render() {
//     return (
//       <div>
//         <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="/">
//               NewsHunt
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page" href="/">
//                     Home
//                   </a>
//                 </li>
//                 {/* <li className="nav-item">
//                   <a className="nav-link" href="/about">
//                     About
//                   </a>
//                 </li> */}
//                 <li><Link className="nav-link" to="/general">General</Link></li>
//                 <li><Link className="nav-link" to="/business">Businees</Link></li>
//                 <li><Link className="nav-link" to="/sports">Sports</Link></li>
//                 <li><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
//                 <li><Link className="nav-link" to="/health">Healths</Link></li>
//                 <li><Link className="nav-link" to="/science">Science</Link></li>
//                 <li><Link className="nav-link" to="/technology">Technology</Link></li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     )
//   }
// }


//function based
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsHunt
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li> */}
                <li><Link className="nav-link" to="/general">General</Link></li>
                <li><Link className="nav-link" to="/business">Businees</Link></li>
                <li><Link className="nav-link" to="/sports">Sports</Link></li>
                <li><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li><Link className="nav-link" to="/health">Healths</Link></li>
                <li><Link className="nav-link" to="/science">Science</Link></li>
                <li><Link className="nav-link" to="/technology">Technology</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
}
export default Navbar;