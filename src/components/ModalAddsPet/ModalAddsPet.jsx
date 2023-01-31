//Компонент рендерить модалку з формою для створення картки з даними про тварину користувача.
//Всі поля для вводу обов'язкові для заповнення
//перехід на наступну сторінку по кнопці кансел
//сансел форма очищається
//свг айкон
//валідація полів = formik

//import {useState} from 'react';
//import ReactDOM from 'react-dom';

//import { ModalAddPets,
//	NameModal,
//	NameInput,
//	Input,
//	ButtonNext,
//	ButtonCancel,
//	TextModal,
//	InputComment
//} from "./ModalAddsPet.styled";
 
//Modal.setAppElement('#yourAppElement');

//// 2 page open modall addPets
//const ModalAddPetsPageTwo = () => {
//	return (
//		<ModalAddPetsPageTwo>
//			<NameModal>Add pet</NameModal>
//			<svg>icon close</svg>
//			<TextModal>Add photo and some comments</TextModal>
//			<img src="#" alt="add photo pets"></img>
//					<NameInput>Comments
//					<InputComment placeholder="Type comments"></InputComment>
//				</NameInput>
//				<ButtonNext>Next</ButtonNext>
//				<ButtonCancel>Cancel</ButtonCancel>
//		</ModalAddPetsPageTwo>
//	)
//}

//const ModalAddsPet = () => {
//	const [isOpenModal, setIsOpenModal] = useState("false");
//	const [isCloseModal, setIsCloseModal] = useState("true");
	

//	return (
//		<Modal 
//		isOpen={isOpenModal}
//		//onAfterClose={}
//		onRequestClose={setIsCloseModal}
//		//style={}
//		contentLabel="AddPetsModal"
//		>
//		<ModalAddPets>
//			<NameModal>Add pet</NameModal>
//			<svg onClick={() => setIsCloseModal(false)}>icon close</svg>
//			<form>
//				<NameInput>Name pet
//				<Input type="text" placeholder="Type name pet"></Input>
//			</NameInput>
//				<NameInput>Date of birth
//				<Input type="text" placeholder="Type date of birth"></Input>
//			</NameInput>
//				<NameInput>Breed
//				<Input type="text" placeholder="Type breed"></Input>
//			</NameInput>
//			<ButtonNext>Next</ButtonNext>
//					<ButtonCancel>Cancel</ButtonCancel>
//			</form>
//			<ModalAddPetsPageTwo />
//			</ModalAddPets>
			
//		</Modal>
//	)
//}



export default ModalAddsPet;