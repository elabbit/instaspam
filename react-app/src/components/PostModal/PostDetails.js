import CreateComment from "../CreateComment";


function PostDetails({ post }) {
  return (
    <div className="post-mod-container">
      <div className="post-mod-left">
        <img className="post-mod-image" src={post.image} />
      </div>
      <div className="post-mod-right">
        <div>
        {/* <div>{post.username}</div> */}
        <div>{post.caption}</div>
        </div>
        {Object.values(post.comments).map((comment) => (
          <div key={comment.id}>
            {/* <div>{comment.username}</div> */}
            <div>{comment.comment}</div>
          </div>
        ))}
        <div>
          <div>{post.likes} likes</div>
          <CreateComment />
        </div>
      </div>
    </div>
  )
}
export default PostDetails;
