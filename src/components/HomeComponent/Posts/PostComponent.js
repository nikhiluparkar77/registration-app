import React,{useEffect, useState} from 'react';
import {connect} from "react-redux";
import { getPostFunc } from '../../../Redux/Actions/AllActions/AllAction';
import Loader from '../../OtherComponents/Loader/Loader';

const PostComponent = ({getPostFunc,userPost}) => {
    const [post, setPost] = useState([]); 
    
    useEffect(()=>{ 
        getPostFunc();  
    },[]);

    useEffect(()=>{
        setPost(userPost)
    })
console.log(post)

 

    return (
        
        <div className="userPost">

            { post.length === 0 ? <Loader /> :
               post.userPost.map((item,index)=>(
                   <div key={index}>
                       {item.title}
                   </div>
               ))  

            }
        </div>
         
         
    )
}

const mapStateToProps = state => ({
    userPost:state.userPost
})

const mapDispatchToProps = {
    getPostFunc
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent);
