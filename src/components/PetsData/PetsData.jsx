////Компонент рендерить кнопку для додавання карточки з твариною та список відповідних карточок - PetsList
//Клік по кнопці відкриває модалку з формою для створення карточки тварини - ModalAddsPet  onClose={() => setIsOpenModal("false")}

import { useState } from "react";
import ModalAddsPet from "../ModalAddsPet/ModalAddsPet";
import PetsList from "../PetsList/PetsList"
import { AddPet, MyPet} from "./PetsData.styled";

const PetsData = () => {
	const [isOpenModal, setIsOpenModal] = useState("false");
	const [isPetList, setIsPetList] = useState("items");
//что делать setIsPetList куда применить? onChange={() => setIsPetList("items")
	return (
		<div>
			<MyPet>My pets:</MyPet>
			{/*//клік по кнопці відкриває модалку openModalAddsPet*/}
			<AddPet type="button" onClick={() => setIsOpenModal("true")}>Add Pet</AddPet>
			{isOpenModal && <ModalAddsPet />}
			{/*{/* items={items} якщо є дані в списку то показуємо, якщо ні то нічого не показуємо*/}
			{isPetList && <PetsList onChange={() => setIsPetList("items")} />}
		</div>
	)
}

export default PetsData;