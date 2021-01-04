/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { apiUrl } from './variables';
import {
  fetchProductBeginning, fetchProductsSuccess, fetchProductsFailure,
} from '../actions/index';

let offset = 100;
const requestMaker = () => dispatch => {
  dispatch(fetchProductBeginning());
  const dataArr = [];
  const pokeNumber = [];
  const data3 = [];
  (async function getReq() {
    try {
      const response = await fetch(
        `${apiUrl}/pokemon?limit=100&offset=${offset}`,
      );
      offset < 1100 ? offset += 100 : offset = 100;
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

      for (const url of data.results) {
        const response2 = await fetch(
          `${url.url}`,
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

export default requestMaker;
