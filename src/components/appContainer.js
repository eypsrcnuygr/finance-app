/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import App from '../App';
import Pokemon from './Pokemon';

function mapStateToProps(state) {
  const {
    value, imageUrl, isFetching, error,
  } = state.FetchPokemonReducer;

  return {
    value, imageUrl, isFetching, error,
  };
}

const AppContainer = props => {
  const urlArr = [];

  if (props.imageUrl) {
    props.imageUrl.map(element => (
      urlArr.push(element.species.url)
    ));
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path={urlArr.forEach(element => element)} exact component={Pokemon} />
      </Switch>
    </BrowserRouter>
  );
};

export default connect(mapStateToProps, null)(AppContainer);
