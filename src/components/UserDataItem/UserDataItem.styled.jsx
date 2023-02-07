import styled from 'styled-components';

export const DataForm = styled.form`
  margin-top: 32px;
`;

export const DataFormList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
`;

export const InputTitle = styled.label`
  display: flex;
  align-items: center;
  margin-right: 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.39;
  letter-spacing: 0.04em;
  color: #111111;
`;

export const InputField = styled.span`
  display: block;
  width: 107px;
  margin-left: 22px;
`;

export const InputData = styled.input`
  background: transparent;
  border: none;
  padding-left: 12px;
  width: 216px;
  height: 32px;
  &.active {
    width: 216px;
    height: 32px;
    background: #fdf7f2;
    border-color: #f59256;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
    padding-left: 12px;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
    background: #fdf7f2;
    border-color: #f59256;
    outline: none;
  }
`;

export const EditInfoButton = styled.button`
  position: relative;
  fill: rgba(17, 17, 17, 0.6);
  width: 32px;
  height: 32px;
  background-color: #fdf7f2;
  border: none;
  border-radius: 25px;
  margin-left: 24px;
  :hover,
  :focus {
    background-color: #f5935668;
    cursor: pointer;
  }
`;

// .data-edit-info:focus .data-input-active {
//   width: 216px;
//   height: 32px;
//   background: #fdf7f2;
//   border-color: #f59256;
//   border: 1px solid rgba(245, 146, 86, 0.5);
//   border-radius: 40px;
//   padding-left: 12px;
// }
// .data-input-active:focus {
//   border: 1px solid rgba(245, 146, 86, 0.5);
//   border-radius: 40px;
//   background: #fdf7f2;
//   border-color: #f59256;
//   outline: none;
// }

// .edit-btn {
//   fill: #f59256;
//   position: absolute;
//   top: 6px;
//   left: 6px;
//   fill: #f59256;
// }

// .edit-btn-react * {
//   fill: #111111;
//   opacity: 0.6;
// }

// .button-none {
//   display: none;
// }

// .done-button {
//   display: none;
//   position: relative;
//   width: 32px;
//   height: 32px;
//   background-color: #fdf7f2;
//   border: none;
//   border-radius: 25px;
//   margin-left: 24px;
// }
export const DoneButton = styled.button`
  margin-top: 3px;
  margin-left: 1px;
`;
export const ButtonLogout = styled.button`
  position: relative;
  width: 75px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: rgba(17, 17, 17, 0.6);
  background: transparent;
  border: none;
  margin-left: 49px;
  margin-bottom: 23px;
  position: relative;
  width: 75px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: rgba(17, 17, 17, 0.6);
  background: transparent;
  border: none;
  margin-left: 37px;
  margin-bottom: 23px;
