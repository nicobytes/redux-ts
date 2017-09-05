// interface Action{
//   type: string;
//   payload?: any;
// }


// interface Reducer<T>{
//   (state: T, action: Action): T;
// }

// var reducer: Reducer<number> = (state: number, action: Action) =>{
//   switch(action.type){
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     case 'PLUS':
//       return state + (action.payload || 0);
//     default:
//       return state;
//   }
// };

// class Store<T>{
//   private state:T;

//   constructor(
//     private reducer: Reducer<T>,
//     initState: T
//   ){
//     this.state = initState;
//   }

//   getState(): T{
//     return this.state;
//   }

//   dispatch(action: Action): void{
//     this.state = this.reducer(this.state, action);
//   }
// }

// let store = new Store<number>(reducer, 0);

// console.log(store.getState());// 0

// store.dispatch({type: 'INCREMENT'});
// console.log(store.getState());// 1


// store.dispatch({type: 'PLUS', payload: 7});
// console.log(store.getState());// 8

store.dispatch({type: 'DECREMENT'});
console.log(store.getState());// 7