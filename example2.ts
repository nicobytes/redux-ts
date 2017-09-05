interface Action{
  type: string;
  payload?: any;
}


interface Reducer<T>{
  (state: T, action: Action): T;
}

var reducer: Reducer<number> = (state: number, action: Action) =>{
  if(action.type === 'INCREMENT'){
    return state + 1;
  }
  if(action.type === 'DECREMENT'){
    return state - 1;
  }
  return state;
};

var incrementAction: Action = {
  type: 'INCREMENT'
};

var decrementAction: Action = {
  type: 'DECREMENT'
};

console.log(reducer(0, incrementAction));//1
console.log(reducer(1, incrementAction));//2

console.log(reducer(5, decrementAction));//4