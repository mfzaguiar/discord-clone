import React from 'react';

import UserRow from '../UserRow';

import * as S from './styles';

const UserList: React.FC = () => {
  return (
    <S.Container>
      <S.Role>Disponivel - 1</S.Role>
      <UserRow nickname="Matheus Aguiar" />

      <S.Role>Offline - 20</S.Role>
      <UserRow nickname="John Doe" />
      <UserRow nickname="Smith Wilson" isBot />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
    </S.Container>
  );
};

export default UserList;
