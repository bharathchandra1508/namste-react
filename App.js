const parent = React.createElement("div",{id: "parent"},
    [React.createElement("div",{id: "child"},
        [React.createElement("h1",{},"I am <h1> Tag"), React.createElement("h2",{},"I am <h2> Tag")])],
        [React.createElement("div",{id: "child2"},
            [React.createElement("h1",{},"I am <h1> Tag"), React.createElement("h2",{},"I am <h2> Tag")])
]);

//const heading = React.createElement("h1",{id: "heading"},"Hello World from React!");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);