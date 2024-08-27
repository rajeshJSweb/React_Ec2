/*eslint-disable*/
import { Avatar } from 'antd';
import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../../redux/authentication/actionCreator';
import Heading from '../../heading/heading';
import { Popover } from '../../popup/popup';
import { InfoWraper, UserDropDwon } from './auth-info-style';

function AuthInfo() {
  const dispatch = useDispatch();

  const SignOut = e => {
    e.preventDefault();
    dispatch(logOut());
  };

  const userContent = (
    <UserDropDwon>
      <div className="user-dropdwon">
        <figure className="user-dropdwon__info">
          <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
          <figcaption>
            <Heading as="h5">Abdullah Bin Talha</Heading>
            <p>Senior Agent</p>
          </figcaption>
        </figure>
        <ul className="user-dropdwon__links">
          <li>
            <Link to="#">
              <FeatherIcon icon="user" /> Profile
            </Link>
          </li>
          <li>
            <Link to="#">
              <FeatherIcon icon="bell" /> Help
            </Link>
          </li>
        </ul>
        <Link className="user-dropdwon__bottomAction" onClick={SignOut} to="#">
          <FeatherIcon icon="log-out" /> Sign Out
        </Link>
      </div>
    </UserDropDwon>
  );

  // const onFlagChangeHandle = value => {
  //   setState({
  //     ...state,
  //     flag: value,
  //   });
  // };

  // const country = (
  //   <NavAuth>
  //     <Link onClick={() => onFlagChangeHandle('english')} to="#">
  //       <img src={require('../../../static/img/flag/english.png')} alt="" />
  //       <span>English</span>
  //     </Link>
  //     <Link onClick={() => onFlagChangeHandle('germany')} to="#">
  //       <img src={require('../../../static/img/flag/germany.png')} alt="" />
  //       <span>Germany</span>
  //     </Link>
  //     <Link onClick={() => onFlagChangeHandle('spain')} to="#">
  //       <img src={require('../../../static/img/flag/spain.png')} alt="" />
  //       <span>Spain</span>
  //     </Link>
  //     <Link onClick={() => onFlagChangeHandle('turky')} to="#">
  //       <img src={require('../../../static/img/flag/turky.png')} alt="" />
  //       <span>Turky</span>
  //     </Link>
  //   </NavAuth>
  // );

  return (
    <InfoWraper>
      {/* <Message /> */}
      {/* <Notification /> */}

      {/* <Settings /> */}
      {/* <Support /> */}

      <div className="nav-author">
        <Popover placement="bottomRight" content={userContent} action="click">
          <Link to="#" className="head-example">
            <Avatar src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png" />
          </Link>
        </Popover>
      </div>
    </InfoWraper>
  );
}

export default AuthInfo;
