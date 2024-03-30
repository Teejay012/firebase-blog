import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase-config';

const Home = ({ isAuth }) => {

  let navigate = useNavigate()

  const [postLists, setPostLists] = useState([]);
  const postsCollectionRef = collection(db, "posts")

  useEffect(() => {
    const getPosts = async ()=>{
      const data = await getDocs(postsCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    };

    getPosts();
  }, []);

  const deletePost = async (id) =>{
    try{
      const postDoc = doc(db, "posts", id);
      await deleteDoc(postDoc);
      // navigate("/")
    }catch(err){
      console.error(err)
    }
  }

  console.log(postLists);

  return (
    <div className='homePage'>
      {postLists.map((post) =>{
        return <div className='post'>
          <div className='postheader' style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div className='title'>
              <h1>{post.title}</h1>
            </div>

            <div className='deletePost'>
              {isAuth && post.author.id === auth.currentUser.uid && <button onClick={() => deletePost(post.id)}> &#128465; </button>}
            </div>
          </div>
          <div className='postTextContainer'>{post.postText}</div>
          <h3>@{post.author.name}</h3>
        </div>
      })}
    </div>
  )
}

export default Home
;