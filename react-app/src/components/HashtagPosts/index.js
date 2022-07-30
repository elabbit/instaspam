

const HashtagPosts = () => {

    return (
        <div className="page-outer">
            <div className="page-spacer"></div>
            <div className="page-container">
                <div className='hashtag-posts-container'>
                    <div className='hashtag-posts-header'>POSTS</div>
                    <UserPosts posts={posts} />
                </div>
            </div>
        </div>
    )


}


export default HashtagPosts;
