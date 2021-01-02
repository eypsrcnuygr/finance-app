import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
  const { imageUrl } = props;
  if (imageUrl) {
    imageUrl.map(element => (
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

AppContainer.propTypes = {
  imageUrl: PropTypes.instanceOf(Array),
};

AppContainer.defaultProps = {
  imageUrl: [],
};

export default connect(mapStateToProps, null)(AppContainer);
