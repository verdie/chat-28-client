import React from 'react';


class App extends React.Component{
  state={
    messages: []
  }
  source = new EventSource('http://localhost:5000/stream')
  componentDidMount(){
    this.source.onmessage =  (event) => {
      console.log('event test:', event)
      const newMessages= [...this.state.messages, event.data]
      this.setState({messages: newMessages})
    }
  }
    
    render(){
      const messages = this.state.messages.map(message=> <p>{message}</p>)
      const form =<form onSubmit= {this.onSubmit}>
        <input type='text'/>
        <button type='submit'>Send</button>
      </form>
      return <main>{form}{messages}</main>
    }
}
export default App;
