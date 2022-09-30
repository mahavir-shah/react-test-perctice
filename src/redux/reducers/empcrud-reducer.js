const empcrudReducer = (
  employess = [{ id: 1, name: 'Mahavir', dept: 'Senior S/W Engineer' }],
  action
) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return [...employess, { ...action.payload, id: employess.length + 1 }];
    case 'EDIT_EMPLOYEE':
      return empOpr('edit', employess, action);
    case 'REMOVE_EMPLOYEE':
      return empOpr('remove', employess, action);
    default:
      return employess;
  }
};

const empOpr = (opr, employess, payload) => {
  var emplist = employess.filter((element) => {
    return element.id !== payload.id ? element : undefined;
  });
  return opr === 'edit' ? [...emplist, payload.payload] : emplist;
};
export default empcrudReducer;
