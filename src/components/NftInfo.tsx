import tw from 'twin.macro';

import img1 from '../assets/images/icon/nftSample.svg';
import img2 from '../assets/images/icon/check-mark-blue.svg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/lower-bg.jpg';

const NftInfo = () => {
  return (
    <div tw="flex">
      <img alt="metamask" src={img1} tw="w-14 h-14 rounded-lg"/>
      <div tw="mr-4 ml-5">
        <div tw="flex">
          <div tw="text-2xl font-semibold text-gray-300">Azuki #1162</div>
          <div tw="text-gray-800 ml-3 text-sm border rounded border-zinc-200 py-1 px-4 bg-white">Rank: 4,550/10,000</div>
        </div>
        <div tw="flex">
          <div tw="flex items-center">
            <div tw="text-gray-50 text-sm">Collection:</div>
            <img alt="metamask" src={img2} tw="w-3 h-3 mx-1.5"/>
            <div tw="text-blue-100 pr-1.5 text-sm">Azuki</div>  
          </div>
          <div tw="text-gray-50 px-3">·</div>
          <div tw="flex items-center">
            <div tw="text-gray-50 text-sm">Created by</div>
            <img alt="metamask" src={img2} tw="w-3 h-3 mx-1.5"/>
            <div tw="text-blue-100 pr-1.5 text-sm">TeamAzuki</div>  
          </div>
          <div tw="text-gray-50 px-3">·</div>
          <div tw="flex items-center">
            <div tw="text-gray-50 text-sm">Owned by</div>
            {/* <img alt="metamask" src={img2} tw="w-3 h-3 mx-1.5"/> */}
            <div tw="text-blue-100 pr-1.5 text-sm mx-1.5">LeylaGul</div>  
          </div>
        </div>
      </div>            
    </div>
  );
};
export default NftInfo;
