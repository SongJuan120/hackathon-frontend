import tw from 'twin.macro';
import { useState } from 'react';
import { Modal, Button } from 'antd';
import ProgressBar from '@ramonak/react-progress-bar';

import { GRaffles } from '../types';
import { leftDateDetail, getRafflePrice, getEndDate } from '../utils/helpers';

import BuyRaffleModal from './Modal/BuyRaffleModal';
import showMark from '../assets/images/icon/show-mark.svg';
import eth from '../assets/images/icon/eth-icon.svg';

const RaffleInfo = (props: {raffle: GRaffles}) => {
  const raffle: GRaffles = props.raffle;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const leftTIme = leftDateDetail(Number(raffle.created), Number(raffle.duration));

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
        <div tw="border-solid border-r py-3 bg-zinc-100">
          <div tw="text-gray-800 text-center text-xs lg:text-base mb-2">Total tickets</div>
          <div tw="text-gray-300 text-center text-xl lg:text-3xl font-semibold">{raffle.totalTickets.toLocaleString()}</div>
        </div>
        <div tw="border-solid border-r py-3">
          <div tw="text-gray-800 text-center text-xs lg:text-base mb-2">Ticket price</div>
          <div tw="flex justify-center items-baseline">
            <img alt="metamask" src={eth} tw="w-[14px] mr-2"/>
            <div tw="text-gray-300 text-center text-xl lg:text-3xl font-semibold">{getRafflePrice(Number(raffle.ticketPrice)).toLocaleString()}</div>
            <div tw="text-gray-800 text-center text-sm ml-2 hidden lg:block">(${price.toLocaleString()})</div>
          </div>
        </div>
        <div tw="py-3">
          <div tw="text-gray-800 text-center text-xs lg:text-base mb-2">Total price</div>
          <div tw="flex justify-center items-baseline">
            <img alt="metamask" src={eth} tw="w-[14px] mr-2"/>
            <div tw="text-gray-300 text-center text-xl lg:text-3xl font-semibold">{getRafflePrice(Number(raffle.totalPrice)).toLocaleString()}</div>
            <div tw="text-gray-800 text-center text-sm ml-2 hidden lg:block">(${price.toLocaleString()})</div>
          </div>
        </div>
      </div>
      <div tw="grid grid-cols-1 bg-zinc-100">
        <div tw="border-solid border-t px-4 pt-6 pb-5">
          <Progress label={'Remaining tickets'} value={Number(raffle.soldTickets)} total={Number(raffle.totalTickets)}></Progress>
        </div>
      </div>
      <div tw="grid grid-cols-1">
        <div tw="border-solid border-t px-5 py-4">
          <div tw="lg:flex items-center justify-between"> 
            <div>
              <div tw="flex items-center justify-center lg:justify-start">
                <img alt="metamask" src={showMark} tw="w-6 h-6 mr-1.5"/>
                <div tw="text-gray-800 text-center text-xs lg:text-base">Raffle ends {getEndDate(Number(raffle.created), Number(raffle.duration))}</div>
              </div>
              <div tw="flex items-baseline mt-2 justify-center lg:justify-start">
                {leftTIme.days !== 0 && (
                  <>
                    <div tw="text-gray-300 text-center text-xl font-semibold lg:pl-7 pr-2">{leftTIme.days}</div>
                    <div tw="text-gray-800 text-center text-xs lg:text-base">Days</div>
                  </>
                )}
                <div tw="text-gray-300 text-center text-xl font-semibold lg:pl-7 pr-2">{leftTIme.hours}</div>
                <div tw="text-gray-800 text-center text-xs lg:text-base">Hours</div>
                <div tw="text-gray-300 text-center text-xl font-semibold lg:pl-7 pr-2">{leftTIme.minutes}</div>
                <div tw="text-gray-800 text-center text-xs lg:text-base">Minutes</div>
                {leftTIme.days === 0 && (
                  <>
                    <div tw="text-gray-300 text-center text-xl font-semibold lg:pl-7 pr-2">{leftTIme.seconde}</div>
                    <div tw="text-gray-800 text-center text-xs lg:text-base">Seconds</div>
                  </>
                )}
              </div>
            </div>
            <div>
              <button onClick={showModal} tw="bg-[#9C40CF] w-full lg:w-auto mt-3 text-white text-base font-semibold px-12 py-2 rounded border border-transparent hover:border-white">
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

export const Progress = (props: {label: string, value: number, total: number})=>{
  return(
    <div>
      <div tw="flex justify-between mb-2">
        <div tw="text-zinc-400 text-xs lg:text-base">{props.label}</div>
        <div tw="text-gray-400 text-xs lg:text-base">{props.value}/{props.total}</div>
      </div>
      <ProgressBar completed={props.value} isLabelVisible={false} height="13px" bgColor="linear-gradient(90deg, #68229D 0%, #A042D2 100%)"  />
    </div>
  )
}




