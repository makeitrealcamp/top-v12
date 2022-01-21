import { useDispatch } from 'react-redux';
// import { incremented } from '../store/reducers/counterReducer';
import { INCREMENT_COUNT } from '../store/reducers/counterReducer';

function Button() {
  const dispatch = useDispatch();

  return (

    <button
      type="button"
      onClick={() => dispatch({ type: INCREMENT_COUNT })}
    >
      Increment
    </button>
  )
}

export default Button
