import React ,{Component} from 'react';
import Box from './box'
class Hello extends  Component {
  constructor() {
    super();

  }

  render() {
    return (
          <div>
            <h1> Hello Danny</h1>
            <Box/>
          </div>
        
    )
  }

//   componentDidMount() {
//     this.setState({ someKey: 'otherValue' });
//   }
}

export default Hello;
