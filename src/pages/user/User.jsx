import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './user.css'

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
                <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userDisplay">
                <div className="userDisplayTop">
                    <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="userDisplayImg" />
                    <div className="userDisplayTopTitle">
                        <span className="userDisplayUsername">John Doe</span>
                        <span className="userDisplayUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userDisplayBottom">
                    <span className="userDisplayTitle">Account Details</span>
                    <div className="userDisplayInfo">
                        <PermIdentity className="userDisplayIcon"/>
                        <span className="userDisplayInfoTitle">the_jdoe</span>
                    </div>
                    <div className="userDisplayInfo">
                        <CalendarToday className="userDisplayIcon"/>
                        <span className="userDisplayInfoTitle">4.24.1992</span>
                    </div>
                    <span className="userDisplayTitle">Contact Details</span>
                    <div className="userDisplayInfo">
                        <PhoneAndroid className="userDisplayIcon"/>
                        <span className="userDisplayInfoTitle">+1 234 567 8910</span>
                    </div>
                    <div className="userDisplayInfo">
                        <MailOutline className="userDisplayIcon"/>
                        <span className="userDisplayInfoTitle">the_jdoe@email.com</span>
                    </div>
                    <div className="userDisplayInfo">
                        <LocationSearching className="userDisplayIcon"/>
                        <span className="userDisplayInfoTitle">New York | USA</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder='the_jdoe' className="userUpdateInfo" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder='Jane Doe' className="userUpdateInfo" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder='the_jdoe@email.com' className="userUpdateInfo" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder='+1 234 567 8910' className="userUpdateInfo" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder='New York | USA' className="userUpdateInfo" />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img className="userUpdateImg" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                            <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                            <input type="file" id="file" style={{display: "none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
