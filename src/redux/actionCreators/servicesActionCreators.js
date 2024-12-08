const fetchServicesStart = () => ({ type: 'FETCH_SERVICES_START' });

const fetchServicesSuccess = (data) => ({
    type: 'FETCH_SERVICES_SUCCESS',
    payload: data,
});

const fetchServicesFailure = (error) => ({
    type: 'FETCH_SERVICES_FAILURE',
    payload: error,
});

export {
    fetchServicesStart,
    fetchServicesSuccess,
    fetchServicesFailure
}