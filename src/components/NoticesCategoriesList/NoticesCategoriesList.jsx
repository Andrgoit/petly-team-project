import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import { NoticesList } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({ notices }) => {
  const elements = notices.map(
    ({ _id, title, birthdate, breed, location, price, avatar }) => (
      <NoticeCategoryItem
        key={_id}
        title={title}
        birthdate={birthdate}
        breed={breed}
        location={location}
        price={price}
        avatar={avatar}
        id={_id}
      />
    )
  );
  return <NoticesList>{elements}</NoticesList>;
};

export default NoticesCategoriesList;
