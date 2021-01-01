/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { renderList } from './actions/index';
import requestMaker from './helpers/requestMaker';

function mapStateToProps(state) {
  const {
    value, imageUrl, isFetching, error,
  } = state;

  return {
    value, imageUrl, isFetching, error,
  };
}

const mapDispatchToProps = dispatch => ({
  requestMaker: (value, imageUrl) => dispatch(requestMaker(value, imageUrl)),
});

function App(props) {
  const handleClick = props => {
    const {
      value, imageUrl, requestMaker,
    } = props;
    requestMaker(value, imageUrl);
  };
  return (
    <div>
      <button onClick={() => handleClick(props)} type="button">Show List</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
