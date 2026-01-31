// function App(){
//   //return "Hello sagar"
//   return <h1>Hello ji</h1>
// }
// export default App
// //html->root->app->main
//rafce-->react arrow function extraxt component
// import React from 'react'

// const App = () => {
//   return (
//     <div>
//     <div  id='parent'>
//       <h1  id='child'>App</h1>
//       <h2 id='child2'>Hello</h2>
//       <h3 id='child3'>Sagar</h3>
//       </div>
//      <div>chacha</div>
//      </div>
//   )
// }
// export default App
//we don,t want more divs 
//so we use fragments
//Exactly 👍 — in React, if you don’t want to wrap elements in extra <div>s (which can clutter the DOM), you can use Fragments.

//🔎 Why Fragments?
//They let you group multiple children without adding extra nodes to the DOM.

//Useful when you want to return multiple elements from a component but keep the DOM clean.
//we use empty tags<><> called rappers
import React from 'react'

const App = () => {
  return (
    <>
    <div  id='parent'>
      <h1  id='child'>App</h1>
      <h2 id='child2'>Hello</h2>
      <h3 id='child3'>Sagar</h3>
      </div>
     <div>chacha</div>
     </>
  )
}
export default App