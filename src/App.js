import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// connect function will connect this component with redux store
import {connect} from 'react-redux'

// we have to pull funcitons from action creators that will be avaliable as props on this component
import {addNumber, subNumber,setColor,fetchPictures,fetchJoke} from './actions'
class App extends Component {
  constructor() {
    super();
    this.state = {
    
    }
  }

  ChangeColor(){
    // we are calling our funciton from actioncreators
    this.props.setColor(this.props.color)
  }

  renderPics(arr){
    // ["0"].images.preview_gif.url
    arr.map(el => {
      return(
        <div>
        Hello
        </div>
      )
     
    })
  }
  componentDidMount () {
    console.log('COMPONENT DID MOUNT')
    this.props.fetchPictures()
    this.props.fetchJoke()
  }
  
  render() {

    // console.log(this.props.pictures.data)
    const styles = {
      button: {
        color: this.props.color
      }
    }
    
      return (

      <div>
            <h3>Super Duper Fancy App </h3>

        {this.props.joke.value ? <div>{this.props.joke.value.joke}</div> : console.log('NO DATA')}

        {this.props.pictures.data ? this.props.pictures.data.map(pic=>{
            return(
              <img key={pic.id} src={pic.images.preview_gif.url} alt=""/>
            )

        }) : console.log('Pics Are not here')}

       


        <h2>
        {/* this is our number  */}
        {this.props.number}
          
        </h2>
           <button
           onClick={()=>this.props.addNumber(this.props.number)}
           >
           Add Me!
           </button>
           <button
           onClick={()=>this.props.subNumber(this.props.number)}
           >
           Subtract Me!
           </button>
          <button style={styles.button} onClick={()=>this.ChangeColor()}>
             Change Color Here!
          </button>
      </div>
      )

      
  }

}
const mapStateToProps = (state) => {
// this is comming from redux as props
//  so in our props we will have number and color as props
//  by default from reducers it is going to be '0' and 'black'
  return {
      number: state.number,
      color : state.color,
      pictures: state.pictures,
      joke : state.joke
  }
}



//  here we are connecting with redux
// redux itself returns a funciton that accept mapStateToProps and actionCreators
// all will be avaliable as props
export default connect(mapStateToProps,{addNumber, subNumber,setColor,fetchPictures,fetchJoke})(App);


