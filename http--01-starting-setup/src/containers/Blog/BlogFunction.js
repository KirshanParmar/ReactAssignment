import axios from 'axios';
import React ,{useState,useEffect}from 'react';
import FullPostFunction from '../../components/FullPost/FullPostFunction';
import NewPostFunction from '../../components/NewPost/NewPostFunction';
import Post from '../../components/Post/Post';

const posts=[
    {
        id:'',
        title:'',
        author:'',
    }
];
const BlogFunction=()=>{
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>setPosts(response.data))
        .catch(err=>console.log(err))
    }

    )
    const postsJSX=posts.map(
        post=>{
            return <Post title={post.title} author={post.author} />
        }
    )
    return(
        <div>
        <section className="Posts">
            {postsJSX}
        </section>
        <section>
            <FullPostFunction />
        </section>
        <section>
            <NewPostFunction />
        </section>
    </div>
    );
}
export default BlogFunction;