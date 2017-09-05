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
      return state - 1;
    case 'PLUS':
      return state + (action.payload || 0);
    default:
      return state;
  }
};

interface ListenerCallback{
  (): void;
}

interface UnsubscribeCallback{
  (): void;
}

class Store<T>{
  private state:T;
  private listeners: ListenerCallback[] = [];

  constructor(
    private reducer: Reducer<T>,
    initState: T
  ){
    this.state = initState;
  }

  getState(): T{
    return this.state;
  }

  dispatch(action: Action): void{
    this.state = this.reducer(this.state, action);
    this.listeners.forEach(listener=>{
      listener();
    });
  }

  subscribe(listener: ListenerCallback): UnsubscribeCallback{
    this.listeners.push(listener);
    return () =>{
      this.listeners = this.listeners.filter(l => l !== listener);
    }
  }
}

let store = new Store<number>(reducer, 0);

console.log(store.getState());// 0

let unsubcribe = store.subscribe(()=>{
  console.log('subscribe', store.getState());
});


store.dispatch({type: 'PLUS', payload: 7});
store.dispatch({type: 'DECREMENT'});

unsubcribe();

store.dispatch({type: 'INCREMENT'});

console.log(store.getState());// 0