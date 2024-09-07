import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice.js';
import { statusCode,setUser} from './dataSlice.js';


const store = configureStore({
  reducer: {
    data: dataReducer,
    status:statusCode.reducer,
    username:setUser.reducer,
   
  },
});

export default store;