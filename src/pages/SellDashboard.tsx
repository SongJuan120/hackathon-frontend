import tw, { styled } from 'twin.macro';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SellNftCard from '../components/SellNftCard';
import NftCard from '../components/NftCard';
import SellUserInfo from '../components/SellUserInfo';
import SoldCard from '../components/SoldCard';
import { Tabs } from 'antd';
import { rafflesService } from '../services';
import { selectUser } from "../store/auth/auth.selectors";
import { selectAssets } from "../store/assets/assets.selectors";
import { getAllAssets } from '../store/assets/assets.actions';
import { GRaffles, GRaffleSoldHistory } from '../types'

const StyledPage = styled.div`
  ${tw`w-full`}
  height: calc(100vh - 110px);
  background: linear-gradient(180deg, #FBF8FB 100px, #FFFFFF 100px) !important;
`;
const { TabPane } = Tabs;

const SellDashboard = () => {
  const [raffleList, setRaffleList]  = useState<GRaffles[]>([]);
  const [raffleSold, setRaffleSold]  = useState<GRaffleSoldHistory[]>([]);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    dispatch(getAllAssets(user.account));
    getRaffleList();
    getRaffleSold();
  }, [dispatch]);

  const getRaffleList = async() => {
    const raffleListRes = await rafflesService.getRaffleListed(user.account);
    setRaffleList(raffleListRes);
  }

  const getRaffleSold = async() => {
    const rafflesSoldRes = await rafflesService.getRaffleSold(user.account);
    setRaffleSold(rafflesSoldRes);
  }

  const assets = useSelector(selectAssets);
  return (
    <StyledPage>
      <div tw="mx-auto max-w-6xl px-3 pb-32">
        <SellUserInfo></SellUserInfo>
        <div tw="pt-14">
          <Tabs type="line">
            <TabPane tab={`Collected  ${assets?.totalCount}`} key="1">
              {assets.ownedNfts? (
                <div tw="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                  { assets?.ownedNfts.map((item, id)=>{
                    return(<div key={id}>{(item.tokenUri.raw!=="" && item.tokenUri.raw) && <SellNftCard nft={item}></SellNftCard>}</div>)
                  })}
                </div>
              ):(
                <div tw="flex justify-center mt-20 text-[#818181] text-4xl font-semibold">
                  No items to display
                </div>
              )}
            </TabPane>
            <TabPane tab={`Listed  ${raffleList?.length}`}  key="2">
              <div tw="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                {raffleList? raffleList.map((item, id)=>{
                  return(<div key={id} tw="text-gray-300"><NftCard raffle={item}></NftCard></div>)
                }):(
                  <div tw="flex justify-center mt-20 text-[#818181] text-4xl font-semibold">
                    No items to display
                  </div>
                )}
              </div>
            </TabPane>
            <TabPane tab={`Sold  ${raffleSold?.length}`}  key="3">
              <div>
                <SoldCard sold={raffleSold}></SoldCard>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </StyledPage>
  );
};

export default SellDashboard;
