import {
  CardFriend,
  FriendName,
  FriendContent,
  FriendContentList,
  FriendLogo,
  FriendContentItemTime,
  FriendContentItemWorkTime,
} from 'pages/OurFriendsPage/OurFriendsPage.styled';

var days = ['SU', 'MN', 'TU', 'WE', 'TH', 'FR', 'SA'];
var d = new Date();
var n = d.getDay();
var today = days[n];
const fish = '----------------------------';

function OurFriensItem({ id, name, logo, adress, email, phone, worktime }) {
  const timeList = [...worktime];

  return (
    <li key={id}>
      <CardFriend>
        <FriendName>{name}</FriendName>
        <FriendContent>
          <FriendLogo src={logo} alt="Логотип" />
          <FriendContentList>
            <FriendContentItemTime>
              Time:
              <br />
              {timeList[0] ? timeList[0] : '00:00-00:00'}
              <FriendContentItemWorkTime>
                <ul>
                  {days.map(day => (
                    <li>{day}</li>
                  ))}
                </ul>
                <ul>
                  {timeList.map(time =>
                    time === '' ? (
                      <li>
                        <p>----------</p>
                      </li>
                    ) : (
                      <li>{time}</li>
                    )
                  )}
                </ul>
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
