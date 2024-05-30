// Tạo store cho quần áo
import rootReducers from "./store/reduces/rootReducers";
import { persistStore } from "redux-persist";
import { createStore } from "redux";


const reduxStore =()=>{
    const store = createStore(rootReducers)
    const persistor = persistStore(store)
    return {store, persistor}
}

export default reduxStore