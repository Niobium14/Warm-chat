/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import BlueError from "../../../common/Error/Error";
import css from "./ProfileStatus.module.css";

const ProfileStatus = (props) => {
  // HOOKS
  const [editorMode, setEditorMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  const [modalError, setModalError] = useState(null);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditorMode = () => {
    setEditorMode(true);
  };

  const deactivateEditorMode = () => {
    if (modalError == null) {
      setEditorMode(false);
      props.updateStatus(status);
    }
  };
  const onStatusChange = (e) => {
    if (status.length > 300) {
      setModalError("Max Status length is 300 symbols");
      setStatus(e.currentTarget.value);
      if (status.length < 300) {
        setModalError(null);
      }
    } else {
      setModalError(null);
      setStatus(e.currentTarget.value);
    }
  };
  return (
    <div>
      {editorMode ? (
        <input
          onChange={onStatusChange}
          autoFocus={true}
          onBlur={modalError == null && deactivateEditorMode}
          value={status}
          className={modalError ? css.statusChangeError : css.statusChange}
        />
      ) : (
        <div
          onDoubleClick={props.isOwner && activateEditorMode}
          className={css.statusRead}
        >
          {status || "No status"}
        </div>
      )}
      {modalError !== null && <BlueError error={modalError} color={"blue"}/>}
    </div>
  );
};

export default ProfileStatus;
