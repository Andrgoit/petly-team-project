import styled from 'styled-components';
import { Field } from 'formik';

export const MsgError = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${p => p.theme.colors.news.readMoreFocus};
  margin-bottom: 20px;
`;
export const Label = styled.label`
  display: block;
  font-size: ${p => p.theme.fontSizes.d};
  font-weight: 500;
  line-height: 1.44;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.f};
    line-height: 1.1;
    margin-bottom: 12px;
  }
`;
export const Input = styled(Field)`
  width: 100%;
  height: 40px;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  outline: none;
  padding: 11px 14px 12px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    height: 48px;
    font-size: 16px;
    line-height: 1.63;
    padding: 11px 16px 10px;
    margin-bottom: 28px;
  }
  &::placeholder {
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: 0.04em;
    color: rgba(27, 27, 27, 0.6);
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.62;
    }
  }
  &:focus {
    color: ${p => p.theme.colors.news.readMoreFocus}
  }
`;
export const ButtonNext = styled.button`
  width: 100%;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.38;
  letter-spacing: ${p => p.theme.letterSpacing.b};
  background-color: #f59256;
  color: #ffffff;
  border: 2px solid ${p => p.theme.colors.profile.pencilActive};
  border-radius: 40px;
  cursor: pointer;
  padding-top: 9px;
  padding-bottom: 9px;
  @media screen and (min-width: 768px) {
    width: 180px;
    font-size: 20px;
    line-height: 1.35;
  }
`;
export const ButtonDone = styled(ButtonNext)``;
export const TextModal = styled.p`
  font-size: ${p => p.theme.fontSizes.c};
  font-weight: 500;
  letter-spacing: ${p => p.theme.letterSpacing.a};
  line-height: 1.38;
  text-align: center;
  color: ${p => p.theme.colors.profile.title};
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.32;
  }
`;

export const LabelPhoto = styled.div`
  position: relative;
  margin: 0 auto 20px;
`;
export const ImgPhoto = styled.img`
  width: 208px;
  height: 208px;
  margin: auto;
  border-radius: 20px;
`;
export const BtnPhoto = styled.button`
  width: 208px;
  height: 208px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: var(--color-main);

  background: var(--bg);
  border-radius: 20px;
  background: #fdf7f2;
  border: none;
  cursor: pointer;
`;
export const Textarea = styled(Field)`
  width: 100%;
  max-width: 100%;
  height: 100px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  padding: 12px 14px;
  outline: none;
  resize: none;
  @media screen and (min-width: 768px) {
    height: 116px;
    padding: 16px;
  }
  &::placeholder {
    font-size: 14px;
    line-height: 1.85;
    letter-spacing: 0.04em;
    color: rgba(27, 27, 27, 0.6);
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.62;
    }
  }
  &:focus {
    color: ${p => p.theme.colors.news.readMoreFocus}
  }
`;
export const CentredTextarea = styled.div`
  width: 100%;
  margin: 0 auto 20px;

  @media screen and (min-width: 768px) {
    width: 394px;
    margin: 0 auto 40px;
  }
`;
export const InputFile = styled.input`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &::-webkit-file-upload-button {
    cursor: pointer;
  }
`;

export const ButtonCancel = styled.button`
  width: 100%;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: ${p => p.theme.letterSpacing.b};
  color: ${p => p.theme.colors.profile.text};
  background-color: #ffffff;
  border: 2px solid ${p => p.theme.colors.profile.pencilActive};
  border-radius: 40px;
  cursor: pointer;
  padding-top: 9px;
  padding-bottom: 9px;
  margin-top: 12px;

  @media screen and (min-width: 768px) {
    width: 180px;
    font-size: 20px;
    line-height: 1.35;
    margin-top: 0;
    &:first-child {
      margin-right: 20px;
    }
  }
`;
export const ButtonBack = styled(ButtonCancel)``;
export const ButtonGroup = styled.div`
  display: flex;
  margin-top: 12px;
  justify-content: space-around;
  flex-direction: column-reverse;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 12px;
  }
`;
