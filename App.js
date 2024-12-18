
    //  first episode inception  
    const heading = React.createElement("h1",{
        // yha par attributes dete he 
        id : "heading" , xyz: "abc"
    }, "Hello world from React00 ");
    console.log(heading);
    //  yha se ye react element de rha he ..ye object he
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
//  reder method isko convert kar rhi h1 tag ko jisse browser smj ske 

//  div ke ander div method 
//  <div id=parent>
//      <div id=child>
//          <h1?> " I am a h1 tag "</h1?
//       </div>
//   </div>

const heading1 = React.createElement(
    "div",
    { id : "parent" } , 
    React.createElement(
        "div" , 
        {id : " child"} , 
        React.createElement("h1" , {}, " I am a 100 inner H1 tag")
    )
 );
 const root1 = ReactDOM.createRoot(document.getElementById("root1"));
 console.log(parent);
 root1.render(heading1);


//   More than one children
//  div ke ander div method 
//  <div id=parent>
//      <div id=child>
//          <h1> " I am a h1 tag "</h1>
//           <h2 h2> " I am h2 child " </h2>
//       </div>
//   </div>


//  isme array banna padega 
const heading2 = React.createElement(
    "div",
    { id : "parent1" } , 
    React.createElement(
        "div" , 
        {id : " child1"} , 
       [ React.createElement("h1" , {}, " I am a inner H1 tag") ,
         React.createElement("h2" , {}, " I am a inner H2 tag") ]
    )
 );
 const root2 = ReactDOM.createRoot(document.getElementById("root2"));
 
 root2.render(heading2);