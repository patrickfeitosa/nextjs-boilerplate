import * as S from './styled';

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS and Styled Components',
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo - React Avançado escrito ao lado."
    />
    <S.Title>
      {title}
    </S.Title>
    <S.Description>
      {description}
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
);

export default Main;
