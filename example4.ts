interface Action{
  type: string;
  payload?: any;
}


interface Reducer<T>{
  (state: T, action: Action): T;
}

var reducer: Reducer<number> = (state: number, action: Action) =>{
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state + 1;
    case 'PLUS':
      return state + (action.payload || 0);
    default:
      return state;
  }
};

var plusAction: Action = {
  type: 'PLUS',
  payload: 7
}

console.log(reducer(7, plusAction));//14
console.log(reducer(67, {type: 'PLUS', payload: 3}));//70
console.log(reducer(8, {type: 'PLUS', payload: 2}));//10
console.log(reducer(7, {type: 'PLUS'}));//14