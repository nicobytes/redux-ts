import { Action, Reducer, createStore, Store } from 'redux';

interface PlusAction extends Action{
  payload: number;
}

let reducer: Reducer<number> = (state: number = 0, action: Action)=>{
  switch(action.type){
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'PLUS':
      return state + (<PlusAction>action).payload;
    default:
      return state;
  }
} 

let store: Store<number> = createStore<number>(reducer);

console.log(store.getState());//4

store.dispatch({type: 'INCREMENT'});
console.log(store.getState());//5
store.dispatch({type: 'DECREMENT'});
console.log(store.getState());//4

store.subscribe(()=>{
  console.log('subscribe',store.getState());
})
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'PLUS', payload: 4});