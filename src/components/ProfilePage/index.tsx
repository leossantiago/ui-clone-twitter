import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Leonardo Santiago</h1>
        <h2>@leo_santiago</h2>

        <p>Desenvolvedor em aperfeiçoamento.</p>

        <ul>
          <li>
            <LocationIcon />
            Teresina, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em dd de outubro de yyyy
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong> 94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
