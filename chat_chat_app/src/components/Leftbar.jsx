import HomeIcon from "@mui/icons-material/Home";
import GridViewIcon from "@mui/icons-material/GridView";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupsIcon from "@mui/icons-material/Groups";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="leftbar-container">
        <div className="menu">
          <div className="leftbar-users">
            <p>Welcome</p>
            <span>{currentUser.name}</span>
          </div>

          <hr className="leftbar-hr" />
          <div className="leftbar-item">
            <HomeIcon />
            <span className="leftbar-span">Feed</span>
          </div>

          <div className="leftbar-item">
            <GridViewIcon />
            <span className="leftbar-span">Explore</span>
          </div>

          <div className="leftbar-item">
            <StorefrontIcon />
            <span className="leftbar-span">Marketplace</span>
          </div>

          <div className="leftbar-item">
            <GroupsIcon />
            <span className="leftbar-span">Groups</span>
          </div>

          <div className="leftbar-item">
            <SettingsIcon />
            <span className="leftbar-span">Settings</span>
          </div>
        </div>

        <hr className="leftbar-hr" />

        <div className="menu">
          <span className="leftbar-span2">My Contacts</span>
          <div className="leftbar-item">
            <img
              className="leftbar-img"
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg"
              alt=""
            />
            <span className="leftbar-span">Emily</span>
          </div>

          <div className="leftbar-item">
            <img
              className="leftbar-img"
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg"
              alt=""
            />
            <span className="leftbar-span">Emily</span>
          </div>

          <div className="leftbar-item">
            <img
              className="leftbar-img"
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg"
              alt=""
            />
            <span className="leftbar-span">Emily</span>
          </div>

          <div className="leftbar-item">
            <img
              className="leftbar-img"
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg"
              alt=""
            />
            <span className="leftbar-span">Emily</span>
          </div>

          <div className="leftbar-item">
            <img
              className="leftbar-img"
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg"
              alt=""
            />
            <span className="leftbar-span">Emily</span>
          </div>

          <div className="leftbar-item">
            <img
              className="leftbar-img"
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg"
              alt=""
            />
            <span className="leftbar-span">Emily</span>
          </div>

          <div className="leftbar-item">
            <img
              className="leftbar-img"
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg"
              alt=""
            />
            <span className="leftbar-span">Emily</span>
          </div>

          <div className="leftbar-item">
            <img
              className="leftbar-img"
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg"
              alt=""
            />
            <span className="leftbar-span">Emily</span>
          </div>

          <div className="leftbar-item">
            <img
              className="leftbar-img"
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg"
              alt=""
            />
            <span className="leftbar-span">Emily</span>
          </div>

          <div className="leftbar-item">
            <img
              className="leftbar-img"
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg"
              alt=""
            />
            <span className="leftbar-span">Emily</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
