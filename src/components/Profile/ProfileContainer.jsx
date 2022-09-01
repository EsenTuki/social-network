import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/profileReducer'
import { useLocation, useNavigate, useParams, Navigate } from 'react-router-dom'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={'/login'}/>

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({ 
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
 })

function withRouter(ProfileContainer) {
    function WithUrlDataContainerComponent(props) {
        let location = useLocation()
        let navigate = useNavigate()
        let params = useParams()
        return (
            <ProfileContainer {...props} router={{ location, navigate, params }} />
        )
    }

    return WithUrlDataContainerComponent
}
// let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer))