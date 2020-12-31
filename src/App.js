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
    let i = 0;
    const { value } = this.state;
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
              </div>
            );
          })))}
      </div>
    );
  }
}
export default App;
