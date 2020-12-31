import { useState, useEffect } from 'react';
import { apiUrl } from './helpers/variables';

function App() {
  const [data, setData] = useState({});

  async function getReq() {
    try {
      const response = await fetch(
        `${apiUrl}/pokemon/ditto`,
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

  console.log(data.abilities[0].ability.name);

  return (
    <div>{data.abilities[0].ability.name}</div>
  );
}

export default App;
