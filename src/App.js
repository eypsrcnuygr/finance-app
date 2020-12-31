/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
import requestMaker from './helpers/requestMaker';

function App() {
  const value = requestMaker();
  let i = 0;
  console.log(value);
  const realValues = value[0];
  console.log(realValues);
  return (
    <div>
      {value.map(element => {
        i += 1;
        return (
          <div key={i}>
            <p>{element.name}</p>
            <p>{element.url}</p>
          </div>
        );
      })}
    </div>

  );
}

export default App;
