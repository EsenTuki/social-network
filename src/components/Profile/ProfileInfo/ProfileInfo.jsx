import React from "react";
import s from './ProfileInfo.module.css'
import Loader from '../../common/loader/Loader'

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Loader />
    }
    return (
        <div>
            <div className={s.avatar}>
                <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small}/> <br/>
                About: {props.profile.aboutMe} <br/>
                Name: {props.profile.fullName}
            </div>
        </div>
    )
}

export default ProfileInfo