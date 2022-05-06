import tw from 'twin.macro';
import { useState } from 'react';
import { Modal, Button } from 'antd';
import img1 from '../../assets/images/icon/nftSample.svg';
import img2 from '../../assets/images/sample/sample_avatar2.png';
import checkMarkBlue from '../../assets/images/icon/check-mark-blue.svg';
import minuseButton from '../../assets/images/icon/minuse_button.svg'
import plusButton from '../../assets/images/icon/plus_button.svg'
import eth from '../../assets/images/icon/eth-icon.svg';
import BuyConfirmModal from './BuyConfirmModal'
import { Progress } from 'antd';
import { Divider, Select, Input } from 'antd';

const SellRaffleComponentModal = (props: {isModalVisible: boolean, handleOk: ()=>void, handleCancel: ()=>void }) =>{
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);

  const showModal = () => {
    setIsConfirmModalVisible(true);
    // props.handleCancel(); 
  };  

  const handleOk = () => {
    setIsConfirmModalVisible(false);
  };

  const handleCancel = () => {
    setIsConfirmModalVisible(false);
  };

  const price = 10000;
  const total = 30;

  return(
    <Modal visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel} footer={null} width={620}>
      <div tw="text-gray-300 text-2xl font-semibold text-center mb-6">
        Complete raffle lisiting
      </div>
      <div tw="flex justify-between items-center">
        <div tw="flex items-center mt-3 relative">
          <img alt="metamask" src={img2} tw="w-[141px] h-[141px] rounded-[12px] shadow-xl"/> 
          <div tw="mr-4 ml-5">
            <div tw="flex">
              <div tw="flex items-center">
                <div tw="text-gray-50 text-sm font-normal">Collection:</div>
                <div tw="text-blue-100 text-sm ml-1.5">Azuki</div>  
                <img alt="metamask" src={checkMarkBlue} tw="w-3 h-3 mx-1.5"/>
              </div>  
            </div>
            <div tw="text-[22px] font-semibold text-gray-300 mt-1">Azuki #1162</div>
          </div>        
        </div>
        <div tw="text-center">
          <div tw="text-sm text-gray-800">Price</div>
          <div tw="flex items-center justify-center my-1">
            <img alt="metamask" src={eth} tw="w-4 h-4 mr-1"/>
            <div tw="text-gray-300 text-center text-[22px] font-semibold">{total.toLocaleString()}</div>
          </div>
          <div tw="text-gray-800 text-center text-xs">(${price.toLocaleString()})</div>
        </div>
      </div>

      <Divider />

      <div tw="py-1 px-6">
        <div tw="flex justify-between mb-8">
          <div tw="text-gray-300 text-sm font-semibold">Ticket quantity</div>
          <div tw="text-gray-300 text-base font-semibold">x 100</div>
        </div>
        <div tw="flex justify-between  mb-4">
          <div tw="text-gray-300 text-sm font-semibold">Price per ticket</div>
          <div>
            <div tw="flex items-center justify-end">
              <img alt="metamask" src={eth} tw="w-3 h-3 mr-1"/>
              <div tw="text-gray-300 text-center text-base font-semibold">{total.toLocaleString()}</div>
            </div>
            <div tw="text-gray-800 text-right text-xs">(${price.toLocaleString()})</div>
          </div>
        </div>
        <div tw="flex justify-between">
          <div tw="text-gray-300 text-sm font-semibold">Scheduled for</div>
          <div>
            <div tw="text-gray-300 text-base font-semibold text-right">4 days</div>
            <div tw="text-xs text-gray-800 text-right">Apr 25, 2022 10:00AM - Apr 27, 2022 10:00AM</div>
          </div>
        </div>
      </div>
      <div tw="flex border-solid border px-7 rounded-t-lg h-28 mt-6">
        <div tw="flex items-center">
          <Progress tw="mr-7" showInfo={false} type="circle" percent={50} strokeWidth={8} width={50} strokeColor="#9C40CF"/>
          <div>
            <div tw="text-2xl text-gray-300 font-semibold">Approve</div>
            <div tw="text-base text-gray-800">To create this raffle listing, you must approve this item for sale, which requires a one-time gas fee.</div>
          </div>
        </div>
      </div>
      <div tw="flex border-solid border-r border-b border-l h-28 px-7 rounded-b-lg">
        <div tw="flex items-center">
          <Progress tw="mr-7" showInfo={false} type="circle" percent={50} strokeWidth={8} width={50} strokeColor="#9C40CF"/>
          <div>
            <div tw="text-2xl text-gray-300 font-semibold">Listed for sale</div>
            <div tw="text-base text-gray-800">Sign message to finalise this raffle listing.</div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default SellRaffleComponentModal;
  