import tw from 'twin.macro';
import { useState } from 'react';
import { Modal, Button } from 'antd';
import ProgressBar from '@ramonak/react-progress-bar';

import BuyRaffleModal from './Modal/BuyRaffleModal'
import showMark from '../assets/images/icon/show-mark.svg';
import eth from '../assets/images/icon/eth-icon.svg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/lower-bg.jpg';


const RaffleInfo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const price = 10000;
  const total = 100;
  return (
    <div tw="border-solid border border-zinc-300 rounded-lg w-full">   
      <div tw="grid grid-cols-3">
        <div tw="border-solid border-r py-4 bg-zinc-100">
          <div tw="text-gray-800 text-center text-base">Total tickets</div>
          <div tw="text-gray-300 text-center text-3xl font-semibold">{total.toLocaleString()}</div>
        </div>
        <div tw="border-solid border-r py-4">
          <div tw="text-gray-800 text-center text-base">Ticket price</div>
          <div tw="flex justify-center items-baseline">
            <img alt="metamask" src={eth} tw="w-6 h-6"/>
            <div tw="text-gray-300 text-center text-3xl font-semibold">{total.toLocaleString()}</div>
            <div tw="text-gray-800 text-center text-sm ml-2">(${price.toLocaleString()})</div>
          </div>
        </div>
        <div tw="py-4">
          <div tw="text-gray-800 text-center text-base">Ticket price</div>
          <div tw="flex justify-center items-baseline">
            <img alt="metamask" src={eth} tw="w-6 h-6"/>
            <div tw="text-gray-300 text-center text-3xl font-semibold">{total.toLocaleString()}</div>
            <div tw="text-gray-800 text-center text-sm ml-2">(${price.toLocaleString()})</div>
          </div>
        </div>
      </div>
      <div tw="grid grid-cols-1 bg-zinc-100">
        <div tw="border-solid border-t px-4 pt-6 pb-5">
          <Progress label={'Remaining tickets'} value={88}></Progress>
        </div>
      </div>
      <div tw="grid grid-cols-1">
        <div tw="border-solid border-t px-5 py-4">
          <div tw="flex items-center justify-between"> 
            <div>
              <div tw="flex">
                <img alt="metamask" src={showMark} tw="w-6 h-6 mr-1.5"/>
                <div tw="text-gray-800 text-center text-base">Raffle ends April 21, 2022 at 9:00pm CEST</div>
              </div>
              <div tw="flex items-baseline mt-2">
                <div tw="text-gray-300 text-center text-xl font-semibold pl-7 pr-2">23</div>
                <div tw="text-gray-800 text-center text-base">Hours</div>
                <div tw="text-gray-300 text-center text-xl font-semibold pl-9 pr-2">15</div>
                <div tw="text-gray-800 text-center text-base">Minutes</div>
                <div tw="text-gray-300 text-center text-xl font-semibold pl-9 pr-2">22</div>
                <div tw="text-gray-800 text-center text-base">Seconds</div>
              </div>
            </div>
            <div>
              <button onClick={showModal} tw="bg-[#9C40CF] text-white text-base font-semibold px-12 py-2 rounded border border-transparent hover:border-white">
                Buy tickets
              </button>
              <BuyRaffleModal isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel}></BuyRaffleModal>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};
export default RaffleInfo;

export const Progress = (props: {label: string, value: number})=>{
  return(
    <div>
      <div tw="flex justify-between mb-2">
        <div tw="text-zinc-400 text-base">{props.label}</div>
        <div tw="text-gray-400 text-base">{props.value}/100</div>
      </div>
      <ProgressBar completed={props.value} isLabelVisible={false} height="13px" bgColor="linear-gradient(90deg, #68229D 0%, #A042D2 100%)"  />
    </div>
  )
}




