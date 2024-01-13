// import React, { Component } from 'react'
// import Loading from './Loading.gif'
// export default class Spinner extends Component {
//   render() {
//     return (
//       <div className='my-3'>
//         <img src={Loading} alt="Loading"></img>
//       </div>
//     )
//   }
// }

// function based
import React from 'react'
import Loading from './Loading.gif'
const Spinner = () => {
    return (
      <div className='my-3'>
        <img src={Loading} alt="Loading"></img>
      </div>
    )
}
export default Spinner;
