import React from 'react';
import { useState } from 'react';
import './UserDataItem.styled.css';
import cameraLogo from '../../img/Camera_2.svg';
import { ReactComponent as Pencil } from '../../img/ci_edit.svg';
import { ReactComponent as DoneButton } from '../../img/done-button.svg';
import logoutBtn from '../../img/logoutBtn.png';
// import { OnLogout } from 'components/Logout/Logout';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';
import { updateUser } from '../../redux/users/users-operations';

export const UserData = ({ user }) => {
  const { avatar, name, email, birthdate, location, phone } = user;
  const [userName, setUserName] = useState(name || '-');
  const [userEmail, setUserEmail] = useState(email || '-');
  const [userBirthday, setUserBirthday] = useState(birthdate || '-');
  const [userPhone, setUserPhone] = useState(phone || '-');
  const [userCity, setUserCity] = useState(location || '-');

  const [iconStyle, setIconStyle] = useState('edit-btn');
  const [editBtnIsDisabled, setEditBtnIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  const onEditButtonStyle = e => {
    setIconStyle('edit-btn-react');
    setEditBtnIsDisabled(true);
  };

  const onInputChange = e => {
    const key = e.target.name;
    switch (key) {
      case 'name':
        return setUserName(e.target.value);
      case 'email':
        return setUserEmail(e.target.value);
      case 'birthday':
        return setUserBirthday(e.target.value);
      case 'phone':
        return setUserPhone(e.target.value);
      case 'city':
        return setUserCity(e.target.value);
      default:
        return;
    }
  };

  const onEditInfo = e => {
    console.log(e.currentTarget.children[2].children[0].children[0].fill);
    if (
      e.target.className.baseVal === 'edit-btn' ||
      e.target.className === 'data-edit-info'
    ) {
      const activeInput = e.currentTarget.children[1];
      activeInput.disabled = false;
      activeInput.className = 'data-input-active';
      const disactiveButton = e.currentTarget.children[2];
      disactiveButton.className = 'button-none';
      const activeButton = e.currentTarget.children[3];
      activeButton.style.display = 'block';
      setEditBtnIsDisabled(true);
      setIconStyle('edit-btn-react');
    }
    return;
  };

  const onChangedInput = e => {
    e.preventDefault();
    if ((e.currentTarget.children[0].htmlFor = 'name')) {
      const input = e.currentTarget.children[0].children[1];
      input.disabled = true;
      input.className = 'data-input';
      const activeButton = e.currentTarget.children[0].children[3];
      activeButton.style.display = 'none';
      const disabledButton = e.currentTarget.children[0].children[2];
      disabledButton.className = 'data-edit-info';
      setIconStyle('edit-btn');
      dispatch(updateUser({ name: input.value }));
    }
    if ((e.currentTarget.children[1].htmlFor = 'email')) {
      const input = e.currentTarget.children[1].children[1];
      input.disabled = true;
      input.className = 'data-input';
      const activeButton = e.currentTarget.children[1].children[3];
      activeButton.style.display = 'none';
      const disabledButton = e.currentTarget.children[1].children[2];
      disabledButton.className = 'data-edit-info';
      setIconStyle('edit-btn');
      dispatch(updateUser({ email: input.value }));
    }
    if ((e.currentTarget.children[2].htmlFor = 'birthday')) {
      const input = e.currentTarget.children[2].children[1];
      input.disabled = true;
      input.className = 'data-input';
      const activeButton = e.currentTarget.children[2].children[3];
      activeButton.style.display = 'none';
      const disabledButton = e.currentTarget.children[2].children[2];
      disabledButton.className = 'data-edit-info';
      setIconStyle('edit-btn');
      dispatch(updateUser({ birthday: input.value }));
    }
    if ((e.currentTarget.children[3].htmlFor = 'phone')) {
      const input = e.currentTarget.children[3].children[1];
      input.disabled = true;
      input.className = 'data-input';
      const activeButton = e.currentTarget.children[3].children[3];
      activeButton.style.display = 'none';
      const disabledButton = e.currentTarget.children[3].children[2];
      disabledButton.className = 'data-edit-info';
      setIconStyle('edit-btn');
      dispatch(updateUser({ birthday: input.value }));
    }
    if ((e.currentTarget.children[3].htmlFor = 'city')) {
      const input = e.currentTarget.children[4].children[1];
      input.disabled = true;
      input.className = 'data-input';
      const activeButton = e.currentTarget.children[4].children[3];
      activeButton.style.display = 'none';
      const disabledButton = e.currentTarget.children[4].children[2];
      disabledButton.className = 'data-edit-info';
      setIconStyle('edit-btn');
      dispatch(updateUser({ birthday: input.value }));
    }
  };

  return (
    <div className="user-data-container" key="user-data-container">
      <h3 className="user-data-title" key="title">
        My information:
      </h3>
      <div className="user-data" key="user-data">
        <div className="photo-container" key="photo-container">
          <img
            src={avatar}
            className="avatar"
            alt="avatar"
            key="photo-container"
          ></img>
          <label
            className="edit-photo-btn-container"
            key="edit-photo-btn-container"
          >
            <input type="file" name="input-avatar" key="input-avatar" />
            <button className="data-edit-photo" key="data-edit-photo">
              <img
                src={cameraLogo}
                alt="camera logo"
                className="camera-logo"
                key="camera-logo"
              ></img>
              Edit photo
            </button>
          </label>
        </div>
        <form
          className="data-container"
          onSubmit={onChangedInput}
          key="data-container"
        >
          <label
            className="input-title"
            htmlFor="name"
            key="input-title1"
            onClick={onEditInfo}
          >
            <span className="field" key="field1">
              Name:
            </span>
            <input
              type="text"
              name="name"
              value={userName}
              className="data-input"
              key="data-input1"
              disabled
              onChange={onInputChange}
            />
            <button
              type="button"
              name="edit-button"
              className="data-edit-info"
              onClick={onEditButtonStyle}
              disabled={editBtnIsDisabled}
              key="edit-button1"
            >
              <Pencil className={iconStyle} name="edit-icon" key="edit-icon1" />
            </button>
            <button type="submit" className="done-button" key="done-button1">
              <DoneButton className="done-icon" key="done-icon1" />
            </button>
          </label>
          <label
            className="input-title"
            htmlFor="email"
            key="input-title2"
            onClick={onEditInfo}
          >
            <span className="field" key="field2">
              Email:
            </span>
            <input
              type="email"
              name="email"
              value={userEmail}
              className="data-input"
              disabled
              onChange={onInputChange}
              key="data-input2"
            />
            <button
              type="button"
              className="data-edit-info"
              onClick={onEditButtonStyle}
              disabled={editBtnIsDisabled}
              key="edit-button2"
            >
              <Pencil className={iconStyle} key="edit-icon2" />
            </button>
            <button type="submit" className="done-button" key="done-button2">
              <DoneButton className="done-icon" key="done-icon2" />
            </button>
          </label>
          <label
            className="input-title"
            htmlFor="birthday"
            onClick={onEditInfo}
            key="input-title3"
          >
            <span className="field" key="field3">
              Birthday:
            </span>
            <input
              type="text"
              name="birthday"
              value={userBirthday}
              className="data-input"
              disabled
              onChange={onInputChange}
              key="data-input3"
            />
            <button
              type="button"
              className="data-edit-info"
              onClick={onEditButtonStyle}
              disabled={editBtnIsDisabled}
              key="edit-button3"
            >
              <Pencil className={iconStyle} key="edit-icon3" />
            </button>
            <button type="submit" className="done-button" key="done-button3">
              <DoneButton className="done-icon" key="done-icon3" />
            </button>
          </label>
          <label
            className="input-title"
            htmlFor="phone"
            key="input-title4"
            onClick={onEditInfo}
          >
            <span className="field" key="field4">
              Phone:
            </span>
            <input
              type="text"
              name="phone"
              value={userPhone}
              className="data-input"
              disabled
              onChange={onInputChange}
              key="data-input4"
            />
            <button
              type="button"
              className="data-edit-info"
              onClick={onEditButtonStyle}
              disabled={editBtnIsDisabled}
              key="edit-button4"
            >
              <Pencil className={iconStyle} key="edit-icon4" />
            </button>
            <button type="submit" className="done-button" key="done-button4">
              <DoneButton className="done-icon" key="done-icon4" />
            </button>
          </label>
          <label
            className="input-title"
            htmlFor="city"
            key="input-title5"
            onClick={onEditInfo}
          >
            <span className="field" key="field5">
              City:
            </span>
            <input
              type="text"
              name="city"
              value={userCity}
              className="data-input"
              disabled
              onChange={onInputChange}
              key="data-input5"
            />
            <button
              type="button"
              className="data-edit-info"
              onClick={onEditButtonStyle}
              disabled={editBtnIsDisabled}
              key="edit-button5"
            >
              <Pencil className={iconStyle} key="edit-icon5" />
            </button>
            <button type="submit" className="done-button" key="done-button5">
              <DoneButton className="done-icon" key="done-button5" />
            </button>
          </label>
          <button
            className="log-out-btn"
            key="log-out-btn"
            onClick={() => onLogout()}
          >
            <img
              src={logoutBtn}
              alt="logout-button"
              className="logout-button"
              key="logout-button"
            ></img>
            Log out
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserData;
