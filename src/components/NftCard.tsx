import ProgressBar from '@ramonak/react-progress-bar';
import tw from 'twin.macro';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { assetsService } from '../services';
import { GRaffles, GOwnedNft } from '../types';
import { leftDate, getRafflePrice } from '../utils/helpers';
import { getRafflesById } from '../store/raffles/raffles.actions';
import { selectNftByTokenId } from "../store/raffles/raffles.selectors";

import img4 from '../assets/images/lower-bg.jpg';


const NftCard = (props: {raffle: GRaffles}) => {
  const raffle: GRaffles = props.raffle;
  const [nftInfo, setNftInfo] = useState<any>();
  
  useEffect(() => {
    getNftInfo();
  }, []);

  // const nft = useSelector(selectNftByTokenId);
  const getNftInfo = async() => {
    const nft = await assetsService.getAssetById(raffle.nftAddress, Number(raffle.tokenId));
    setNftInfo(nft);
  }
  
  const leftTime = leftDate(Number(raffle.created), Number(raffle.duration));

  const goRaffleDetail = () => {
    window.location.href = `/buy/raffles/${raffle.raffleId}`;
  }
  
  return (
    <div tw="bg-[#fbfbfb] border border-solid border-zinc-200 rounded-lg cursor-pointer" onClick={goRaffleDetail}>
      {nftInfo?.metadata?.image?(
        <img
          alt="metamask"
          src={nftInfo?.metadata?.image}
          tw="w-full h-52 rounded-t-lg"
        />
      ):(
        <div tw="w-full h-52 rounded-t-lg bg-zinc-300 animate-pulse"></div>  
      )}
      <div tw="p-2">
        <div tw="grid grid-cols-3 gap-2 mb-4">
            <div>
              <div tw="text-zinc-400 text-xs text-center">Time left</div>
              <div tw="text-gray-400 text-sm text-center font-semibold">{leftTime}</div>
            </div>
            <NftCoin label={'Ticket price'} value={getRafflePrice(Number(raffle.ticketPrice))}></NftCoin>
            <NftCoin label={'Total price'} value={getRafflePrice(Number(raffle.totalPrice))}></NftCoin>
        </div>
        <div>
          <Progress label={'Remaining tickets'} value={Number(raffle.soldTickets)} total={Number(raffle.totalTickets)}></Progress>
        </div>
      </div>
    </div>
  );
};
export default NftCard;

export const NftCoin = (props: {label: string, value: number})=>{
  return(
    <div>
      <div tw="text-zinc-400 text-xs text-center">{props.label}</div>
      <div>
        {/* <FontAwesomeIcon icon={['fab', 'ethereum']} size={'xs'} /> */}
        {/* <Icon name="btc" size={25} /> */}
        <div tw="text-gray-400 text-sm text-center font-semibold">{props.value}</div>
      </div>
      
    </div>
  )
}

export const Progress = (props: {label: string, value: number, total:number})=>{
  return(
    <div>
      <div tw="flex justify-between mb-1">
        <div tw="text-zinc-400 text-xs">{props.label}</div>
        <div tw="text-gray-400 text-xs">{props.value}/{props.total}</div>
      </div>
      <ProgressBar completed={props.value} isLabelVisible={false} height="4px"/>
    </div>
  )
}
