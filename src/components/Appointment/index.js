import React from "react";

import "components/Appointment/styles.scss";

import "components/Appointment/Header.js";



export default function Appointment(props) {

  return (
    <article className="appointment">{props.time}</article>
  )

  
}