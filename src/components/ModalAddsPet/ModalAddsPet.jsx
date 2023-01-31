//Компонент рендерить модалку з формою для створення картки з даними про тварину користувача.
//Всі поля для вводу обов'язкові для заповнення
//перехід на наступну сторінку по кнопці next
//сансел форма очищається
//свг айкон
//валідація полів = formik
//закриття модалки по свг або кансел and eskape and beckdroop

import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

import { NameModal, Label, ButtonNext, ButtonCancel } from "./ModalAddsPet.styled";


const SignupPetSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, 'Too Short!')
		.max(16, 'Too Long!')
		.required('Required'),
	date: Yup.date()
		.required('Required'),
	breed: Yup.string()
		.min(2, 'Too Short!')
		.max(16, 'Too Long!')
		.required('Required'),
	comments: Yup.string()
		.min(8, 'Too Short!')
		.max(120, 'Too Long!')
		.required('Required'),
 });

const ModalAddsPet = () => {
	const [isCloseModal, setIsCloseModal] = useState("true");

//writer metod submit form
	const handleSubmitForm = () => {
		//e.preventDefault();
		//reset //kансел форма очищається
	}

/*перехід на наступну сторінку по кнопці next*/
	const nextPage = () => { }
	
	//для змін в інпуті
	//const handleChange = (e) => {
	//	const { value, name } = e.target;
	//	this.setState({[name]: value]})
	//}
	
	return (
		<div>
			<NameModal>Add pet</NameModal>
			<svg onClick={() => setIsCloseModal(false)}>icon close</svg>
			<Formik
				initialValues={{
					name: " ",
					date: " ",
					breed: " ",
					comments: " ",
				}}
				validationSchema={SignupPetSchema}
				onSubmit={values => { console.log(values) }} >
				{({ errors, touched }) => (
					<Form onSubmit={handleSubmitForm}>
						<Label>Name pet
							<Field name="name" type="text" placeholder="Type name pet" />
						</Label>
						{errors.name && touched.name ? (<div>{errors.name}</div>) : null}
						<ErrorMessage name="name" />
						<Label>Date of birth
							<Field name="date" type="date" placeholder="Type date of birth" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" title="Date in the format dd/mm/yyyy" />
						</Label>
						{errors.date && touched.date ? (<div>{errors.date}</div>) : null}
						<ErrorMessage name="date" />
						<Label>Breed
							<Field name="breed" type="text" placeholder="Type breed" />
						</Label>
						{errors.breed && touched.breed ? (<div>{errors.breed}</div>) : null}
						<ErrorMessage name="breed" />
						{/*перехід на наступну сторінку по кнопці next*/}
						<ButtonNext type="submit" onClick={handleSubmitForm}>Next</ButtonNext>
						{/*//вихід з форми та очищення полів*/}
						<ButtonCancel>Cancel</ButtonCancel>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default ModalAddsPet;

//import ReactDOM from 'react-dom';
 
//Modal.setAppElement('#yourAppElement');

//// 2 page open modall addPets
//const ModalAddPetsPageTwo = () => {
//	return (
//		<ModalAddPetsPageTwo>
//			<NameModal>Add pet</NameModal>
//			<svg>icon close</svg>
//			<TextModal>Add photo and some comments</TextModal>
//			<img input type="file" src="#" alt="add photo pets"></img>
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
//	return (
//		<Modal 
//		isOpen={isOpenModal}
//		//onAfterClose={}
//		onRequestClose={setIsCloseModal}
//		//style={}
//		contentLabel="AddPetsModal"
//		>
//		<ModalAddPets>
//			

//			<ModalAddPetsPageTwo />
//			</ModalAddPets>
			
//		</Modal>
//	)
//}



