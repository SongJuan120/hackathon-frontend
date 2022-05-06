import tw from 'twin.macro';

import img1 from '../assets/images/icon/nftSample.svg';
import img2 from '../assets/images/icon/check-mark-blue.svg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/lower-bg.jpg';

const NftDetailInfo = () => {
  const temp = [{
    id: 1,
    label: 'Background',
    value: 'Cool Gray',
    percent: 5,
  },{
    id: 2,
    label: 'Clothing',
    value: 'Archer',
    percent: 66,
  },{
    id: 3,
    label: 'Eyes',
    value: 'Striking',
    percent: 45,
  },{
    id: 4,
    label: 'Face',
    value: 'Clear Glasses',
    percent: 80,
  },{
    id: 5,
    label: 'Hair',
    value: 'Blue Nightsha Blue Nightsha',
    percent: 45,
  },{
    id: 6,
    label: 'Mouth',
    value: 'Chewing',
    percent: 80,
  }];
  return (
    <div>
      <div tw="text-gray-800 text-xs font-bold mb-3">Attributes:</div>     
      <div tw="grid grid-cols-2 gap-2">
        {temp.map(item=>{
          return(
            <div key={item.id}>
              <ItemInfo label={item.label} value={item.value} percent={item.percent}></ItemInfo>
            </div>
          )
        })}
      </div>
      <div tw="text-gray-800 text-xs font-bold mt-8 mb-3">About Azuki:</div>    
      <div tw="text-xs text-gray-800 font-normal">
        Take the red bean to join the garden. View the collection at azuki.com/gallery.
        <br></br>
        <br></br>
        Azuki starts with a collection of 10,000 avatars that give you membership access to The Garden: a corner of the internet where artists, builders, and web3 enthusiasts meet to create a decentralized future. Azuki holders receive access to exclusive drops, experiences, and more. Visit azuki.com for more details.
        We rise together. We build together. We grow together.
      </div> 
      <div tw="flex justify-between mt-8">
        <div tw="text-gray-800 text-xs font-bold">Contract Address:</div>   
        <div tw="text-blue-100 text-xs">0x2847...6f0f</div>
      </div>
      <div tw="flex justify-between mt-5">
        <div tw="text-gray-800 text-xs font-bold">Token ID</div>   
        <div tw="text-blue-100 text-xs">4035</div>
      </div>
      <div tw="flex justify-between mt-5">
        <div tw="text-gray-800 text-xs font-bold">Token Standard</div>   
        <div tw="text-gray-800 text-xs">ERC - 721</div>
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
