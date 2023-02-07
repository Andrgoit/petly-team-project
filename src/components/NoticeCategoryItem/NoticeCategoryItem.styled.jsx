import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 280px;
  position: relative;
  background: ${props => props.theme.colors.white};

  border-radius: 0px 0px 20px 20px;

  @media screen and (min-width: 768px) {
    width: 336px;

    border-radius: 0px 0px 40px 40px;
  }
  @media screen and (min-width: 1300px) {
    width: 288px;
  }
`;

export const LearnMoreBtn = styled.button`
  color: rgba(245, 146, 86, 1);
  background: ${props => props.theme.colors.white};
  border: 2px solid rgba(245, 146, 86, 1);
  border-radius: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  text-align: center;
  display: block;
  padding: 8px;
  width: 100%;
  margin-bottom: 12px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 97, 1, 1);
    color: ${props => props.theme.colors.white};
  }
`;

export const DeleteBtn = styled.button`
  border: 2px solid rgba(245, 146, 86, 1);
  color: rgba(245, 146, 86, 1);
  background: ${props => props.theme.colors.white};
  border-radius: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background: rgba(255, 97, 1, 1);
    color: ${props => props.theme.colors.white};
  }
`;
export const Container = styled.div`
  padding: 20px;
`;

export const Wrapper = styled.div`
  padding: 20px, 20px, 12px, 20px;
  margin-bottom: 50px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: #111111;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  &:not(last-child) {
    margin-bottom: 8px;
  }
`;

export const CategoryTitle = styled.span`
  position: absolute;
  left: 0;
  top: 20px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  width: 150px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  display: block;
  text-align: center;
  padding-top: 6px;
  padding-bottom: 6px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const AddToFavoriteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  backdrop-filter: blur(2px);
  background-color: hsla(0, 0%, 100%, 0.6);
  border: none;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
  border-radius: 50%;
  color: white;
  &.active,
  :hover {
    background: rgba(245, 146, 86, 1);
  }
  &:hover > svg {
    background: rgba(245, 146, 86, 1);
    fill: ${props => props.theme.colors.white};
  }
`;
export const Span = styled.span`
  display: inline-block;
  margin-right: 37px;
  width: 50px;
`;
export const AddIcon = styled(AiOutlineHeart)`
  width: 28px;
  height: 28px;
  color: rgba(245, 146, 86, 1);
`;

export const FavoriteIcon = styled(AiFillHeart)`
  width: 28px;
  height: 28px;
  color: rgba(245, 146, 86, 1);
`;

export const Image = styled.img`
  height: 288px;
`;

export const DelIcon = styled(RiDeleteBin5Fill)`
  color: rgba(245, 146, 86, 1);
  width: 24px;
`;
