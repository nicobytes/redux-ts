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
    default:
      return state;
  }
};

var incrementAction: Action = {
  type: 'INCREMENT'
};

console.log(reducer(0, incrementAction));//1
console.log(reducer(1, incrementAction));//2

var decrementAction: Action = {
  type: 'DECREMENT'
};

console.log(reducer(5, decrementAction));//4


var someAction: Action = {
  type: 'asas'
};

console.log(reducer(5, someAction));//5