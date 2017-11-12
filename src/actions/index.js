
// Actions 
export const INCREASE_THE_NUMBER = 'INCREASE_THE_NUMBER'
export const DECREASE_THE_NUMBER = 'DECREASE_THE_NUMBER'
export const CHANGE_COLOR = 'CHANGE_COLOR'
export const FETCH_PICTURES = 'FETCH_PICTURES'
export const FETCH_jOKE = 'FETCH_JOKE'
import axios from 'axios'
// Action Creators
export function addNumber(number){
    console.log('ACTION WAS CALLED',number)
    console.log(INCREASE_THE_NUMBER)
    return{
        
        type:INCREASE_THE_NUMBER,
        number
    
    } 
}

export function subNumber(number){
    console.log('ACTION WAS CALLED',number)
    console.log(DECREASE_THE_NUMBER)
    return{
        
        type:DECREASE_THE_NUMBER,
        number
    
    } 
}

export function setColor(color){
        console.log('CHANGE_COLOR')
        var colors= ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
        'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
        'silver', 'teal', 'white', 'yellow']; 
        let RandomColor = colors[Math.floor(Math.random() * colors.length)]   
        console.log('RandomColor', RandomColor)
        return {
            type: CHANGE_COLOR,
            color: RandomColor
        }
}

export const fetchPictures = () => {
        // returning dispatch with async way
        // this is thunk
        // retducer = > Dispatch => action => new state
        //  reducer => Dispatch => fetches data => data.json() => JSON => dispatch 
        return dispatch => {
            // wil return promise
            //  axios
            return fetch('http://api.giphy.com/v1/gifs/search?q=dogs/&api_key=dc6zaTOxFJmzC&limit=10')
            // turn it to JSON
            .then(res => res.json())
            // and apply JSON to be send to reducerx
            //  this is final dispatch to redux store
            .then(json => dispatch({type:FETCH_PICTURES, pictures: json}))
        }
    
    };
export const fetchJoke = () =>{
    return dispatch => {
        
        return fetch('http://api.icndb.com/jokes/random')
        .then(res =>{
             console.log('INSIDE fetchJoke')   
            console.log(res)
            return res.json()
        })
        .then(joke => dispatch({type:FETCH_jOKE, joke: joke}))
    }
}
// http://api.icndb.com/jokes/random