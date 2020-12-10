import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component{
    constructor(props)
    {
      super(props);
      this.state = {value: ''};
      this.addValue = this.addValue.bind(this);
      this.updateInput = this.updateInput.bind(this);
    }
    
    addValue(evt)
    {
      evt.preventDefault();
      if(this.state.value !=undefined)
      {
        alert('Your input value is: ' + this.state.value)
      }
    }
    updateInput(evt){
      this.state={value: evt.target.value};   
        }
    
    render()
    {
      return (
      <form onSubmit={this.addValue}>
      <input type="text" onChange={this.updateInput} /><br/><br/>
      <input type="submit" value="Click Me :)"/>
      </form>
      )
    }
  }

  ReactDOM.render(<Hello />, document.getElementById('root'));
  export default Hello;