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

const BuyRaffleModal = (props: {isModalVisible: boolean, handleOk: ()=>void, handleCancel: ()=>void }) =>{
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
  const total = 0.3;

  return(
    <Modal visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel} footer={null} width={620}>
      <div tw="text-gray-300 text-2xl font-semibold text-center">
        Buy raffle tickets
      </div>
      <div tw="flex items-center mt-3 relative">
        <img alt="metamask" src={img2} tw="w-[72px] h-[72px] rounded-[12px]"/>
        <div tw="absolute top-8 left-[60px]"><img alt="metamask" src={img1} tw="w-6 h-6 rounded-full"/></div>
        
        <div tw="mr-4 ml-5">
          <div tw="text-base font-semibold text-gray-300">Azuki #1162</div>
          <div tw="flex">
            <div tw="flex items-center">
              <div tw="text-gray-50 text-sm">Collection:</div>
              <img alt="metamask" src={checkMarkBlue} tw="w-3 h-3 mx-1.5"/>
              <div tw="text-blue-100 pr-1.5 text-sm">Azuki</div>  
            </div>  
            <div tw="text-gray-50 px-3">·</div>
            <div tw="flex items-center">
              <div tw="text-gray-50 text-sm mr-1.5">Owned by:</div>
              <div tw="text-blue-100 pr-1.5 text-sm">LeylaGul</div>  
            </div>
          </div>
        </div>        
      </div>
      <div tw="grid grid-cols-3 mt-8">
        <div>
          <div tw="text-gray-800 text-center text-base mb-1">Ticket price</div>
          <div tw="flex justify-center items-baseline">
            <img alt="metamask" src={eth} tw="w-4 h-4 mr-1"/>
            <div tw="text-gray-300 text-center text-[22px] font-semibold">{total.toLocaleString()}</div>
            <div tw="text-gray-800 text-center text-sm ml-2">(${price.toLocaleString()})</div>
          </div>
        </div>
        <div>
          <div tw="text-gray-800 text-center text-base mb-1">Quantity</div>
          <div tw="flex justify-between items-center px-7">
            <img alt="metamask" src={minuseButton} tw="w-5 h-5 border border-transparent hover:border-white"/>
            <div tw="text-gray-300 text-center text-[22px] font-semibold">2</div>
            <img alt="metamask" src={plusButton} tw="w-5 h-5 border border-transparent hover:border-white"/>
          </div>
        </div>
        
        <div>
          <div tw="text-gray-800 text-center text-base mb-1">Total</div>
          <div tw="flex justify-center items-baseline">
            <img alt="metamask" src={eth} tw="w-4 h-4 mr-1"/>
            <div tw="text-gray-300 text-center text-[22px] font-semibold">{total.toLocaleString()}</div>
            <div tw="text-gray-800 text-center text-sm ml-2">(${price.toLocaleString()})</div>
          </div>
        </div>
      </div>
      <div tw="flex justify-center mt-10">
        <button onClick={showModal} tw="text-white bg-[#9C40CF] text-base font-semibold px-12 py-2 rounded border border-transparent hover:border-white">
          Buy tickets
        </button>
        <BuyConfirmModal isConfirmModalVisible={isConfirmModalVisible} handleOk={handleOk} handleCancel={handleCancel}></BuyConfirmModal>
      </div>
      
    </Modal>
  )
}

export default BuyRaffleModal;
  