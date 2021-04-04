/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import css from "./Information.module.css";
import { CreateField, Input } from "../../../../common/FormValidation/Field";
import { reduxForm } from "redux-form";

function InformationForm(props) {
  return (
    <form
      className={props.informationView ? css.showInfo : css.hideInfo}
      onSubmit={props.handleSubmit}
    >
      {props.error && <div className={css.error}>{props.error}</div>}
      <div className={css.description}>
        <label
          for="job"
          className={css.contactsLabel}
          id="job-icon"
          onClick={props.funcJob}
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NiwwQzExNC44MzMsMCwwLDExNC44MzMsMCwyNTZzMTE0LjgzMywyNTYsMjU2LDI1NnMyNTYtMTE0Ljg1MywyNTYtMjU2UzM5Ny4xNjcsMCwyNTYsMHogTTI1Niw0NzIuMzQxICAgIGMtMTE5LjI3NSwwLTIxNi4zNDEtOTcuMDQ2LTIxNi4zNDEtMjE2LjM0MVMxMzYuNzI1LDM5LjY1OSwyNTYsMzkuNjU5YzExOS4yOTUsMCwyMTYuMzQxLDk3LjA0NiwyMTYuMzQxLDIxNi4zNDEgICAgUzM3NS4yNzUsNDcyLjM0MSwyNTYsNDcyLjM0MXoiIGZpbGw9IiNhYmFiYWIiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM2OS4yMjcsMjgzLjM2NWwtOTkuMTQ4LTk5LjE0OGMtNy43MzQtNy42OTQtMjAuMjI2LTcuNjk0LTI3Ljk2LDBsLTk5LjE0OCw5OS4xNDhjLTYuMzY1LDcuNDE2LTYuMzY1LDE4LjM4MiwwLDI1Ljc5OCAgICBjNy4xMTksOC4zMDksMTkuNjUxLDkuMjgsMjcuOTYsMi4xNjFMMjU2LDIyNi4yNTZsODUuMjY3LDg1LjA2OWM3LjczNCw3LjY5NCwyMC4yMjYsNy42OTQsMjcuOTYsMCAgICBDMzc2LjkyMSwzMDMuNTkxLDM3Ni45MjEsMjkxLjA5OCwzNjkuMjI3LDI4My4zNjV6IiBmaWxsPSIjYWJhYmFiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
            className={
              props.jobView ? css.showContactsArrow : css.hideContactsArrow
            }
          />
          <span className={css.preInfo}>About job</span>
        </label>
        <div className={props.jobView ? css.showJob : css.hideJob}>
          <div className={css.aboutMe}>
            {CreateField("aboutMe", "text", [], Input, "About me")}
          </div>
          <div className={css.fullName}>
            {CreateField("fullName", "text", [], Input, "Name")}
          </div>
          <div className={css.jobContent}>
            <div className={css.jobInfo}>
              {CreateField("lookingForAJob", "checkbox", [], "input", null)}
              <label for="lookingForAJob" className={css.lookingForAJob}>
                Looking for a job
              </label>
            </div>
            <div className={css.jobDescription}>
              {CreateField(
                "lookingForAJobDescription",
                "text",
                [],
                Input,
                "About your skills"
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <label
          for="contacts"
          className={css.contactsLabel}
          id="contacts-icon"
          onClick={props.funcContacts}
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NiwwQzExNC44MzMsMCwwLDExNC44MzMsMCwyNTZzMTE0LjgzMywyNTYsMjU2LDI1NnMyNTYtMTE0Ljg1MywyNTYtMjU2UzM5Ny4xNjcsMCwyNTYsMHogTTI1Niw0NzIuMzQxICAgIGMtMTE5LjI3NSwwLTIxNi4zNDEtOTcuMDQ2LTIxNi4zNDEtMjE2LjM0MVMxMzYuNzI1LDM5LjY1OSwyNTYsMzkuNjU5YzExOS4yOTUsMCwyMTYuMzQxLDk3LjA0NiwyMTYuMzQxLDIxNi4zNDEgICAgUzM3NS4yNzUsNDcyLjM0MSwyNTYsNDcyLjM0MXoiIGZpbGw9IiNhYmFiYWIiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM2OS4yMjcsMjgzLjM2NWwtOTkuMTQ4LTk5LjE0OGMtNy43MzQtNy42OTQtMjAuMjI2LTcuNjk0LTI3Ljk2LDBsLTk5LjE0OCw5OS4xNDhjLTYuMzY1LDcuNDE2LTYuMzY1LDE4LjM4MiwwLDI1Ljc5OCAgICBjNy4xMTksOC4zMDksMTkuNjUxLDkuMjgsMjcuOTYsMi4xNjFMMjU2LDIyNi4yNTZsODUuMjY3LDg1LjA2OWM3LjczNCw3LjY5NCwyMC4yMjYsNy42OTQsMjcuOTYsMCAgICBDMzc2LjkyMSwzMDMuNTkxLDM3Ni45MjEsMjkxLjA5OCwzNjkuMjI3LDI4My4zNjV6IiBmaWxsPSIjYWJhYmFiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
            className={
              props.contactsView ? css.showContactsArrow : css.hideContactsArrow
            }
          />
          <span className={css.preInfo}>Contacts</span>
        </label>
        <ul
          className={props.contactsView ? css.showContacts : css.hideContacts}
        >
          {Object.keys(props.profile.contacts).map((key) => {
            return (
              <div>{CreateField("contacts." + key, "text", [], Input)}</div>
            );
          })}
        </ul>
      </div>
      <button className={css.save}>Save</button>
    </form>
  );
}

const ReduxInformationForm = reduxForm({ form: "contacts" })(InformationForm);
export default ReduxInformationForm;
