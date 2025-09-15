# Welcome to React World 


import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";

// let heading = React.createElement("h1", {
//     id : "heading_1", class : "abc"
// }, "Hello World !!");

// console.log(heading)

// let root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);

// <div id="parent">
//     <div id='child1'>
//         <div id='innerChild1'>
//             <h1>Hello</h1>
//         </div>
//     </div>
//     <div id='child2'>
//         <div id='innerChild2'>
//             <h1>Hai</h1>
//         </div>
//     </div>
// </div>


// let heading = React.createElement(
//   "div",
//   {
//     id: "parent",
//   },
//   [
//     React.createElement(
//       "div",
//       {
//         id: "innerChild1",
//       },
//       React.createElement("h1", {}, "This is h1")
//     ),
//     React.createElement(
//       "div",
//       {
//         id: "innerChild2",
//       },
//       React.createElement("h1", {}, "hai")
//     ),
//   ]
// );
// console.log(heading);

// const jsxHeading = <h2>Hello JSX Heading !!</h2>;

// const jsxHeading2 = (
//   <h2 className="head" tabIndex="5">
//     Hello JSX Heading !!
//   </h2>
// );

// console.log(jsxHeading);
// console.log(<h3>Hello</h3>);
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



// //React Components

// const HeaderComponent = () => {
//   return <h1>Hello React Functionl Component</h1>
// };

// const HeaderComponent2 = () => <h1>Functional Component 2</h1>;

// const HeaderComponent_MultiLines = () => 
//   (
//     <h1 id="newhead"> Multi Line 1 Header Component</h1>
//   );

// const HeaderComponent_Multi = () => (
//   <div>
//     {/* comments */}
//     {<HeaderComponent_MultiLines/>}
//       <HeaderComponent2/>
//       <h1 id="newhead"> Multi Line Header Component</h1>
//   </div>
// )


// const root2 = ReactDOM.createRoot(document.getElementById('root2'));
// root2.render(<HeaderComponent/>);
// root2.render(<HeaderComponent2/>);
// root2.render(<HeaderComponent_MultiLines/>);
// root2.render(<HeaderComponent_Multi/>);



// PART 3

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a
// div with class “title”)

const containerWithNestedHeadTags = React.createElement("div", {className: "title"}, React.createElement("h1", {id:"head1"}, 
    React.createElement("h2", {id: 'head2'}, 
      React.createElement("h3", {id: "head3"}, "head3")
    )
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));


const containerWithNestedHeadTags_JSX = <div><h1>head1</h1><h2>head2</h2></div>

root.render(containerWithNestedHeadTags_JSX);


// HEADER COMPONENT WITH LOGOS etc

const LogoComponent = () => (
  <span>Logo</span>
);

const SearchBarComponent = () => (
  <input type="search" placeholder="search here"/>
);

const UserComponent = () => (
  <span>+</span>
);

const HeaderComponent = () => (
  <div className='header'>
    <LogoComponent/>
    <SearchBarComponent/>
    <UserComponent/>
  </div>
)

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<HeaderComponent/>);

Food Ordering APP
==============


/*
 * Header Component
 *   - Logo
 *   - Nav Items
 * Body Component
 *     - Search Bar
 *     - Restuarant Container
 *       - Restuarant Card
 * Footer Component
 *     -  Copy right
 *     - Links
 *     - Address
 *     - Contact
 */
