export const actionTypes = {
  // key value pair
      ADD_USER_REQUEST : "ADD_USER_REQUEST" ,
      ADD_USER_SUCCESS : "ADD_USER_SUCCESS" , 
      ADD_USER_FAILURE : "ADD_USER_FAILURE" , 
};
// do not change names
export const addUserRequest = () => {
  type:addUserRequest.ADD_USER_REQUSET
};
// do not change names, and arguments
export const addUserSuccess = (data) => ({
  type:addUserRequest.ADD_USER_SUCCESS, payload : data
});
// do not change names
export const addUserFailure = () => {
  type:addUserRequest.ADD_USER_FAILURE
 };
