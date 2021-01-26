const initState = {
  projects: [
    {id: '1', title: 'Help me find the peach', content: 'Some content. Please, help me find my peach. Please!!!'},
    {id: '2', title: 'Collect all the stars', content: 'Be cool. Collect all the stars and become the greatest stars collector. Good luck!!!'},
    {id: '3', title: 'Egg hunt', content: 'Collect eggs with friends. Go ahead!!!'}
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project');
      return state;
    case 'CREATE_PROJECT_ERROR':
      return state;
    default: 
      return state;
  }
}

export default projectReducer;