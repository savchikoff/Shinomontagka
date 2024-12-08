import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootReducer } from "./reducers/rootReducer";
import { rootEpic } from "./epics/rootEpic";

// const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const epicMiddleware = createEpicMiddleware();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(epicMiddleware),
    ),

);

epicMiddleware.run(rootEpic);

export { store };