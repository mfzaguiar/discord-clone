import React from 'react';

import ChannelButton from '../ChannelButton';

import * as S from './styles';

const ChannelList: React.FC = () => {
  return (
    <S.Container>
      <S.Category>
        <span>Canais de texto</span>
        <S.AddCategoryIcon />
      </S.Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="teste" />
      <ChannelButton channelName="pubg" />
      <ChannelButton channelName="first" />
      <ChannelButton channelName="omnistack" />
    </S.Container>
  );
};

export default ChannelList;
