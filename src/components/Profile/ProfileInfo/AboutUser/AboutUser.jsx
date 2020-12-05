/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import css from "./AboutUser.module.css";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ReduxInformationForm from "./Information/InformationForm";

export function AboutUser(props) {
  const [informationView, setInformationView] = useState(false);
  const [contactsView, setContactsView] = useState(false);
  const [jobView, setJobView] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const goToEditMode = () => {
    setEditMode(true);
  };
  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  const funcInformation = () => {
    if (!informationView) {
      setInformationView(true);
    } else {
      setInformationView(false);
    }
  };
  const funcContacts = () => {
    if (!contactsView) {
      setContactsView(true);
    } else {
      setContactsView(false);
    }
  };

  const funcJob = () => {
    if (!jobView) {
      setJobView(true);
    } else {
      setJobView(false);
    }
  };

  return (
    <div className={css.aboutUser}>
      <div className={css.name}>
        <h1>{props.profile.fullName}</h1>
        <ProfileStatus
          isOwner={props.isOwner}
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
      <div className={css.contacts}>
        <label
          for="contacts"
          className={css.informationLabel}
          id="contacts-icon"
          onClick={funcInformation}
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NiwwQzExNC44MzMsMCwwLDExNC44MzMsMCwyNTZzMTE0LjgzMywyNTYsMjU2LDI1NnMyNTYtMTE0Ljg1MywyNTYtMjU2UzM5Ny4xNjcsMCwyNTYsMHogTTI1Niw0NzIuMzQxICAgIGMtMTE5LjI3NSwwLTIxNi4zNDEtOTcuMDQ2LTIxNi4zNDEtMjE2LjM0MVMxMzYuNzI1LDM5LjY1OSwyNTYsMzkuNjU5YzExOS4yOTUsMCwyMTYuMzQxLDk3LjA0NiwyMTYuMzQxLDIxNi4zNDEgICAgUzM3NS4yNzUsNDcyLjM0MSwyNTYsNDcyLjM0MXoiIGZpbGw9IiM1MjUyNTIiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM2OS4yMjcsMjgzLjM2NWwtOTkuMTQ4LTk5LjE0OGMtNy43MzQtNy42OTQtMjAuMjI2LTcuNjk0LTI3Ljk2LDBsLTk5LjE0OCw5OS4xNDhjLTYuMzY1LDcuNDE2LTYuMzY1LDE4LjM4MiwwLDI1Ljc5OCAgICBjNy4xMTksOC4zMDksMTkuNjUxLDkuMjgsMjcuOTYsMi4xNjFMMjU2LDIyNi4yNTZsODUuMjY3LDg1LjA2OWM3LjczNCw3LjY5NCwyMC4yMjYsNy42OTQsMjcuOTYsMCAgICBDMzc2LjkyMSwzMDMuNTkxLDM3Ni45MjEsMjkxLjA5OCwzNjkuMjI3LDI4My4zNjV6IiBmaWxsPSIjNTI1MjUyIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
            className={informationView ? css.showInfoArrow : css.hideInfoArrow}
          />
          <h2>Information</h2>
        </label>
        {editMode ? (
          <ReduxInformationForm
            initialValues={props.profile}
            onSubmit={onSubmit}
            informationView={informationView}
            contactsView={contactsView}
            funcContacts={funcContacts}
            funcJob={funcJob}
            jobView={jobView}
            {...props}
          />
        ) : (
          <Information
            funcJob={funcJob}
            jobView={jobView}
            funcContacts={funcContacts}
            contactsView={contactsView}
            profile={props.profile}
            goToEditMode={goToEditMode}
            informationView={informationView}
          />
        )}
      </div>
    </div>
  );
}

