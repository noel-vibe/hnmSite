import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  let [width, setWidth] = useState(0);
  const navigate = useNavigate()
  const goToLogin=()=>{
    navigate("/login")
  }
  const goToMain=()=>{
    navigate("/")
  }
  const search = (event) =>{
    if(event.key === "Enter"){
    //입력한 검색어를 읽어와서 url을 바꿔준다
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`)
  }
}

  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
      <div className="login-button">
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} className="user-button"/>
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} className="user-button" />
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
      </div>


      <div className="nav-section">
        <img
          width={100} className="logo"
          src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmPpwY%2FbtrS08qGYmD%2FHMrVGbYtNNpxynW3i53Zy1%2Fimg.png"
          onClick={goToMain}
       />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li><a href="#" key={index}>{menu}</a></li>
          ))}
        </ul>
      </div>
        <div className="search-wrap">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" onKeyPress={(event)=>search(event)} placeholder="Search" class="input-box" />
        </div>
      
    </div>
    </div>
  );
};

export default Navbar;
