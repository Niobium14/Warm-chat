import React from "react";
import css from "./ProfileTextarea.module.css";

const ProfileTextarea = (props) => {
  let newPost = React.createRef();

  let sentPost = () => {
    let action = {type: "ADD-POST"};
    props.dispatch(action);
  };

  let onPostChange = () => {
    let text = newPost.current.value;
    let action = {type: "UPDATE-NEW-POST-TEXT", newPostText: text};
    props.dispatch(action);
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
        <button className={css.send} onClick={sentPost}>
          SEND
        </button>
      </div>
    </div>
  );
};

export default ProfileTextarea;
