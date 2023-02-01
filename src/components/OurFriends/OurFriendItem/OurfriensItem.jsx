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
} from '../OurFriendItem/OurFriensItem.styled';

var days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
// var d = new Date();
// var n = d.getDay();
// var today = days[n];
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
  let timeList = [];
  worktime.toString() === ''
    ? timeList.push('', '', '', '', '', '', '')
    : (timeList = [...worktime]);

  const timeListDropmenu = timeList.map(time =>
    time === '' ? (
      <li>
        <p>-------------</p>
      </li>
    ) : (
      <li>{time}</li>
    )
  );

  const dayListDropmenu = days.map(day => (
    <li key={day.toString()} className="workDay">
      {day}
    </li>
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
                  <ul>{dayListDropmenu}</ul>
                  <ul>{timeListDropmenu}</ul>
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
