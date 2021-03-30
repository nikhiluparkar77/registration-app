import { GET_POST } from "../../Actions/Types";

const initialState = {
    userPost:[]
}

export default function(state = initialState, action){
    switch (action.type) {
        case GET_POST:
          return{
              ...state,
              userPost:action.payload
          } 
        default:
            return state;
    }
}