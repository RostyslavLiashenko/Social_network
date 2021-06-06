import React, {useState} from "react";
import classes from './Settings.module.css';
import ProfileDataFormRedux from './ProfileDataForm'
import {Redirect} from "react-router-dom";
import Button from "../Common/Button/Button";

const Settings = ({user, saveProfile, path}) => {
    const [editMode, setEditMode] = useState(false)
    if (!user) return <Redirect to='/profile'/>
    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }
    return (
        <div className={classes.settingsBlock}>
            <div className={classes.settings}>Settings</div>
            {editMode ? <ProfileDataFormRedux initialValues={user} user={user} onSubmit={onSubmit}/>
                : <ProfileData user={user} path={path} goToEditMode={() => setEditMode(true)}/>}
        </div>
    )
}
export const ProfileData = ({user, goToEditMode, path}) => {
    let some = Object.entries(user.contacts).map(([key, value]) => {
        return (<div className={classes.contact} key={key}>
            <b>{key}:</b> {value}
        </div>)
    })
    return (
        <div className={classes.infoBlock}>
            <div className={classes.mainInfo}>
                <div className={classes.name}>
                    <b>Name: </b>{user.fullName}
                </div>
                <div>
                    <b>I'm looking for a new job: </b>{user.lookingForAJob ? 'yes' : 'no'}
                </div>
                <div>
                    <b>About me: </b>{user.aboutMe}
                </div>
                <div>
                    <b>Looking for a job description: </b>{user.lookingForAJobDescription}
                </div>
            </div>
            <div className={classes.contacts}>
                <span>Contacts:</span>
                {some}
            </div>
            {user.userId === 16749 && path === '/settings' && <div>
                <Button name={'edit'} onClick={goToEditMode} />
            </div>}
        </div>
    )
}
export default Settings;