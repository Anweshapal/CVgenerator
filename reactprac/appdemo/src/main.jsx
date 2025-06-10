import ReactDOM from "react-dom";
import App from "./App"
import Header from "./components/Header/Header";
import { createRoot } from "react-dom/client";
import {BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux";
// ReactDOM.render(<App/>,document.getElementById("root"));
import mystore from "./components/redux/store/Store";
const root=createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <Provider store={mystore    }>
      <App />
  </Provider>
    
  </BrowserRouter>
);