import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootSaga } from "./rootSaga";

import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {
    const store = createStore(
        rootReducer,
        {},
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

    sagaMiddleware.run(rootSaga);

    return store;
};
