export const sendEmailRequest = (payload) => ({
    type: "SEND_EMAIL_REQUEST",
    payload,
});

export const sendEmailSuccess = () => ({
    type: "SEND_EMAIL_SUCCESS",
});

export const sendEmailFailure = (error) => ({
    type: "SEND_EMAIL_FAILURE",
    error,
});