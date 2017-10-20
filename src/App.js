import React from 'react'
//import cat from './assets/images/jesus.jpeg'


class App extends React.Component {
  render() {
    return(
      <div className="container">
        <h1 className="container"> This is sparta</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
export default App