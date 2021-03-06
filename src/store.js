import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  if (module.hot) {
    module.hot.accept("./reducers/rootReducer", () => {
      const nextReducer = require("./reducers/rootReducer").default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