`;

// .log-out-btn {
//   position: relative;
//   width: 75px;
//   font-family: 'Manrope';
//   font-style: normal;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 22px;
//   letter-spacing: 0.04em;
//   color: rgba(17, 17, 17, 0.6);
//   background: transparent;
//   border: none;
//   margin-left: 49px;
//   margin-bottom: 23px;
//   position: relative;
//   width: 75px;
//   font-family: 'Manrope';
//   font-style: normal;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 22px;
//   letter-spacing: 0.04em;
//   color: rgba(17, 17, 17, 0.6);
//   background: transparent;
//   border: none;
//   margin-left: 37px;
//   margin-bottom: 23px;
// }

// .logout-button {
//   width: 18px;
//   position: absolute;
//   top: 3px;
//   left: -15px;
//   opacity: 0.6;
// }

// @media screen and (min-width: 768px) and (max-width: 1279px) {
//   .user-data-container {
//     margin-left: -33px;
//   }
//   .user-data-title {
//     font-size: 28px;
//     margin-left: 20px;
//     margin-bottom: 40px;
//   }

//   .user-data {
//     display: flex;
//     justify-content: left;
//     flex-direction: row-reverse;
//     width: 736px;
//   }

//   .data-container {
//     width: 379px;
//     margin-left: 32px;
//     padding: 0;
//   }

//   .input-title {
//     display: flex;
//     align-items: center;
//     margin-bottom: 8px;
//     font-family: 'Manrope';
//     font-style: normal;
//     font-weight: 500;
//     font-size: 18px;
//     line-height: 25px;
//     letter-spacing: 0.04em;
//     color: #111111;
//   }
//   .input-title {
//     display: flex;
//     align-items: center;
//     margin-bottom: 8px;
//     font-family: 'Manrope';
//     font-style: normal;
//     font-weight: 500;
//     font-size: 18px;
//     line-height: 25px;
//     letter-spacing: 0.04em;
//     color: #111111;
//   }

//   .input-title:nth-last-child() {
//     margin-bottom: 0;
//   }

//   .field {
//     display: block;
//     margin-left: 0;
//   }

//   .data-input {
//     background: transparent;
//     border: none;
//     padding-left: 12px;
//     width: 216px;
//     height: 32px;
//   }

//   .data-edit-info {
//     position: relative;
//     width: 32px;
//     height: 32px;
//     background-color: #fdf7f2;
//     border: none;
//     border-radius: 25px;
//     margin-left: 24px;
//   }

//   .data-input-active {
//     width: 216px;
//     height: 32px;
//     background: #fdf7f2;
//     border-color: #f59256;
//     border: 1px solid rgba(245, 146, 86, 0.5);
//     border-radius: 40px;
//     padding-left: 12px;
//   }

//   .data-input-active:focus {
//     border: 1px solid rgba(245, 146, 86, 0.5);
//     border-radius: 40px;
//     background: #fdf7f2;
//     border-color: #f59256;
//     outline: none;
//   }

//   .edit-btn {
//     fill: #f59256;
//   }

//   .edit-btn-react * {
//     fill: #111111;
//     opacity: 0.6;
//   }

//   .button-none {
//     display: none;
//   }

//   .done-button {
//     display: none;
//     position: relative;
//     width: 32px;
//     height: 32px;
//     background-color: #fdf7f2;
//     border: none;
//     border-radius: 25px;
//     margin-left: 24px;
//   }

//   .done-icon {
//     margin-top: 3px;
//     margin-left: 1px;
//   }

//   .log-out-btn {
//     position: relative;
//     width: 75px;
//     font-family: 'Manrope';
//     font-style: normal;
//     font-weight: 500;
//     font-size: 16px;
//     line-height: 22px;
//     letter-spacing: 0.04em;
//     color: rgba(17, 17, 17, 0.6);
//     background: transparent;
//     border: none;
//     margin-left: 17px;
//     margin-top: 33px;
//     margin-bottom: 24px;
//   }

//   .logout-button {
//     width: 18px;
//     position: absolute;
//     top: 3px;
//     left: -15px;
//     opacity: 0.6;
//   }

//   .photo-container {
//     display: block;
//     padding-top: 15px;
//     margin-left: 52px;
//   }

//   .avatar {
//     width: 233px;
//     height: 233px;
//     margin-left: 0;
//     background-color: antiquewhite;
//     border-radius: 50%;
//     filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
//   }

//   .edit-photo-btn-container {
//     position: relative;
//     width: 86px;
//     margin-left: 180px;
//   }

//   input[type='file'] {
//     position: absolute;
//     left: 0;
//     opacity: 0;
//     width: 86px;
//     z-index: 2;
//   }

//   .data-edit-photo {
//     position: relative;
//     font-family: 'Manrope';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 12px;
//     line-height: 22px;
//     letter-spacing: 0.04em;
//     color: #111111;
//     background: transparent;
//     border: none;
//     cursor: pointer;
//   }

//   .camera-logo {
//     position: absolute;
//     left: -20px;
//     width: 20px;
//   }
// }

// @media screen and (min-width: 320px) and (max-width: 767px) {
//   .user-data-title {
//     font-size: 20px;
//     margin-left: 0;
//   }

//   .user-data {
//     width: 280px;
//   }

//   .photo-container {
//     display: block;
//     padding-top: 20px;
//   }

//   .avatar {
//     margin-left: 23px;
//     margin-bottom: 12px;
//   }

//   .edit-photo-btn-container {
//     position: relative;
//     width: 86px;
//     margin-left: 170px;
//   }

//   input[type='file'] {
//     position: absolute;
//     left: 0;
//     opacity: 0;
//     width: 100px;
//     z-index: 2;
//   }

//   .input-title {
//     display: flex;
//     align-items: center;
//     margin-bottom: 12px;
//     font-family: 'Manrope';
//     font-style: normal;
//     font-weight: 500;
//     font-size: 12px;
//     line-height: 16px;
//     display: flex;
//     align-items: center;
//     letter-spacing: 0.04em;
//   }

//   .field {
//     display: block;
//     width: 107px;
//     margin-left: 16px;
//   }

//   .data-input {
//     background: transparent;
//     border: none;
//     padding-left: 12px;
//     font-size: 12px;
//     width: 159px;
//     height: 24px;
//   }

//   .data-edit-info {
//     position: relative;
//     width: 20px;
//     height: 20px;
//     background-color: #fdf7f2;
//     border: none;
//     border-radius: 25px;
//     margin-left: 0;
//     margin-right: 12px;
//   }

//   .data-input-active {
//     width: 159px;
//     height: 24px;
//     background: #fdf7f2;
//     border-color: #f59256;
//     border: 1px solid rgba(245, 146, 86, 0.5);
//     border-radius: 40px;
//     padding-left: 18px;
//   }

//   .data-input-active:focus {
//     border: 1px solid rgba(245, 146, 86, 0.5);
//     border-radius: 40px;
//     background: #fdf7f2;
//     border-color: #f59256;
//     outline: none;
//   }
//   .data-input-active:focus {
//     border: 1px solid rgba(245, 146, 86, 0.5);
//     border-radius: 40px;
//     background: #fdf7f2;
//     border-color: #f59256;
//     outline: none;
//   }

//   .data-edit-info {
//     position: relative;
//     width: 20px;
//     height: 20px;
//     background-color: #fdf7f2;
//     border: none;
//     border-radius: 25px;
//     margin-left: 0;
//     margin-right: 12px;
//   }

//   .edit-btn {
//     position: absolute;
//     top: 0;
//     left: 4px;
//     width: 10px;
//     fill: #f59256;
//   }
//   .edit-btn {
//     position: absolute;
//     top: 0;
//     left: 4px;
//     width: 12px;
//     fill: #f59256;
//   }

//   .edit-btn-react * {
//     fill: #111111;
//     opacity: 0.6;
//   }
//   .edit-btn-react * {
//     position: absolute;
//     top: 0;
//     left: 4px;
//     width: 12px;
//     fill: #111111;
//     opacity: 0.6;
//   }
//   .edit-btn-react {
//     position: absolute;
//     top: 0;
//     left: 4px;
//     width: 12px;
//     fill: #111111;
//     opacity: 0.6;
//   }

//   .button-none {
//     display: none;
//   }

//   .done-button {
//     display: none;
//     position: relative;
//     width: 32px;
//     height: 32px;
//     background-color: #fdf7f2;
//     border: none;
//     border-radius: 25px;
//     margin-left: 24px;
//   }
//   .done-button {
//     display: none;
//     position: relative;
//     width: 20px;
//     height: 20px;
//     background-color: #fdf7f2;
//     border: none;
//     border-radius: 25px;
//     margin-left: 13px;
//     margin-right: 12px;
//   }

//   .done-icon {
//     margin-top: 3px;
//     margin-left: 1px;
//   }
//   .done-icon {
//     width: 12px;
//     height: 12px;
//     margin-top: 3px;
//     margin-left: -1px;
//   }

//   .log-out-btn {
//     position: relative;
//     width: 75px;
//     font-family: 'Manrope';
//     font-style: normal;
//     font-weight: 500;
//     font-size: 16px;
//     line-height: 22px;
//     letter-spacing: 0.04em;
//     color: rgba(17, 17, 17, 0.6);
//     background: transparent;
//     border: none;
//     margin-left: 37px;
//     margin-bottom: 23px;
//   }

//   .logout-button {
//     width: 18px;
//     position: absolute;
//     top: 3px;
//     left: -15px;
//     opacity: 0.6;
//   }
//   .logout-button {
//     width: 18px;
//     position: absolute;
//     top: 3px;
//     left: -15px;
//     opacity: 0.6;
//   }
//   .input-title:nth-last-child() {
//     margin-bottom: 0;
//   }
// }

// @media screen and (min-width: 768px) and (max-width: 1279px) {
//   .user-data-title {
//     font-size: 28px;
//   }

//   .user-data {
//     display: flex;
//     justify-content: left;
//     flex-direction: row-reverse;
//     width: 736px;
//   }

//   .data-container {
//     width: 379px;
//     margin-top: 40px;
//     margin-left: 32px;
//     padding: 0;
//   }

//   .input-title {
//     display: flex;
//     align-items: center;
//     margin-bottom: 8px;
//     font-family: 'Manrope';
//     font-style: normal;
//     font-weight: 500;
//     font-size: 18px;
//     line-height: 25px;
//     letter-spacing: 0.04em;
//     color: #111111;
//   }

//   .input-title:nth-last-child() {
//     margin-bottom: 0;
//   }

//   .field {
//     display: block;
//     margin-left: 0;
//   }

//   .data-input {
//     background: transparent;
//     border: none;
//     padding-left: 12px;
//     width: 216px;
//     height: 32px;
//   }

//   .data-edit-info {
//     position: relative;
//     width: 32px;
//     height: 32px;
//     background-color: #fdf7f2;
//     border: none;
//     border-radius: 25px;
//     margin-left: 24px;
//   }

//   .data-input-active {
//     width: 216px;
//     height: 32px;
//     background: #fdf7f2;
//     border-color: #f59256;
//     border: 1px solid rgba(245, 146, 86, 0.5);
//     border-radius: 40px;
//     padding-left: 12px;
//   }

//   .data-input-active:focus {
//     border: 1px solid rgba(245, 146, 86, 0.5);
//     border-radius: 40px;
//     background: #fdf7f2;
//     border-color: #f59256;
//     outline: none;
//   }

//   .edit-btn {
//     fill: #f59256;
//   }

//   .edit-btn-react * {
//     fill: #111111;
//     opacity: 0.6;
//   }

//   .button-none {
//     display: none;
//   }

//   .done-button {
//     display: none;
//     position: relative;
//     width: 32px;
//     height: 32px;
//     background-color: #fdf7f2;
//     border: none;
//     border-radius: 25px;
//     margin-left: 24px;
//   }

//   .done-icon {
//     margin-top: 3px;
//     margin-left: 1px;
//   }
//   .done-icon {
//     margin-top: 3px;
//     margin-left: 1px;
//   }

//   .log-out-btn {
//     position: relative;
//     width: 75px;
//     font-family: 'Manrope';
//     font-style: normal;
//     font-weight: 500;
//     font-size: 16px;
//     line-height: 22px;
//     letter-spacing: 0.04em;
//     color: rgba(17, 17, 17, 0.6);
//     background: transparent;
//     border: none;
//     margin-left: 17px;
//     margin-top: 33px;
//     margin-bottom: 24px;
//   }

//   .logout-button {
//     width: 18px;
//     position: absolute;
//     top: 3px;
//     left: -15px;
//     opacity: 0.6;
//   }
//   .logout-button {
//     width: 18px;
//     position: absolute;
//     top: 3px;
//     left: -15px;
//     opacity: 0.6;
//   }

//   .photo-container {
//     display: block;
//     padding-top: 15px;
//     margin-left: 52px;
//   }

//   .avatar {
//     width: 233px;
//     height: 233px;
//     margin-left: 0;
//     background-color: antiquewhite;
//     border-radius: 50%;
//     filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
//   }

//   .edit-photo-btn-container {
//     position: relative;
//     width: 86px;
//     margin-left: 180px;
//   }

//   input[type='file'] {
//     position: absolute;
//     left: 0;
//     opacity: 0;
//     width: 86px;
//     z-index: 2;
//   }

//   .data-edit-photo {
//     position: relative;
//     font-family: 'Manrope';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 12px;
//     line-height: 22px;
//     letter-spacing: 0.04em;
//     color: #111111;
//     background: transparent;
//     border: none;
//     cursor: pointer;
//   }

//   .camera-logo {
//     position: absolute;
//     left: -20px;
//     width: 20px;
//   }
// }

// @media screen and (min-width: 320px) and (max-width: 767px) {
//   .user-data-title {
//     font-size: 20px;
//   }

//   .user-data {
//     width: 280px;
//   }

//   .photo-container {
//     display: block;
//     padding-top: 20px;
//   }

//   .avatar {
//     margin-left: 23px;
//     margin-bottom: 12px;
//   }

//   .edit-photo-btn-container {
//     position: relative;
//     width: 86px;
//     margin-left: 170px;
//   }

//   input[type='file'] {
//     position: absolute;
//     left: 0;
//     opacity: 0;
//     width: 100px;
//     z-index: 2;
//   }

//   .data-container {
//     margin-top: 36px;
//   }

//   .input-title {
//     display: flex;
//     align-items: center;
//     margin-bottom: 12px;
//     font-family: 'Manrope';
//     font-style: normal;
//     font-weight: 500;
//     font-size: 12px;
//     line-height: 16px;
//     display: flex;
//     align-items: center;
//     letter-spacing: 0.04em;
//   }

//   .field {
//     display: block;
//     width: 107px;
//     margin-left: 16px;
//   }

//   .data-input {
//     background: transparent;
//     border: none;
//     padding-left: 12px;
//     font-size: 12px;
//     width: 159px;
//     height: 24px;
//   }

//   .data-input-active {
//     width: 159px;
//     height: 24px;
//     background: #fdf7f2;
//     border-color: #f59256;
//     border: 1px solid rgba(245, 146, 86, 0.5);
//     border-radius: 40px;
//     padding-left: 18px;
//   }

//   .data-input-active:focus {
//     border: 1px solid rgba(245, 146, 86, 0.5);
//     border-radius: 40px;
//     background: #fdf7f2;
//     border-color: #f59256;
//     outline: none;
//   }

//   .data-edit-info {
//     position: relative;
//     width: 20px;
//     height: 20px;
//     background-color: #fdf7f2;
//     border: none;
//     border-radius: 25px;
//     margin-left: 0;
//     margin-right: 12px;
//   }

//   .edit-btn {
//     position: absolute;
//     top: 0;
//     left: 4px;
//     width: 12px;
//     fill: #f59256;
//   }

//   .edit-btn-react * {
//     position: absolute;
//     top: 0;
//     left: 4px;
//     width: 12px;
//     fill: #111111;
//     opacity: 0.6;
//   }
//   .edit-btn-react {
//     position: absolute;
//     top: 0;
//     left: 4px;
//     width: 12px;
//     fill: #111111;
//     opacity: 0.6;
//   }

//   .button-none {
//     display: none;
//   }

//   .done-button {
//     display: none;
//     position: relative;
//     width: 20px;
//     height: 20px;
//     background-color: #fdf7f2;
//     border: none;
//     border-radius: 25px;
//     margin-left: 13px;
//     margin-right: 12px;
//   }

//   .done-icon {
//     width: 12px;
//     height: 12px;
//     margin-top: 3px;
//     margin-left: -1px;
//   }

//   .log-out-btn {
//     position: relative;
//     width: 89px;
//     font-family: 'Manrope';
//     font-style: normal;
//     font-weight: 500;
//     font-size: 16px;
//     line-height: 22px;
//     letter-spacing: 0.04em;
//     color: rgba(17, 17, 17, 0.6);
//     background: transparent;
//     border: none;
//     margin-top: 44px;
//     margin-left: 191px;
//     margin-bottom: 23px;
//   }

//   .logout-button {
//     width: 18px;
//     position: absolute;
//     top: 3px;
//     left: -15px;
//     opacity: 0.6;
//   }
//   .input-title:nth-last-child() {
//     margin-bottom: 0;
//   }
// }
