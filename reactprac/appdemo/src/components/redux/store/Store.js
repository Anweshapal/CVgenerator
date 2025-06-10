import { legacy_createStore as createStore } from "redux";
import myReducer from "../reduces/MyReducer";

let mystore = createStore(myReducer); // ✅ Correct
export default mystore;
 