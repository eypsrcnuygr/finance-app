import { useState, useEffect } from 'react';
import { REACT_APP_API_TOKEN, apiUrl } from './helpers/variables';

function App() {
  const [data, setData] = useState({});

  async function getReq() {
    try {
      const response = await fetch(
        `${apiUrl}/api/v3/profile/AAPL?apikey=${REACT_APP_API_TOKEN}`,
      );
      const data = await response.json();
      return setData(data);
    } catch (e) {
      return e;
    }
  }

  useEffect(() => {
    getReq();
  }, []);

  return (
    <div>{data[0].description}</div>
  );
}

export default App;
