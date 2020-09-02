import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import profile_pic from "../../../photos/profile_pic.jpg";
import person1 from "../../../photos/person1.jpg";
import person2 from "../../../photos/person2.jpg";

const MyPosts = () => {
  let postData = [
    {
      id: 1,
      message: "Hi, checkout my new photo!",
      name: "Maria Simpson ",
      img: person1,
    },
    {
      id: 2,
      message: "It was a beautiful movie :)",
      name: "Alex Dochkon",
      img: person2,
    },
  ];

  return (
    <div className={css.postsBlock}>
      <h3>My posts</h3>

      <div>
        <div className={css.new_post}>
          <img src={profile_pic} className={css.profile_pic} />
          
          <div>
            <button className={css.sent}>Add post</button>
          </div>
        </div>
      </div>
      <div className={css.line} />
      <div className={css.posts}>
        <h3>Publications</h3>
        <Post
          message={postData[0].message}
          name={postData[0].name}
          img={postData[0].img}
        />
        <Post
          message={postData[1].message}
          name={postData[1].name}
          img={postData[1].img}
        />
      </div>
    </div>
  );
};

export default MyPosts;
