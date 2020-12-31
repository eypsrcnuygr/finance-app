/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import { apiUrl, apiUrl2 } from './variables';

function requestMaker(dataArr, state) {
  const pokeNumber = [];
  const data3 = [];
  (async function getReq() {
    try {
      const response = await fetch(
        `${apiUrl}/pokemon?limit=100&offset=200`,
      );
      const data = await response.json();
      dataArr.push(data.results);

      dataArr.map(element => (
        element.map(data => {
          const { url } = data;
          const a = url.slice(-4, -1);
          pokeNumber.push(a);
          return pokeNumber;
        })
      ));
      for (const number of pokeNumber) {
        const response2 = await fetch(
          `${apiUrl2}/${number}`,
        );
        const data2 = await response2.json();
        data3.push(data2.sprites.front_default);
      }

      state.setState({
        value: dataArr, data3,
      });
      return dataArr;
    } catch (e) {
      return e;
    }
  }());
}

export default requestMaker;
