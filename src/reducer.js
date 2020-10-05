
export const initialState = {
  userProfile: JSON.parse(localStorage.getItem('profile')) || null,
  isAuthenticated: localStorage.getItem('isAuthenticated') || false,
}

export const actionTypes = {
  SET_USER: 'SET_USER'
}

const reducer = (state, action) => {
  switch(action.type) {
    case actionTypes.SET_USER: 
      return {
        ...state,
        userProfile: action.userProfile,
        isAuthenticated: true,
      }
    default:
      return state
  }
}

export default reducer