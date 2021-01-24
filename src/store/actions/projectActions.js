export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    
    const firestore = getFirestore();
    firestore.collection('projects-marioplan').add({
      ...project,
      authorFirstName: 'Max',
      authorLastName: 'Ivanov',
      authorId: 1,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project });
    }).catch(error => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', error });
    });
  };
}
