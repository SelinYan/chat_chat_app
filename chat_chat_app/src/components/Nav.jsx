import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <GroupAddOutlinedIcon />
        <ContactSupportOutlinedIcon />
        <CircleNotificationsOutlinedIcon />
      </div>
      <div className="navbar-center">
        <span className="logo">Chat-Chat</span>
      </div>
      <div className="navbar-right">
        <div className="search">
          <SearchOutlinedIcon />
          <input className="nav-input" type="text" placeholder="search.." />
        </div>
        <div className="navbar-user">
          <img className="nav-img" src={currentUser.profilePic} alt="" />
          <span className="user-name-nav">{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
