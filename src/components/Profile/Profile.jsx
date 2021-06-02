import React from 'react';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return <div>
        <ProfileInfo savePhoto={props.savePhoto}
            saveProfile={props.saveProfile}
            isOwner={props.isOwner}
            profile={props.profile}
            status={props.status}
            upDateStatus={props.upDateStatus} />
        <MyPostsContainer store={props.store} />
    </div>
};

export default Profile;