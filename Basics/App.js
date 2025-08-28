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

let heading = React.createElement("div", {
        id: 'parent'
    },
    [React.createElement("div", {
            id: 'innerChild1'
        }, React.createElement("h1", {}, 'hello')),
        React.createElement("div", {
            id: 'innerChild2'
        }, React.createElement("h1", {}, 'hai'))
    ]);


let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);