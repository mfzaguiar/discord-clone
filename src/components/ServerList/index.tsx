import React from 'react';

import ServerButton from '../ServerButton';

import * as S from './styles';

const ServerList: React.FC = () => {
  return (
    <S.Container>
      <ServerButton isHome />

      <S.Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={20} />
      <ServerButton />
      <ServerButton mentions={20} />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={2} />
    </S.Container>
  );
};

export default ServerList;
