import { REACT_APP_API_TOKEN, apiUrl } from './helpers/variables';

function App() {
  const realData = [];
  async function getReq() {
    try {
      const response = await fetch(
        `${apiUrl}/api/v3/profile/AAPL?apikey=${REACT_APP_API_TOKEN}`,
      );
      const data = await response.json();
      return data;
    } catch (e) {
      return e;
    }
  }

  (async function caller() {
    const data = await getReq();
    realData.push(data);
  }());
  console.log(realData);

  return (
    <div>{realData}</div>
  );
}

export default App;
