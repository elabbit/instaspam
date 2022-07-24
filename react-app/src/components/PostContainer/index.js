import "./PostContainer.css"

function PostContainer ({post}) {




    return (
        <div className='post-conatiner'>
            <img className='post-image' src={post.image}/>
            <div>
                <div>{post.caption}</div>
            </div>
        </div>
  )

}

export default PostContainer;
