// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
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




// import styled from "styled-components";

// const Title = styled.h1`
//   color: ${(props) => props.theme.textColor};
// `;

// const Wrapper = styled.div`
//   display: flex;
//   height: 100vh;
//   width: 100vw;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(props) => props.theme.backgroundColor};
// `;
// import Circle from "./Circle";

// function App() {
//   return (
//     <Wrapper>
//       <Title>Hello</Title>
//     </Wrapper>
//     <div>
//       <Circle bgColor="teal" />
//       <Circle bgColor="tomato" />
//     </div>
//   );
// }



import Circle from "./Circle";


function App(){
  return (
  <div>
    <Circle />
  </div>
  );
}

export default App;