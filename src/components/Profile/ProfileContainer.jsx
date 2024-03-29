import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, upDateStatus, savePhoto, saveProfile } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }
    render() {
        return (
            <Profile {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                upDateStatus={this.props.upDateStatus}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile} />
        )
    }
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    })
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, upDateStatus, savePhoto, saveProfile }),
    withRouter,
    // withAuthRedirect  пока закомментируем так как на страничку пользователя можно попасть и без логинизации
)(ProfileContainer);