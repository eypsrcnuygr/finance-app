import React from 'react';
import requestMaker from './helpers/requestMaker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
    };
  }

  componentDidMount() {
    requestMaker([], this);
  }

  render() {
    let i = -1;
    const { value, data3 } = this.state;

    return (
      <div>
        {value.map(element => (
          element.map(data => {
            i += 1;
            return (
              <div key={i}>
                <p>{data.name}</p>
                {' '}
                <p>{data.url}</p>
                <img src={data3[i]} alt="pokemon" />
              </div>
            );
          })))}
      </div>
    );
  }
}
export default App;
