// const heading=React.createElement('h2',{id:'heading'}, "hello world in react!")
// console.log(heading)
// const root= ReactDOM.createRoot(document.getElementById('root'))
// const y= root.render(heading)

const heading=React.createElement('div',{id:'heading'},[React.createElement('div',{id:'heading2'}, React.createElement('h2',{},'this is h2 tag' )), React.createElement('div',{id:'heading3'}, React.createElement('h2',{},'this is h2 tag' )) ] )
 const root= ReactDOM.createRoot(document.getElementById('root'))
 const y= root.render(heading)