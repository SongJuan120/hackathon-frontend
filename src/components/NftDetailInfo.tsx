import tw from 'twin.macro';

import { GNftData, GOwnedNft } from '../types';
import { addressFormat } from '../utils/helpers';

const NftDetailInfo = (props:{nft: GOwnedNft}) => {
  const nft: GOwnedNft = props.nft;

  return (
    <div>
      <div tw="text-gray-800 text-xs font-bold mb-3">Attributes:</div>     
      <div tw="grid grid-cols-2 gap-2">
        {nft?.metadata?.attributes.map((item,index)=>{
          return(
            <div key={index}>
              <ItemInfo label={item.value} value={item.trait_type} percent={5}></ItemInfo>
            </div>
          )
        })}
      </div>
      <div tw="text-gray-800 text-xs font-bold mt-8 mb-3">About {nft?.title}:</div>    
      <div tw="text-xs text-gray-800 font-normal">
        {nft?.description}
      </div> 
      <div tw="flex justify-between mt-8">
        <div tw="text-gray-800 text-xs font-bold">Contract Address:</div>   
        <div tw="text-blue-100 text-xs">{addressFormat(nft?.contract?.address)}</div>
      </div>
      <div tw="flex justify-between mt-5">
        <div tw="text-gray-800 text-xs font-bold">Token ID</div>   
        <div tw="text-blue-100 text-xs">{nft?.id?.tokenId}</div>
      </div>
      <div tw="flex justify-between mt-5">
        <div tw="text-gray-800 text-xs font-bold">Token Standard</div>   
        <div tw="text-gray-800 text-xs">{nft?.id?.tokenMetadata?.tokenType}</div>
      </div>
      <div tw="flex justify-between mt-5">
        <div tw="text-gray-800 text-xs font-bold">Blockchain</div>   
        <div tw="text-gray-800 text-xs">Ethereum</div>
      </div>
    </div>
  );
};
export default NftDetailInfo;


export const ItemInfo = (props: {label: string, value: string, percent: number})=>{
  return(
    <div tw="bg-[#FBF8FB] px-3 py-2 rounded">
      <div tw="text-gray-50 text-xs mb-1">{props.label}</div>
      <div tw="flex justify-between">
        <div tw="text-gray-800 text-sm truncate">{props.value}</div>
        <div tw="text-gray-800 text-xs pl-3">{props.percent}%</div>
      </div>
    </div>
  )
}
