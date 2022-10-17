export function manageFriends(state, action) {
  switch (action.type){
    case 'friends/add':
      return {...state, hometown: state.hometown, name: state.name, id: state.id}
    case 'friends/remove':

    default:
      return state
  }
  // your code here
}
