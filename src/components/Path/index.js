import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PathContext } from "../../utils/pathContext";
import "./index.scss";

import arrowIcon from "../../assets/icons/nav-1.svg";

const Path = () => {
  const loc = useLocation();
  const nav = useNavigate();
  // const {path, setPath} = useContext(PathContext)
  // const path = useContext(PathContext)
  // const road = loc.pathname.split('/')

  // useEffect(() => {
  // setPath([...path, ])
  // },[loc])

  return (
    <div className="path-container">
      <div className="path-left">
        {
          // loc.pathname.split('/').map((i,index) => {
          loc.pathname.split("/").map((i, index) => {
            if (index != 0) {
              return (
                <div className="indi-paths" onClick={() => {
                  nav(-1, {replace: true})
                }}>
                  {i}{" "}
                  <img className="path-navicon" src={arrowIcon} alt="naigate" />
                </div>
              );
            } else {
              return <span></span>;
            }
          })
        }
      </div>
      <div className="path-right">
        <div className="path-button">BUILD</div>
        <div className="path-button">SAVE</div>
      </div>
    </div>
  );
};

export default Path;
