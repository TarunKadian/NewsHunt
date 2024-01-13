// import React, { Component } from "react";
// import news from "./news.png";

// export class NewsItems extends Component {
//   render() {
//     let { title, description, imageUrl, newsUrl, author, date,source } = this.props;
//     return (
//       <div>
//         <div className="card">
//           <img
//             src={
//               !imageUrl
//                 ? <img alt="./news.png"></img>
//                 : imageUrl
//             }
//             className="card-img-top"
//             alt="..."
//           />
//           <div className="card-body">
//             <h5 className="card-title">{title} <span className="badge badge-danger bs-badge-color=red">{source}</span></h5>
//             <p className="card-text">{description}</p>
//             <p className="card-text">
//               By {!author?"unknown":author} on {new Date(date).toGMTString()}.
//             </p>
//             <a
//               rel="noreferrer"
//               href={newsUrl}
//               target="_blank"
//               className="btn btn-dark"
//             >
//               Read more
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default NewsItems;

//function based
import React from 'react';
const NewsItems = (props) => {
    let { title, description, imageUrl, newsUrl, author, date,source } = props;
    return (
      <div>
        <div className="card">
          <img
            src={
              !imageUrl
                ? <img alt="./news.png"></img>
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} <span className="badge badge-danger bs-badge-color=red">{source}</span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              By {!author?"unknown":author} on {new Date(date).toGMTString()}.
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItems;