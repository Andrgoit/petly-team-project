import React from 'react';
import PetsItem from 'components/PetsItem/PetsItem';

export default function PetsList({ pets }) {
  if (pets) {
    const elements = pets.map(
      ({ _id, avatar, name, date, breed, comments }) => {
        return (
          <PetsItem
            key={_id}
            name={name}
            avatar={avatar}
            date={date}
            breed={breed}
            comments={comments}
          />
        );
      }
    );
    return <div>{elements}</div>;
  }
}