const Information = ({
  profile,
  goToEditMode,
  informationView,
  funcContacts,
  contactsView,
  funcJob,
  jobView,
  isOwner,
}) => {
  return (
    <div className={informationView ? css.showInfo : css.hideInfo}>
      <div className={css.description}>
        <label
          for="job"
          className={css.contactsLabel}
          id="job-icon"
          onClick={funcJob}
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NiwwQzExNC44MzMsMCwwLDExNC44MzMsMCwyNTZzMTE0LjgzMywyNTYsMjU2LDI1NnMyNTYtMTE0Ljg1MywyNTYtMjU2UzM5Ny4xNjcsMCwyNTYsMHogTTI1Niw0NzIuMzQxICAgIGMtMTE5LjI3NSwwLTIxNi4zNDEtOTcuMDQ2LTIxNi4zNDEtMjE2LjM0MVMxMzYuNzI1LDM5LjY1OSwyNTYsMzkuNjU5YzExOS4yOTUsMCwyMTYuMzQxLDk3LjA0NiwyMTYuMzQxLDIxNi4zNDEgICAgUzM3NS4yNzUsNDcyLjM0MSwyNTYsNDcyLjM0MXoiIGZpbGw9IiNhYmFiYWIiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM2OS4yMjcsMjgzLjM2NWwtOTkuMTQ4LTk5LjE0OGMtNy43MzQtNy42OTQtMjAuMjI2LTcuNjk0LTI3Ljk2LDBsLTk5LjE0OCw5OS4xNDhjLTYuMzY1LDcuNDE2LTYuMzY1LDE4LjM4MiwwLDI1Ljc5OCAgICBjNy4xMTksOC4zMDksMTkuNjUxLDkuMjgsMjcuOTYsMi4xNjFMMjU2LDIyNi4yNTZsODUuMjY3LDg1LjA2OWM3LjczNCw3LjY5NCwyMC4yMjYsNy42OTQsMjcuOTYsMCAgICBDMzc2LjkyMSwzMDMuNTkxLDM3Ni45MjEsMjkxLjA5OCwzNjkuMjI3LDI4My4zNjV6IiBmaWxsPSIjYWJhYmFiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
            className={jobView ? css.showContactsArrow : css.hideContactsArrow}
          />
          <span className={css.preInfo}>About job</span>
        </label>
        <div className={jobView ? css.showJob : css.hideJob}>
          <div className={css.aboutMe}>
            <span className={css.section}>about me:</span>
            {profile.aboutMe ? profile.aboutMe : "Nothing"}
          </div>
          <div className={css.fullName}>
            <span className={css.section}>name:</span>
            {profile.fullName ? profile.fullName : "Nothing"}
          </div>
          <div className={css.item}>
            <span className={css.section}>need a job:</span>
            {profile.lookingForAJob ? "Yes" : "No"}
          </div>
          <div className={css.item}>
            <span className={css.section}>description:</span>
            {profile.lookingForAJobDescription
              ? profile.lookingForAJobDescription
              : "Nothing"}
          </div>
        </div>
      </div>

      <div className={css.contacts}>
        <label
          for="contacts"
          className={css.contactsLabel}
          id="contacts-icon"
          onClick={funcContacts}
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NiwwQzExNC44MzMsMCwwLDExNC44MzMsMCwyNTZzMTE0LjgzMywyNTYsMjU2LDI1NnMyNTYtMTE0Ljg1MywyNTYtMjU2UzM5Ny4xNjcsMCwyNTYsMHogTTI1Niw0NzIuMzQxICAgIGMtMTE5LjI3NSwwLTIxNi4zNDEtOTcuMDQ2LTIxNi4zNDEtMjE2LjM0MVMxMzYuNzI1LDM5LjY1OSwyNTYsMzkuNjU5YzExOS4yOTUsMCwyMTYuMzQxLDk3LjA0NiwyMTYuMzQxLDIxNi4zNDEgICAgUzM3NS4yNzUsNDcyLjM0MSwyNTYsNDcyLjM0MXoiIGZpbGw9IiNhYmFiYWIiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM2OS4yMjcsMjgzLjM2NWwtOTkuMTQ4LTk5LjE0OGMtNy43MzQtNy42OTQtMjAuMjI2LTcuNjk0LTI3Ljk2LDBsLTk5LjE0OCw5OS4xNDhjLTYuMzY1LDcuNDE2LTYuMzY1LDE4LjM4MiwwLDI1Ljc5OCAgICBjNy4xMTksOC4zMDksMTkuNjUxLDkuMjgsMjcuOTYsMi4xNjFMMjU2LDIyNi4yNTZsODUuMjY3LDg1LjA2OWM3LjczNCw3LjY5NCwyMC4yMjYsNy42OTQsMjcuOTYsMCAgICBDMzc2LjkyMSwzMDMuNTkxLDM3Ni45MjEsMjkxLjA5OCwzNjkuMjI3LDI4My4zNjV6IiBmaWxsPSIjYWJhYmFiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
            className={
              contactsView ? css.showContactsArrow : css.hideContactsArrow
            }
          />
          <span className={css.preInfo}>Contacts</span>
        </label>
        <ul className={contactsView ? css.showContacts : css.hideContacts}>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <div className={css.item}>
                <span className={css.section}>{key}:</span>
                {profile.contacts[key] ? profile.contacts[key] : "no value"}
              </div>
            );
          })}
        </ul>
      </div>
      {isOwner && (
        <button className={css.edit} onClick={goToEditMode}>
          Edit
        </button>
      )}
    </div>
  );
};
