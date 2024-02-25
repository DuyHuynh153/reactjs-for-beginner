import React from "react";

// function Greet() {
//   return (
//     <div>
//       <h1> Huynh lam duy</h1>
//     </div>
//   );
// }

const Greet = ({ name, heroName }) => {
  return (
    <div>
      <h1>
        hello {name} a.k.a {heroName}
      </h1>
      {/* {props.children} */}
    </div>
  );
};

export default Greet;
