import { selectedServicesState } from "../state/selectedServicesState";

const selectedServicesReducer = (state = selectedServicesState, action) => {
    switch (action.type) {
        case 'ADD_SELECTED_SERVICE':
            return {
                selectedServices: [...state.selectedServices, action.payload]
            };

        case 'REMOVE_SELECTED_SERVICE':
            return {
                selectedServices: state.selectedServices.filter(service => service.ID !== action.payload.ID)
            };

        case 'CLEAR_SELECTED_SERVICES':
            return {
                selectedServices: []
            }

        default:
            return state;
    }
};

export { selectedServicesReducer };