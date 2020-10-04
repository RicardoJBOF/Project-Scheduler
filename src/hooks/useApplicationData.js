import { useReducer, useEffect } from 'react';

import Axios from 'axios';

import reducer, {
  SET_DAY,
  SET_APPLICATION_DATA,
  SET_INTERVIEW
} from "../reducers/application";



export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviwers: {}
  })

  const setDay = day => dispatch({ type: SET_DAY, day })


  useEffect(() => {
    Promise.all([
      Axios.get('/api/days'),
      Axios.get('/api/appointments'),
      Axios.get('/api/interviewers')
    ])
      .then(all => {
        dispatch({
          type: SET_APPLICATION_DATA,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data
        })
      });
  }, []);


  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview
    };
    return Axios
      .put(`/api/appointments/${id}`, appointment)
      .then(() => {
        if (!state.appointments[id].interview) {
          const dayObject = state.days.find(day => day.name === state.day);
          state.days[dayObject.id - 1].spots--;
          dispatch({ type: SET_INTERVIEW, id, interview })
        } else {
          dispatch({ type: SET_INTERVIEW, id, interview })
        }
      });
  };

  function cancelInterview(id) {
    return Axios
      .delete(`/api/appointments/${id}`)
      .then(() => {
        const dayObject = state.days.find(day => day.name === state.day);
        state.days[dayObject.id - 1].spots++;
        dispatch({ type: SET_INTERVIEW, id, interview: null })
      });
  };

    return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }



}