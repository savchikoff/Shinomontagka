import { emailRequestState } from "../state/emailRequestState";

const emailRequestReducer = (state = emailRequestState, action) => {
    switch (action.type) {
        case "SEND_EMAIL_REQUEST":
            return { ...state, loading: true, error: null, success: false };
        case "SEND_EMAIL_SUCCESS":
            return { ...state, loading: false, success: true };
        case "SEND_EMAIL_FAILURE":
            return { ...state, loading: false, error: action.error, success: false };
        default:
            return state;
    }
};

export { emailRequestReducer };