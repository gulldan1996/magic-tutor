const initialState = {
  token: null,
  userId: null,
  user: null
};

const useAuth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH': {
      return {
        ...state,
        id: 1
      }
    }
  }
}