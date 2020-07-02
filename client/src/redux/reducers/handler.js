import { ACTION_TYPE}  from '../actions';

const initialState = {
  register: false
};

const handler = (state = initialState, action) => {
  if (action.type === ACTION_TYPE.REGISTER) {

    return {
      ...state,
      register: true
    }
  }
  return state;
}

export default handler;