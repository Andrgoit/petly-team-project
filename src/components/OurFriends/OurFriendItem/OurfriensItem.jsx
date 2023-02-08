import {
  CardFriend,
  FriendName,
  FriendContent,
  FriendContentList,
  FriendLogo,
  FriendContentItemTime,
  FriendContentItemWorkTime,
  FriendLogoImg,
  AdressLink,
  ListDropmenu,
} from '../OurFriendItem/OurFriensItem.styled';

const fish = '----------------------------';

function OurFriensItem({
  _id,
  name,
  logo,
  url,
  addressUrl,
  adress,
  email,
  phone,
  worktime,
}) {
  const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  const d = new Date();
  const n = d.getDay();
  const today = days[n - 1];
  let timeList = [];
  worktime.toString() === ''
    ? timeList.push('', '', '', '', '', '', '')
    : (timeList = [...worktime]);

  const listDropmenu = timeList.map((time, i) => (
    <ListDropmenu key={i} isToday={days[i] === today}>
      <p>{days[i]}</p>
      {time === '' ? <p>Зачинено</p> : <p>{time}</p>}
    </ListDropmenu>
  ));

  return (
    <li key={_id}>
      <CardFriend>
        <FriendName href={url} target="_blank">
          {name}
        </FriendName>
        <FriendContent>
          <FriendLogo>
            <FriendLogoImg src={logo} alt="Логотип" />
          </FriendLogo>
          <FriendContentList>
            <li>
              <FriendContentItemTime>
                Time:
                <br />
                {timeList[0] ? timeList[0] : fish}
                <FriendContentItemWorkTime>
                  <ul>{listDropmenu}</ul>
                </FriendContentItemWorkTime>
              </FriendContentItemTime>
            </li>
            <li>
              <p>
                Address:
                <br />
                <AdressLink href={addressUrl} target="_blank">
                  {adress ? adress : fish}
                </AdressLink>
              </p>
            </li>
            <li>
              <p>
                Email:
                <br /> {email ? email : fish}
              </p>
            </li>
            <li>
              <p>
                Phone:
                <br /> {phone ? phone : fish}
              </p>
            </li>
          </FriendContentList>
        </FriendContent>
      </CardFriend>
    </li>
  );
}

export default OurFriensItem;
