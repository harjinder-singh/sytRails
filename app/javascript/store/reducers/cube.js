const initialState = {
  0 : ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  1 : ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
  2 : ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
  3 : ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
  4 : ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y'],
  5 : ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G']
};

const cubeReducer =  (state = initialState, action) => {
  switch (action.type) {
    case 'ROTATE':
      return {
        0 : ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
        1 : ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
        2 : ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
        3 : ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
        4 : ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y'],
        5 : ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G']
      };
    default:
      return state;
  }
};

export default cubeReducer