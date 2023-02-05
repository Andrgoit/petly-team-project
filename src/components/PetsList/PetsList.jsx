import React from 'react';
import PetsItem from 'components/PetsItem/PetsItem';

export default function PetsList({ pets }) {
  const elements = pets.map(({ avatar, name, date, breed, comments }) => {
    return (
      <PetsItem
        key={PetsItem}
        name={name}
        avatar={avatar}
        date={date}
        breed={breed}
        comments={comments}
      />
    );
  });
  return <div>{elements}</div>;
}
