import "./PostContainer.css"

function PostContainer ({post}) {




    return (
        <div className='post-conatiner'>
            <img className='post-image' src={post.image}/>
        </div>
  )

}

export default PostContainer;
