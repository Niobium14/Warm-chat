import React from "react";
import css from "./ProfileTextarea.module.css";

const ProfileTextarea = (props) => {
  // GETTING REF FOR TEXTAREA
  let newPost = React.createRef();

  // ONCLICK FOR TEXTAREA
  let onSentPost = () => {
    props.sentPost();
  };

  // ONCHANGE FOR TEXTAREA
  let onPostChange = () => {
    let text = newPost.current.value;
    props.postChange(text);
  };

  return (
    <div className={css.profileArea}>
      <div className={css.add}>Add new post</div>
      <div className={css.area}>
        <textarea
          ref={newPost}
          onChange={onPostChange}
          className={css.textarea}
          value={props.newPostText}
        />
        <button className={css.send} onClick={onSentPost}>
          SEND
        </button>
      </div>
    </div>
  );
};

export default ProfileTextarea;
