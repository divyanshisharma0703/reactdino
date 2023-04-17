import React from "react";
import ReactDOM from "react-dom/client";


const jsx = <span>Namaste react using jsx</span>
const jsxHeading = (<h1 className="head">
    {jsx}
    
    Namaste react using jsx
</h1>

);

const Title = () => <h1 id="Title">This is Title component</h1>;
const HeadingComponent = () => (
  <div className="headingComponent">
    {jsxHeading}
    <Title />
     <h2>{100*2}</h2>
    
    {<h3>Normal js function returns some jsx code/read element</h3>}

    <h1>This is Heading Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
  
root.render(<HeadingComponent />);
console.log(jsxHeading);
