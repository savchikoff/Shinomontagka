import { combineEpics } from "redux-observable";
import { fetchServicesEpic } from "./fetchServicesEpic";
import { sendEmailRequestEpic } from "./sendEmailRequestEpic";

const rootEpic = combineEpics(fetchServicesEpic, sendEmailRequestEpic);

export { rootEpic };