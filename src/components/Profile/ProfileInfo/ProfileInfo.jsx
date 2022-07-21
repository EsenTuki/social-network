import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.avatar}>
                <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo