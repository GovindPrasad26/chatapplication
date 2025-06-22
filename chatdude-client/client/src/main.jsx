import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Provider } from "react-redux"; 
import store from "./reduxstore/store.js";
import { HashRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
    <Provider store={store}>  
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);
