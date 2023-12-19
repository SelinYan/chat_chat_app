import { useState } from "react";
import Post from "./Post";

// import axios from "axios";

const Posts = () => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:4000/posts").then((res) => setPosts(res.data));
  // }, []);

  // console.log(posts);

  const posts = [
    {
      id: 1,
      name: "Emily Johnson",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Emily Johnson",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/806835/pexels-photo-806835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Sed tempor feugiat finibus. Mauris in enim hendrerit, mollis massa ut, iaculis erat. Nullam magna diam, bibendum et neque mollis, faucibus sagittis leo. Phasellus consequat leo sit amet sapien tristique faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis varius dignissim justo vel viverra.",
    },
    {
      id: 3,
      name: "Emily Johnson",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/1035682/pexels-photo-1035682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "feugiat finibus. Mauris in enim hendrerit, mollis massa ut, iaculis erat. Nullam magna diam, bibendum et neque mollis, faucibus sagittis leo🤠. Phasellus consequat leo sit amet sapien tristique faucibus. Orci varius natoque penatibus 👽",
    },
    {
      id: 4,
      name: "Emily Johnson",
      userId: 4,
      profilePic:
        "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
    {
      id: 5,
      name: "Emily Johnson",
      userId: 5,
      profilePic:
        "https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return (
    <div className="posts-bx">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
