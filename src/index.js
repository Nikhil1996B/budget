import { createRoot } from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
import { Provider } from "react-redux";
import store from "./store/configureStore";

root.render(
  <Provider store={store()}>
    <App />
  </Provider>,
);
