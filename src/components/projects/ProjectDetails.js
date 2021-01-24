import React from 'react'

export default function ProjectDetails(props) {
  
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut veniam quibusdam eos odio, et, esse voluptatem rem numquam quaerat cum quia nesciunt provident consectetur at, optio praesentium! Magnam, cumque blanditiis!
          </p>
          <div className="card-action grey lighten-4 grey-text">
            <p>Posted by Max Ivanov</p>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    </div>
  )
}
