//props in react

// import React from 'react'
// import ProfileCard from './components/ProfileCard'

// const App = () => {
//   return (
//     <>
//     <ProfileCard name="Shivam" age={21} location="Delhi" />
//     <ProfileCard name="Rahul" age={23} location="Mumbai" />
//     <ProfileCard  age={25} location="Kolkata" />
//     </>
//   )
// }

// export default App

//conditional rendering in react

// import React from "react";

// const App = () => {
//   const admin = true;
//   if (admin) {
//     return (
//       <div>
//         <h1>Hello Admin!</h1>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h1>Hello Guest</h1>
//       </div>
//     );
//   }
// };

// export default App;

//import React from "react";
//import { useState } from "react";

// const App = () => {
//   let [Count, SetCount] = useState(5);
//   // let a = 5;

//   function Increase() {
//     // a += 5;
//     SetCount(Count++);
//     // console.log(a);
//   }

//   return (
//     <div>
//       <h1>Welcome to number confusion: {a}, {Count}</h1>
//       <button onClick={Increase}>Increase</button>
//     </div>
//   );
// };

// export default App;

//counter app using react use state
// import React, { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Counter: {count}</h2>

//       <button onClick={() => setCount(count + 1)}>Increase</button>

//       <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
//         Decrease
//       </button>

//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// };

// export default Counter;
import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App