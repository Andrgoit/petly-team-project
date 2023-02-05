import styled from 'styled-components';
import { NavLink as RRNavLink } from 'react-router-dom';

export const NavLink = styled(RRNavLink)`
  &:not(:last-child) {
    margin-right: 12px;
  }
  font-size: ${p => p.theme.fontSizes.b};
  margin-bottom: 12px;
  padding: 10px 28px;
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  background: ${p => p.theme.colors.backgroundColor.white};
  border: 2px solid ${p => p.theme.colors.home.buttonBorder};
  border-radius: 40px;
  align-items: center;
  white-space: nowrap;
  &:hover {
    background: ${p => p.theme.colors.home.buttonBorder};
    color: ${p => p.theme.colors.white};
  }
  .selected {
    background: ${p => p.theme.colors.home.buttonBorder};
    color: ${p => p.theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 20px;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: baseline;
  font-size: 40px;
`;

export const AuthWrapper = styled.div`
  display: flex;
`;

export const NotAuthWrapper = styled.div``;
