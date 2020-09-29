import React from "react";

import "components/InterviewerList.scss";

import InterviewerListItem from "./InterviewerListItem";



export default function InterviewerList(props) {

  const interviewerlist = props.interviewers.map(value => {
    return (

      <InterviewerListItem
        key={value.id}
        name={value.name}
        avatar={value.avatar}
      />
      
    );
  });


  return (
  <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">{interviewerlist}</ul>
  </section>
  )


 
}