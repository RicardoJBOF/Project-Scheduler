
export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find(d => d.name === day);
  if (filteredDay === undefined) {
    return []
  } else {
    const detailedAppointments = filteredDay.appointments.map(id => state.appointments[id])
    return detailedAppointments
  }
}

export function getInterview(state, interview) {
  if (!interview) {
    return null
  }
  return { 
    ...interview, 
    interviewer: state.interviewers[interview.interviewer] 
  };
}
