import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div>
        <img className={s.img} alt={'myPosts'}
             src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"/>
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile?.photos?.large} alt={'profile'}/>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  )
}

export default ProfileInfo