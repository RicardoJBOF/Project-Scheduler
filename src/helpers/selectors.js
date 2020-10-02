
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

export function getInterviewersForDay(state, day) {
  if (!state.interviewers) return [];
  const filteredDay = state.days.filter(dia => dia.name === day)[0];
  if (!filteredDay) return [];
  if (!filteredDay.interviewers) return [];
  const detailedDay = Object.values(state.interviewers).filter(interviewer => filteredDay.interviewers.includes(interviewer.id))
  return detailedDay
}