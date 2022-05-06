import tw, { styled } from 'twin.macro';

import DetailImage from '../components/DetailImage';
import NftInfo from '../components/NftInfo';
import RaffleInfo from '../components/RaffleInfo';
import NftHistoryInfo from '../components/NftHistoryInfo';
import NftDetailInfo from '../components/NftDetailInfo';

const StyledPage = styled.div`
  ${tw`w-full`}
  height: calc(100vh - 110px);
  background: linear-gradient(180deg, #FBF8FB 105px, #FFFFFF 105px) !important;
`;

const DetailRaffles = () => {
  const status = {
    views:  1280,
    likes: 243
  }
  return (
    <StyledPage>
      <div tw="mx-auto max-w-6xl pt-4 px-3 pb-32">
        <div tw="grid grid-cols-5 gap-8">
          <div tw="col-start-1 col-span-2 text-gray-300">
            <DetailImage detailStatus={status}></DetailImage>
            <div tw="mt-6">
              <NftDetailInfo></NftDetailInfo>
            </div>
          </div>
          <div tw="col-start-3 col-end-6 text-gray-300">
            <NftInfo></NftInfo>
            <div tw="mt-16">
              <RaffleInfo></RaffleInfo>
            </div>
            <div tw="mt-7">
              <NftHistoryInfo></NftHistoryInfo>
            </div>
          </div>
        </div>
      </div>
    </StyledPage>
  );
};

export default DetailRaffles;
