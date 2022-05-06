import tw, { styled } from 'twin.macro';

import Banner from '../components/Banner';


const StyledPage = styled.div`
  ${tw`w-full bg-[#ffffff] pt-44`}
  height: calc(100vh - 110px)
`;

const Home = () => {
  return (
    <StyledPage>
      <Banner />
    </StyledPage>
  );
};

export default Home;
