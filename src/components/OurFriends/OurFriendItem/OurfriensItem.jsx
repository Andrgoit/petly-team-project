import {
  CardFriend,
  FriendName,
  FriendContent,
  FriendContentList,
  FriendLogo,
  FriendContentItemTime,
  FriendContentItemWorkTime,
} from '../OurFriendItem/OurFriensItem.styled';

var days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
// var d = new Date();
// var n = d.getDay();
// var today = days[n];
const fish = '----------------------------';

function OurFriensItem({ id, name, logo, adress, email, phone, worktime }) {
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
    <li key={id}>
      <CardFriend>
        <FriendName>{name}</FriendName>
        <FriendContent>
          <FriendLogo>
            <img src={logo} alt="Логотип" />
          </FriendLogo>
          <FriendContentList>
            <FriendContentItemTime>
              Time:
              <br />
              {timeList[0] ? timeList[0] : '00:00 - 00:00'}
              <FriendContentItemWorkTime>
                <ul>{dayListDropmenu}</ul>
                <ul>{timeListDropmenu}</ul>
              </FriendContentItemWorkTime>
            </FriendContentItemTime>
            <p>
              Address:
              <br /> {adress ? adress : fish}
            </p>
            <p>
              Email:
              <br /> {email ? email : fish}
            </p>
            <p>
              Phone:
              <br /> {phone ? phone : fish}
            </p>
          </FriendContentList>
        </FriendContent>
      </CardFriend>
    </li>
  );
}

export default OurFriensItem;
