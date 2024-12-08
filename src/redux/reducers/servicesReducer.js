import { servicesState } from "../state/servicesState";

const servicesReducer = (state = servicesState, action) => {
    switch (action.type) {
        case 'FETCH_SERVICES_START':
            return { ...state, loading: true, error: null };

        case 'FETCH_SERVICES_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload.reduce((acc, service) => {
                    acc.push(service);
                    return acc;
                }, []),
            };

        case 'FETCH_SERVICES_FAILURE':
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export { servicesReducer };