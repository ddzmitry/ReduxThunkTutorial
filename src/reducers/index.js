import {INCREASE_THE_NUMBER, DECREASE_THE_NUMBER, CHANGE_COLOR,FETCH_PICTURES,FETCH_jOKE} from '../actions';

// THIS WILL CREATE A STORE
import { combineReducers }  from 'redux';

// this will return us a state 
function number(state=0,action){
        console.log('REDUCER WAS CALLED',action)
    switch (action.type) {
        case INCREASE_THE_NUMBER:

            let newNumber = action.number+=1

            return newNumber
            break;
        case DECREASE_THE_NUMBER:

            return action.number-=1
            break;
        default:
        return state
            break;
    }
}
function color(state='black',action){
    console.log('REDUCER WITH CHANGE COLOR WAS CALLED',state)
    console.log(action)
    switch (action.type) {
        case CHANGE_COLOR:
            console.log('WE WILL BE CHANGIBG COLOR')
            return action.color
            break;
        default:
            return state
    }

}
function pictures(state='',action){
    console.log('REDUCER WITH GET PICS',state)
    console.log(action)
    switch (action.type) {
        case FETCH_PICTURES:
            console.log('WE WILL BE FETCH_PICTURES ')
            return action.pictures
            break;
        default:
            return state
    }

}
function joke(state='',action){
    switch (action.type) {
        case FETCH_jOKE:
            return action.joke
            break;
        default:
        return state
    }
}


// STORE combineReducers -> Combine all reducers in one
export default combineReducers({
    number,
    color,
    pictures,
    joke
})