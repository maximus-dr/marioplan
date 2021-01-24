export const createProject = (project) => {
  return (dispatch, getState) => {
    // make async calls
    dispatch({ type: 'CREATE_PROJECT', project });
  };
}
