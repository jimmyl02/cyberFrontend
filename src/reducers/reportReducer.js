import Cookies from 'js-cookie';

/**
 * Redux reducer for authentication-based features for reports.
 * 
 * @param {Object} state 
 * @param {Object} action 
 */
export const reportReducer = (state = { report: "", jwt: ""}, action) => {
    switch (action.type) {
        case "SET_REPORT":
            state = {
            ...state,
                report: action.payload
            };
            break;
        case "SET_JWT":
            state = {
            ...state,
                jwt: action.payload
            };
            Cookies.set("sessionJWT", action.payload);
            break;
        case "LOGOUT":
            state = {
            ...state,
                jwt: undefined
            };
            Cookies.set("sessionJWT", undefined);
            break;
      default:
    }
    return state;
  };