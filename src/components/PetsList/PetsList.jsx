//Компонент рендерить карточки з описом тварини. Карточка має кнопку для видалення.
//import nanoid from "nanoid"
//import { CartPets } from "./PetsList.styled";

const PetsList = ({ items }) => {
	return (
		<div>
			{items.map(({ name, birthdate, breed, comments, owner }) =>
			<ul>
					<img key={owner} src="#" alt="My pets"></img>
					<li key={name}>Name: {name}</li>
					<li key={birthdate}>Date of birth: {birthdate}</li>
					<li key={breed}>Breed:  {breed}</li>
					<li key={comments}>Comments: {comments}</li>
				</ul>)}
			<svg onClick={remove}>delete</svg>
			{/*удалить пітомца no id*/}
		</div>
	)
}

export default PetsList;

PetsList.defaultProps = {
    items: []
}

//import axios from "axios";
//axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";
//const fetchTasks = () => async dispatch => {
//  try {
//    const response = await axios.get("/tasks");
//  } catch (e) {}
//};
	


