export function managePresents(state = {numberOfPresents: 0}, action){
  if (action.type === 'INCREASE') {
    return {...state, numberOfPresents: (state.numberOfPresents + 1)};
  } else {
    return state;
  }
}



/*export function manageFriends(action, state={friends: []}){
  let idx;
  switch(action.type){
    case 'ADD_FRIEND':
      return {...state, action.friend}
    case 'REMOVE_FRIEND': 
      idx = state.findIndex(friend => friend.id === action.id)
      return  {...state.books.slice(0, idx), ...state.books.slice(idx + 1)}
    case default: 
    
  }
}*/
