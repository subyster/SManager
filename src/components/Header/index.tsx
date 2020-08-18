import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiUser,
  FiEdit,
  FiLogOut,
} from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { Container, Menu, ProfileMenu, Social, HeaderContent } from './styles';

interface HeaderProps {
  isHome?: boolean;
  isSignIn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHome, isSignIn, children }) => {
  const { signOut, user } = useAuth();

  const [displayProfileMenu, setDisplayProfileMenu] = useState(false);

  const handleToggleProfileMenu = useCallback(() => {
    setDisplayProfileMenu(!displayProfileMenu);
  }, [displayProfileMenu]);

  return (
    <Container>
      <HeaderContent>
        <Link to="/">
          <h1>Ju.foryou</h1>
        </Link>

        <Menu>
          {!isHome && <Link to="/">Home</Link>}
          {!user && !isSignIn && <Link to="/signin">Login</Link>}
          {user && (
            <button onClick={handleToggleProfileMenu} type="button">
              Perfil
            </button>
          )}
          {displayProfileMenu && (
            <ProfileMenu onBlur={() => setDisplayProfileMenu(false)}>
              <Link to="/dashboard">
                <FiUser size={24} />
                Meu Perfil
              </Link>
              <Link to="/profile">
                <FiEdit size={24} />
                Editar Perfil
              </Link>
              <button onClick={signOut} type="button">
                <FiLogOut size={24} />
                Sair
              </button>
            </ProfileMenu>
          )}

          <Social>
            <a href="/">
              <FiFacebook />
            </a>
            <a href="/">
              <FiInstagram />
            </a>
            <a href="/">
              <FiMail />
            </a>
          </Social>
        </Menu>
      </HeaderContent>
      {children}
    </Container>
  );
};

export default Header;
