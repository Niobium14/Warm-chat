import React, { useEffect, useState } from "react";
import css from "./ProfileStatus.module.css";

const ProfileStatus = (props) => {
  // HOOKS
  const [editorMode, setEditorMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditorMode = () => {
    setEditorMode(true);
  };
  const deactivateEditorMode = () => {
    setEditorMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {props.isOwner && editorMode ? (
        <input
          onChange={onStatusChange}
          autoFocus={true}
          onBlur={deactivateEditorMode}
          value={status}
          className={css.statusChange}
        />
      ) : (
        <div onDoubleClick={activateEditorMode} className={css.statusRead}>
          {status || "No status"}
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
