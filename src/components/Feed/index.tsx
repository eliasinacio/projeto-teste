import Post from "../Post";

// Como são apenas dois posts deixei esses dados aqui mesmo

const data = [
  {
    author: "S. Angela",
    imgUrl: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1084&q=80",
    publication: {number: 2, time: "min"},
    isPrivate: true,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    likes: 0,
    isLiked: false,
    comments: 0,
    shares: 0
  },
  {
    author: "Roberto F.",
    imgUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    publication: {number: 3, time: "hrs"},
    isPrivate: false,
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: 3,
    isLiked: false,
    comments: 1,
    shares: 1
  }
]

const Feed = () => {
  return (
    <>
      { data.map( (post, key) => {
          return <Post 
              key={key}
              author={post.author}
              imgUrl={post.imgUrl}
              publication={post.publication}
              isPrivate={post.isPrivate}
              body={post.body}
              likes={post.likes}
              isLiked={post.isLiked}
              comments={post.comments}
              shares={post.shares}
            />
        })
      }
    </>
  )
}

export default Feed;