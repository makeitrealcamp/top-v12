import { useDispatch } from 'react-redux';
import { incremented } from '../store/reducers/counterReducer';

function Button() {
  const dispatch = useDispatch();

  return (

    <button
      type="button"
      onClick={() => dispatch(incremented())}
    >
      Increment
    </button>
  )
}

export default Button
