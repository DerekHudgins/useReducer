import React, { useReducer } from 'react';
import { colorReducer, initialState } from '../../reducers/colorReducer';
import { ACTIONS } from '../../actions/colorActions';

const App = () => {
  const [state, dispatch] = useReducer(colorReducer, initialState);
  const { current, after, before } = state;

  return (
    <>
      <button
        aria-label="undo-button"
        onClick={() => dispatch({ type: ACTIONS.UNDO })}
        disabled={!before.length}
      >
        undo
      </button>
      <button
        aria-label="redo-button"
        onClick={() => dispatch({ type: ACTIONS.REDO })}
        disabled={!after.length}
      >
        redo
      </button>
      <input
        aria-label="color-picker"
        type="color"
        value={current}
        onChange={({ target }) =>
          dispatch({ type: ACTIONS.RECORD, payload: target.value })
        }
      />
      <div
        aria-label="display"
        style={{
          backgroundColor: current,
          width: '10rem',
          height: '10rem',
        }}
      ></div>
    </>
  );
};

export default App;
