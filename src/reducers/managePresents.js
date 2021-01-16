export function managePresents(action, state = {numberOfPresents: 0}){
  switch(action.type) {
    case 'INCREASE': 
      return {...state, state.numberOfPresents += 1}
    case default: 
      return state
  }
}
