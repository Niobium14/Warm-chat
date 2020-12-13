/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ModalError from "../../../common/Error/Error";
import css from "./ProfileStatus.module.css";

type PropsType = {
  status: string;
  updateStatus: (arg0: any) => void;
  isOwner: boolean | any;
};

const ProfileStatus = (props: PropsType) => {
  // HOOKS
  const [editorMode, setEditorMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  const [modalError, setModalError] = useState<string | null>(null);

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
  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          onBlur={deactivateEditorMode}
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
      {modalError !== null && (
        <ModalError modalError={modalError} color={"blue"} />
      )}
    </div>
  );
};

export default ProfileStatus;
