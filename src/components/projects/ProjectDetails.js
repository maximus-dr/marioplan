import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

function ProjectDetails(props) {

  const { project, auth } = props;

  if (!auth.uid) {
    return <Redirect to="/signin" />
  }

  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
            <div className="card-action grey lighten-4 grey-text">
              <p>
                Posted by {project.authorFirstName} {project.authorLastName}
              </p>
              <div>2nd Semptember, 2am</div>
            </div>
          </div>
        </div>
      </div>
    ) 
  } else {
    return <p className="container center">Loading project ...</p>
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data['projects-marioplan'];
  const project = projects ? projects[id] : null;

  return {
    project,
    auth: state.firebase.auth
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects-marioplan' }
  ])
)(ProjectDetails);
