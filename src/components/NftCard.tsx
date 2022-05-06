import ProgressBar from '@ramonak/react-progress-bar';
import Icon from 'react-crypto-icons';
import tw from 'twin.macro';

import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/lower-bg.jpg';
import { NFTMODEL, NFTProps } from '../model/NFTModel';


const NftCard = (props: NFTProps) => {
  const nft: NFTMODEL = props.nft;

  return (
    <div tw="bg-[#fbfbfb] border border-solid border-zinc-200 rounded-lg">
      <img
        alt="metamask"
        src={img4}
        tw="w-full h-52 rounded-t-lg"
      />
      <div tw="p-4">
        <div tw="grid grid-cols-3 gap-2 mb-4">
            <div>
              <div tw="text-zinc-400 text-xs text-center">Time left</div>
              <div tw="text-gray-400 text-sm text-center">{nft.time}</div>
            </div>
            <NftCoin label={'Time left'} value={nft.eth}></NftCoin>
            <NftCoin label={'Time left'} value={nft.eth}></NftCoin>
        </div>
        <div>
          <Progress label={'Remaining tickets'} value={nft.progress}></Progress>
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
        <div tw="text-gray-400 text-sm text-center">{props.value}</div>
      </div>
      
    </div>
  )
}

export const Progress = (props: {label: string, value: number})=>{
  return(
    <div>
      <div tw="flex justify-between mb-1">
        <div tw="text-zinc-400 text-xs">{props.label}</div>
        <div tw="text-gray-400 text-xs">{props.value}/100</div>
      </div>
      <ProgressBar completed={props.value} isLabelVisible={false} height="4px"/>
    </div>
  )
}
