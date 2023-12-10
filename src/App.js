//import logo from './logo.svg';
//import './App.css';

import React, { Component } from "react";
import Information from './components/Information'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;


const informations = [
  {
  'id' : '1',
  'image' : '',
  'name' : 'Hong',
  'job' : 'intern',
  'phone' : '01012345678',
  'email' : 'hong1234@naver.com'
},
{
  'id' : '2',
  'image' : '',
  'name' : 'kim',
  'job' : 'researcher',
  'phone' : '01012345678',
  'email' : 'hong1234@naver.com'
},
{
  'id' : '3',
  'image' : '',
  'name' : 'lee',
  'job' : 'marketer',
  'phone' : '01012345678',
  'email' : 'hong1234@naver.com'
}
]

class App extends Component{
  render(){
    return(
      <div>
        {
          informations.map(c => {
            return (
            <Information
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            job={c.job}
            phone={c.phone}
            email={c.email}
            />
            );
          })
        }
      </div>
      // <div>
      // <Information
      // id={informations[0].id}
      // image={informations[0].image}
      // name={informations[0].name}
      // job={informations[0].job}
      // phone={informations[0].phone}
      // email={informations[0].email}
      // />
      // <Information
      // id={informations[1].id}
      // image={informations[1].image}
      // name={informations[1].name}
      // job={informations[1].job}
      // phone={informations[1].phone}
      // email={informations[1].email}
      // />
      // <Information
      // id={informations[2].id}
      // image={informations[2].image}
      // name={informations[2].name}
      // job={informations[2].job}
      // phone={informations[2].phone}
      // email={informations[2].email}
      // />
      // </div>
    );
  }  
}
export default App;