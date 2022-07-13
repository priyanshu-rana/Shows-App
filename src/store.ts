import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { actorReducer } from "./reducers/actors";
import { showReducer } from "./reducers/shows";
import { rootSaga, sagaMiddleware } from "./sagas";

export const reducer = combineReducers({
  shows: showReducer,
  actors: actorReducer,
});
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

type State = ReturnType<typeof store.getState>;
export default State;

sagaMiddleware.run(rootSaga);
