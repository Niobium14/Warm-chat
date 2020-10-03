import React from 'react';
import Posts from './Posts/Posts';
import css from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={css.wrapper}>
            <ProfileInfo className={css.profile}/>
            <Posts />
        </div>
    )
}

export default Profile;