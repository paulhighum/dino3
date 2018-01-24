import React from "react"

const GetJobDetails = props => {
  return (
    <section id="job-details">
      <h2>Job Details</h2>
      <h4>{props.details.title}</h4>
      <p>{props.details.description}</p>
    </section>
  )
}

export default GetJobDetails
