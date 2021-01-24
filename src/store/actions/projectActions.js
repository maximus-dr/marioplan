export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async calls
    dispatch({ type: 'CREATE_PROJECT', project });
  };
}
