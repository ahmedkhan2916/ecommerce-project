import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching data from an API
export const fetchData = createAsyncThunk('data/fetchData', async (payload) => {
  console.log(payload)
  const response = await axios.post("http://localhost:1000/users/postdetails",{payload},{


    headers: {
      'Content-Type': 'application/json', // Set content type to JSON
    },

  }); 

  console.log(response.data)
  // Replace with your API URL
  return response.data; // Assumes the response data is an array of objects
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    // You can define additional reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Set the array of objects from the API
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});



 export const statusCode=createSlice({


  name:"status",
  initialState:{

    status:null,

  },

  reducers:{
    setStatusCode:(state,action)=>{


      state.status=action.payload;


    },
},
})

export const setUser=createSlice({


  name:"username",
  initialState:{

    username:'',

  },

  reducers:{
    setUsername:(state,action)=>{


      state.username=action.payload;


    },
},
})

// export const userInfo=createSlice({


//   name:"Info",
//   initialState:{

//     details:{

//       id:'',
//       name:'',
//       email:'',


//     },

//   },

//   reducers:{
//     setDetails:(state,action)=>{


//       state.details=action.payload;


//     },
// },
// })


export default dataSlice.reducer;
export const {setStatusCode}=statusCode.actions;
export const {setUsername}=setUser.actions;


