const emailRequestIsLoadingSelector = (state) => state.emailRequest.loading;
const emailRequestIsSuccessSelector = (state) => state.emailRequest.success;
const emailRequestErrorSelector = (state) => state.emailRequest.error;

export { emailRequestIsLoadingSelector, emailRequestIsSuccessSelector, emailRequestErrorSelector };