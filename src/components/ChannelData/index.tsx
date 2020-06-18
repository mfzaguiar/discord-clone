import React, { useRef, useEffect } from 'react';

import ChanelMessage, { Mention } from '../ChannelMessage';

import * as S from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <S.Container>
      <S.Messages ref={messagesRef}>
        <ChanelMessage
          key="1"
          author="Matheus Aguiar"
          date="10/07/2020"
          content="Fala galera"
        />
        <ChanelMessage
          isBot
          key="2"
          author="Matheus Aguiar"
          date="10/07/2020"
          hasMention
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
        <ChanelMessage
          key="3"
          author="Matheus Aguiar"
          date="10/07/2020"
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
        <ChanelMessage
          key="4"
          author="Matheus Aguiar"
          date="10/07/2020"
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
        <ChanelMessage
          key="4"
          author="Matheus Aguiar"
          date="10/07/2020"
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
        <ChanelMessage
          key="4"
          author="Matheus Aguiar"
          date="10/07/2020"
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
        <ChanelMessage
          key="4"
          author="Matheus Aguiar"
          date="10/07/2020"
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
        <ChanelMessage
          key="4"
          author="Matheus Aguiar"
          date="10/07/2020"
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
        <ChanelMessage
          key="4"
          author="Matheus Aguiar"
          date="10/07/2020"
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
        <ChanelMessage
          key="4"
          author="Matheus Aguiar"
          date="10/07/2020"
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
        <ChanelMessage
          key="4"
          author="Matheus Aguiar"
          date="10/07/2020"
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
        <ChanelMessage
          key="4"
          author="Matheus Aguiar"
          date="10/07/2020"
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
        <ChanelMessage
          key="4"
          author="Matheus Aguiar"
          date="10/07/2020"
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
        <ChanelMessage
          key="4"
          author="Matheus Aguiar"
          date="10/07/2020"
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
        <ChanelMessage
          key="4"
          author="Matheus Aguiar"
          date="10/07/2020"
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
        <ChanelMessage
          key="4"
          author="Matheus Aguiar"
          date="10/07/2020"
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
        <ChanelMessage
          key="4"
          author="Matheus Aguiar"
          date="10/07/2020"
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
        <ChanelMessage
          key="4"
          author="Matheus Aguiar"
          date="10/07/2020"
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
        <ChanelMessage
          key="4"
          author="Matheus Aguiar"
          date="10/07/2020"
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
        <ChanelMessage
          key="4"
          author="Matheus Aguiar"
          date="10/07/2020"
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
        <ChanelMessage
          key="4"
          author="Matheus Aguiar"
          date="10/07/2020"
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
        <ChanelMessage
          isBot
          key="2"
          author="Matheus Aguiar"
          date="10/07/2020"
          hasMention
          content={
            <>
              <Mention>@Mateus Aguiar</Mention>, testando whisper from discord.
            </>
          }
        />
      </S.Messages>

      <S.InputWrapper>
        <S.Input type="text" placeholder="Conversar em #chat-livre" />
        <S.InputIcon />
      </S.InputWrapper>
    </S.Container>
  );
};

export default ChannelData;
