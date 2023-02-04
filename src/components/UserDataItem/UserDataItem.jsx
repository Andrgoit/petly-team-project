import React from 'react';
import { useState } from 'react';
import './UserDataItem.styled.css';
import cameraLogo from '../../img/Camera_2.svg';
import { ReactComponent as Pencil } from '../../img/ci_edit.svg';
import { ReactComponent as DoneButton } from '../../img/done-button.svg';
// import avatar from '../../img/anonym-avatar.png';
import logoutBtn from '../../img/logoutBtn.png';

export const UserData = (name, email, location, birthdate, phone) => {
  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [userBirthday, setUserBirthday] = useState(birthdate);
  const [userPhone, setUserPhone] = useState('phone');
  const [userCity, setUserCity] = useState(location);
  const [iconStyle, setIconStyle] = useState('edit-btn');
  const [editBtnIsDisabled, setEditBtnIsDisabled] = useState(false);

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
    const activeInput = e.currentTarget.children[1];
    activeInput.disabled = false;
    activeInput.className = 'data-input-active';
    const disactiveButton = e.currentTarget.children[2];
    disactiveButton.className = 'button-none';
    const activeButton = e.currentTarget.children[3];
    activeButton.style.display = 'block';
  };

  const onChangedInput = e => {
    e.preventDefault();
    const input = e.currentTarget.children[0].children[1];
    input.disabled = true;
    input.className = 'data-input';
    const activeButton = e.currentTarget.children[0].children[3];
    activeButton.style.display = 'none';
    const disabledButton = e.currentTarget.children[0].children[2];
    disabledButton.className = 'data-edit-info';
    setIconStyle('edit-btn');
  };

  return (
    <div className="user-data-container">
      <h3 className="user-data-title">My information:</h3>
      <div className="user-data">
        <div className="photo-container">
          <img className="avatar"></img>
          <label className="edit-photo-btn-container">
            <input type="file" name="input-avatar" />
            <button className="data-edit-photo">
              <img
                src={cameraLogo}
                alt="camera logo"
                className="camera-logo"
              ></img>
              Edit photo
            </button>
          </label>
        </div>
        <form className="data-container" onSubmit={onChangedInput}>
          <label className="input-title" onClick={onEditInfo}>
            <span className="field">Name:</span>
            <input
              type="text"
              name="name"
              value={userName}
              className="data-input"
              disabled
              onChange={onInputChange}
            />
            <button
              type="button"
              className="data-edit-info"
              onClick={onEditButtonStyle}
              disabled={editBtnIsDisabled}
            >
              <Pencil className={iconStyle} />
            </button>
            <button type="submit" className="done-button">
              <DoneButton className="done-icon" />
            </button>
          </label>
          <label className="input-title" onClick={onEditInfo}>
            <span className="field">Email:</span>
            <input
              type="email"
              name="email"
              value={userEmail}
              className="data-input"
              disabled
              onChange={onInputChange}
            />
            <button
              type="button"
              className="data-edit-info"
              onClick={onEditButtonStyle}
              disabled={editBtnIsDisabled}
            >
              <Pencil className={iconStyle} />
            </button>
            <button type="submit" className="done-button">
              <DoneButton className="done-icon" />
            </button>
          </label>
          <label className="input-title" onClick={onEditInfo}>
            <span className="field">Birthday:</span>
            <input
              type="text"
              name="birthday"
              value={userBirthday}
              className="data-input"
              disabled
              onChange={onInputChange}
            />
            <button
              type="button"
              className="data-edit-info"
              onClick={onEditButtonStyle}
              disabled={editBtnIsDisabled}
            >
              <Pencil className={iconStyle} />
            </button>
            <button type="submit" className="done-button">
              <DoneButton className="done-icon" />
            </button>
          </label>
          <label className="input-title" onClick={onEditInfo}>
            <span className="field">Phone:</span>
            <input
              type="text"
              name="phone"
              value={userPhone}
              className="data-input"
              disabled
              onChange={onInputChange}
            />
            <button
              type="button"
              className="data-edit-info"
              onClick={onEditButtonStyle}
              disabled={editBtnIsDisabled}
            >
              <Pencil className={iconStyle} />
            </button>
            <button type="submit" className="done-button">
              <DoneButton className="done-icon" />
            </button>
          </label>
          <label className="input-title" onClick={onEditInfo}>
            <span className="field">City:</span>
            <input
              type="text"
              name="city"
              value={userCity}
              className="data-input"
              disabled
              onChange={onInputChange}
            />
            <button
              type="button"
              className="data-edit-info"
              onClick={onEditButtonStyle}
              disabled={editBtnIsDisabled}
            >
              <Pencil className={iconStyle} />
            </button>
            <button type="submit" className="done-button">
              <DoneButton className="done-icon" />
            </button>
          </label>
          <button className="log-out-btn">
            <img
              src={logoutBtn}
              alt="logout-button"
              className="logout-button"
            ></img>
            Log out
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserData;
