import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import { NoticesList } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({ notices, favorite }) => {
  const elements = notices.map(
    ({ _id, title, birthdate, breed, location, price, avatar }) => (
      <NoticeCategoryItem
        key={_id}
        _id={_id}
        title={title}
        birthdate={birthdate}
        breed={breed}
        location={location}
        price={price}
        avatar={avatar}
        favorite={favorite}
      />
    )
  );
  return <NoticesList>{elements}</NoticesList>;
};

export default NoticesCategoriesList;
