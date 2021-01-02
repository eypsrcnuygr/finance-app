/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { apiUrl, apiUrl2 } from './variables';
import {
  fetchProductBeginning, fetchProductsSuccess, fetchProductsFailure,
} from '../actions/index';

function requestMaker() {
  return dispatch => {
    dispatch(fetchProductBeginning);
    const dataArr = [];
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
          data3.push(data2);
        }
        dispatch(fetchProductsSuccess(dataArr[0], data3));

        return { dataArr, data3 };
      } catch (e) {
        dispatch(fetchProductsFailure(e));
        return e;
      }
    }());
  };
}

export default requestMaker;
