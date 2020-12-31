import { apiUrl } from './variables';

function requestMaker(dataArr, state) {
  (async function getReq() {
    try {
      const response = await fetch(
        `${apiUrl}/pokemon?limit=100&offset=200`,
      );
      const data = await response.json();
      dataArr.push(data.results);
      state.setState({
        value: dataArr,
      });
      return dataArr;
    } catch (e) {
      return e;
    }
  }());
}

export default requestMaker;
