/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { connect } from 'react-redux';

function mapStateToProps(state) {
  const {
    url, isLoading,
  } = state.FetchPokemonDetailsReducer;

  return {
    url, isLoading,
  };
}

const Pokemon = props => {
  let renderedComponent;
  if (props.isLoading || !props.url) {
    renderedComponent = (<div>Loading</div>);
  } else {
    renderedComponent = (
      <div>
        {props.url.base_experience}
        {' '}
        {props.url.forms[0].name}
        {' '}
        <img src={props.url.sprites.front_default} alt="selected-pokemon" />
      </div>
    );
  }
  return (
    <div>
      {renderedComponent}
    </div>
  );
};

export default connect(mapStateToProps, null)(Pokemon);
