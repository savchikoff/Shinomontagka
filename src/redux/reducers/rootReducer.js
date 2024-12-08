import { combineReducers } from "redux";
import { servicesReducer } from "./servicesReducer";
import { selectedServicesReducer } from "./selectedServicesReducer";
import { emailRequestReducer } from "./emailRequestReducer";

const rootReducer = combineReducers({
    services: servicesReducer,
    selectedServices: selectedServicesReducer,
    emailRequest: emailRequestReducer
});

export { rootReducer };