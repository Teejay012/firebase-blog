import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

  let navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postCollectionRef = collection(db, "posts")

  const createPost = async ()=>{
    try{
      await addDoc(postCollectionRef, { title, postText, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid }});
      navigate("/");
    }catch(err){
      console.error(err);
    }
    
  }

  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Create A Post</h1>
        <div className='inputGp'>
          <label>Title:</label>
          <input placeholder='Title' onChange={(e)=> setTitle(e.target.value)}/>
        </div>

        <div className='inputGp'>
          <label>Post:</label>
          <textarea placeholder='Post...' onChange={(e)=> setPostText(e.target.value)}/>
        </div>

        <button onClick={createPost}>Post</button>
      </div>
    </div>
  )
}

export default CreatePost
