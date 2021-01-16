export function manageFriends(state={friends: [], action}){
  if (action.type === 'ADD_FRIEND') {
    return {...state, friends: [...state.friends, action.friend] }
  } else if (action.type === 'REMOVE_FRIEND') {
    let friends = state.friends.slice(0, action.id).concat(state.friends.slice(action.id + 1))
    return {...state, friends: friends }
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
