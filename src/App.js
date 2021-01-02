/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requestMaker from './helpers/requestMaker';
import reqMakerForPokemon from './helpers/requestMakerForPokemon';

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
  reqMakerForPokemon: url => dispatch(reqMakerForPokemon(url)),
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
                <Link
                  to={data.url}
                  onClick={() => props.reqMakerForPokemon(data.url)}
                >
                  {data.name}
                </Link>
                {' '}
                <p>{data.url}</p>
                <img src={props.imageUrl[i].sprites.front_default} alt="pokemon" />
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
