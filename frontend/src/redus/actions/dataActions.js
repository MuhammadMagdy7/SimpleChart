import { FETCH_DATA_SUCCESS, SET_FILTERS } from "../types/type";
// import data from "../../data/ExportJson";
import axios from 'axios'

export const fetchData = (filters) => async (dispatch) => {
  try {
    let res = await axios.get((process.env.URL_BACKEND || "http://localhost:5000/data"),  { params: filters });
    return dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    // other ui
    console.log(error)
    console.error({"error:": error})
  }
};

export const setFilters = (filters) => (dispatch) =>{
    dispatch({
        type: SET_FILTERS,
        payload: filters
    })
}