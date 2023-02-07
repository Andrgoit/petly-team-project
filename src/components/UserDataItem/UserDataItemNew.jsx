import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import './UserDataItem.styled.css';
import { ReactComponent as Pencil } from '../../img/ci_edit.svg';
import { ReactComponent as DoneButton } from '../../img/done-button.svg';
// import { OnLogout } from 'components/Logout/Logout';
import { logout } from '../../redux/auth/authOperations';
import logoutBtn from '../../img/logoutBtn.png';
import {
  DataForm,
  DataFormList,
  InputTitle,
  InputField,
  InputData,
  EditInfoButton,
  ButtonLogout,
} from './UserDataItem.styled';

export const UserDataItem = ({ user }) => {
  const { name, email, birthdate, location, phone } = user;
  const [userName, setUserName] = useState(name || '-----');
  const [userEmail, setUserEmail] = useState(email || '-----');
  const [userBirthday, setUserBirthday] = useState(birthdate || '-----');
  const [userPhone, setUserPhone] = useState(phone || '-----');
  const [userCity, setUserCity] = useState(location || '-----');

  const [iconStyle, setIconStyle] = useState('edit-btn');
  const [editBtnIsDisabled, setEditBtnIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  const ucFirst = str => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };

  const changeElement = element => {
    if (element === 'birthdate') {
      return (element = 'birthday');
    }
    if (element === 'location') {
      return (element = 'city');
    }
    return element;
  };

  const isoDateToLocal = isoDate => {
    const date = new Date(`${isoDate}`);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const newDate = `${day}.${month}.${year}`;
    return newDate;
  };

  const userArray = Object.keys({ name, email, birthdate, phone, location });

  // active input
  const [active, setActive] = useState(false);
  const [inputeValue, setInputeValue] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const onInputeChange = e => {
    setInputeValue(e.target.value);
  };
  const handleClick = e => {
    e.preventDefault();
    const fieldNameInput = e.currentTarget.previousElementSibling.name;
    const fieldNameButton = e.currentTarget.name;
    console.log(fieldNameInput);
    console.log(fieldNameButton);
    if (fieldNameButton === fieldNameInput) {
      if (active === true && inputeValue !== '') {
        setActive(false);
        setIsBtnDisabled(false);
        return;
      }
      setActive(true);
    }
  };

  const elements = userArray.map(element => {
    return (
      <li key={user[element]}>
        <InputTitle htmlFor={element} key={element}>
          <InputField key="field1">
            {ucFirst(changeElement(element))}
          </InputField>
          <InputData
            type="text"
            name={element}
            value={
              element === 'birthdate'
                ? isoDateToLocal(user.birthdate)
                : user[element]
            }
            key="data-input1"
            disabled={!active}
            onChange={onInputeChange}
          />
          <EditInfoButton
            type="button"
            name={element}
            key="edit-button1"
            onClick={handleClick}
            disabled={!active && isBtnDisabled}
          >
            {!active ? (
              <Pencil className={iconStyle} name="edit-icon" key="edit-icon1" />
            ) : (
              <DoneButton key="done-icon1" />
            )}
          </EditInfoButton>
        </InputTitle>
      </li>
    );
  });
  return (
    <DataForm key="data-container">
      <DataFormList>{elements}</DataFormList>
      <ButtonLogout key="log-out-btn" onClick={() => onLogout()}>
        <img
          src={logoutBtn}
          alt="logout-button"
          className="logout-button"
          key="logout-button"
        ></img>
        Log out
      </ButtonLogout>
    </DataForm>
  );
};

export default UserDataItem;
