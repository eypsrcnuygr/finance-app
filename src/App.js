/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import requestMaker from './helpers/requestMaker';

function mapStateToProps(state) {
  const {
    value, imageUrl, isFetching, error,
  } = state.FetchPokemonReducer;

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
  let renderedComponent;
  let i = -1;
  if (props.value === null) {
    renderedComponent = (
      <div>
        <button onClick={() => handleClick(props)} type="button">Show List</button>
      </div>
    );
  } else {
    renderedComponent = (
      <div>
        {
          props.value.map(data => {
            i += 1;
            return (
              <div key={i}>
                <p>{data.name}</p>
                {' '}
                <p>{data.url}</p>
                <img src={props.imageUrl[i]} alt="pokemon" />
              </div>
            );
          })
}
      </div>
    );
  }

  return (
    <>
      { renderedComponent }
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
