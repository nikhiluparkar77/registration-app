import axios from "axios";
import { GET_POST } from "../Types";
// POST Action

export const getPostFunc = () => (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => dispatch({
            type:GET_POST,
            payload:res.data
        }))        
        .catch((err) => console.log(err))
}
 