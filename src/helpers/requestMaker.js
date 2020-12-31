import { apiUrl } from './variables';

function requestMaker() {
  const dataArr = [];

  (async function getReq() {
    try {
      const response = await fetch(
        `${apiUrl}/pokemon?limit=100&offset=200`,
      );
      const data = await response.json();
      dataArr.push(data.results);
      console.log(dataArr);
      return dataArr;
    } catch (e) {
      return e;
    }
  }());

  console.log(dataArr);
  return dataArr;
}

export default requestMaker;
