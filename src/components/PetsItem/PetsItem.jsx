import React from 'react';
import deleteIcon from '../../img/delete-icon.svg';

import {
  PetItem,
  PetImage,
  ListInfo,
  ListInfoItem,
  DeleteIcon,
  DeleteImage,
} from './PetsItem.styled';

export default function PetsItem({ id, avatar, name, date, breed, comments, deletePets }) {
  return (<>
    <PetItem>
      <PetImage src={avatar} alt={name} />
      <ListInfo>
        <ListInfoItem>Name: {name}</ListInfoItem>
        <ListInfoItem>Date of birth: {date}</ListInfoItem>
        <ListInfoItem>Breed: {breed}</ListInfoItem>
        <ListInfoItem>Comments: {comments}</ListInfoItem>
      </ListInfo>
      <DeleteIcon onClick= {deletePets(id)}>
        <DeleteImage src={deleteIcon} alt="Delete Icon" />
      </DeleteIcon>
    </PetItem>
    </>
  );
}
