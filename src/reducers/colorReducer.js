import { ACTIONS } from '../actions/colorActions';

export const initialState = {
  before: [],
  current: '#FF0000',
  after: [],
};

export const colorReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UNDO:
      return {
        after: [state.current, ...state.after],
        current: state.before[state.before.length - 1],
        before: state.before.slice(0, -1),
      };
    case ACTIONS.REDO:
      return {
        before: [...state.before, state.current],
        current: state.after[0],
        after: state.after.slice(1),
      };
    case ACTIONS.RECORD:
      return {
        ...state,
        before: [...state.before, state.current],
        current: action.payload,
      };
    default:
      return state;
  }
};
