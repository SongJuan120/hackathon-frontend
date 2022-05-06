import tw from 'twin.macro';
import { useState } from 'react';
import { useMessageForSignature } from '../../hooks';

import { Modal, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { showNotification } from '../../utils/helpers';
import { selectUser } from "../../store/auth/auth.selectors";
import { Divider, Select, Input } from 'antd';
import { blockchain } from '../../blockchain';

import ethIcon from '../../assets/images/icon/eth-small.png';
import ethPinkIcon from '../../assets/images/icon/eth-pink.png'

const SettingModal = (props: {isModalVisible: boolean, handleOk: ()=>void, handleCancel: ()=>void }) =>{
  
  const { Option } = Select;

  const { disconnectWallet } = useMessageForSignature();

  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);

  const user = useSelector(selectUser);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  }

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

  const goProfileDashboard = () => {
    window.location.href = '/profile/dashboard';
  }
  
  const goProfileEdit = () => {
    window.location.href = '/profile/edit';
  }

  const onDisconnet = async() => {
    showNotification('Wallet Disconnected.');
    localStorage.clear();
    window.location.href = '/wallet';
    // disconnectWallet();
    // disconnectWallet();
    // showNotification('Wallet Disconnected.');
    // localStorage.clear();
  }
  const ethValue = 1069.08;

  return(
    <Modal tw="top-5 mr-5" visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel} footer={null} width={376}>
      <div tw="flex justify-between items-center mt-6">
        <div onClick={goProfileDashboard} tw="flex items-center cursor-pointer">
          <img alt="metamask" src={user.avatar} tw="w-11 h-11 rounded-full border-4 border-white"/>
          <div>
            <div tw="flex items-center pl-2">
              <div tw="text-base font-semibold text-gray-100">{user.name}</div>
              <div tw="text-white text-xs bg-violet-200 py-0.5 px-2 ml-3 rounded-full" style={{height: 'fit-content'}}>LEVEL 8</div>
            </div>
            <div tw="flex items-center pl-2"> 
              <div tw="text-gray-500 text-xs">View profile</div> 
            </div>
          </div>
        </div>
        <div tw="flex justify-center items-center">
          <button onClick={goProfileEdit} tw="bg-white text-violet-200 font-semibold text-[13px] mx-1 py-1 px-4 rounded border border-solid border-violet-200">
            Edit
          </button>
        </div>
      </div>
      <div tw="flex justify-between mt-7">
        <div tw="text-sm font-semibold text-[#1D1D1D]">
          Connected
        </div>
        <div tw="text-sm font-semibold text-gray-500">
          Manage wallets
        </div>
      </div>
      <Select defaultValue="lucy" tw="w-full mt-2 rounded-lg" onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <div tw="flex justify-between items-center mt-8">
        <div tw="flex items-center">
          <img alt="ethIcon" src={ethIcon} tw="w-6 rounded-full border-4 border-white"/>
          <div tw="ml-3">
            <div tw="text-sm text-gray-100 font-semibold">ETH</div>
            <div tw="text-xs text-gray-500">Ether</div>
          </div>
        </div> 
        <div tw="ml-3">
          <div tw="text-sm text-gray-300 font-semibold text-right">0.3748</div>
          <div tw="text-xs text-gray-500 text-right">${ethValue.toLocaleString()}</div>
        </div>
      </div>
      <div tw="flex justify-between items-center mt-6">
        <div tw="flex items-center">
          <img alt="ethIcon" src={ethPinkIcon} tw="w-6 rounded-full border-4 border-white"/>
          <div tw="ml-3">
            <div tw="text-sm text-gray-100 font-semibold">wETH</div>
            <div tw="text-xs text-gray-500">Wrapped Ether</div>
          </div>
        </div> 
        <button tw="bg-white text-violet-200 font-semibold text-[13px] py-1 px-3 rounded border border-solid border-violet-200">
          Convert
        </button> 
      </div>
      <div tw="mt-10">
        <button onClick={showModal} tw="text-white w-full bg-[#9C40CF] text-[13px] font-semibold px-12 py-2 rounded border border-transparent hover:border-white">
          Add funds
        </button>
        <button onClick={onDisconnet} tw="w-full bg-white text-violet-200 font-semibold text-[13px] py-2 px-5 rounded border border-solid border-violet-200 mt-3">
          Disconnect
        </button> 
      </div>
    </Modal>
  )
}

export default SettingModal;
  