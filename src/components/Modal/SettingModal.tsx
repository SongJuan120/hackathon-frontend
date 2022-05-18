import tw from 'twin.macro';
import { useEffect, useState } from 'react';

import { Modal, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { showNotification, getRafflePrice, addressFormat, getPrice } from '../../utils/helpers';
import { selectUser } from "../../store/auth/auth.selectors";
import { Divider, Select, Input } from 'antd';

import ethIcon from '../../assets/images/icon/eth-small.png';
import imgMetaMask from '../../assets/images/icon/metamask.png';
import imgCoinBase from '../../assets/images/icon/coinbase.png';
import imgWallet from '../../assets/images/icon/walletconnet.png';
import checkPink from '../../assets/images/icon/check-pink.svg';
import { useNetworkConnector } from '../../hooks/useNetworkConnector';
import { getNetworkLibrary } from '../../utils';
import BigNumber from 'bignumber.js';
import { getEthPrice } from '../../store/ethPrice/ethPrice.actions';
import { selectEthPrice } from '../../store/ethPrice/ethPrice.selectors';

const SettingModal = (props: {isModalVisible: boolean, handleOk: ()=>void, handleCancel: ()=>void }) =>{
  const dispatch = useDispatch();
  const { Option } = Select;

  const [selectWallet, setSelectWallet] = useState<string>("metamask");
  const [balance, setBalance] = useState(0);
  const network = useNetworkConnector();
  const networkLibrary = getNetworkLibrary(network);
  const user = useSelector(selectUser);
  const price = useSelector(selectEthPrice);
 console.log('this is   const price = useSelector(selectEthPrice);', price, balance)
  useEffect(() => {
    networkLibrary.getBalance(user.account).then(res => setBalance(new BigNumber(res.toString()).shiftedBy(-18).toNumber()));
    dispatch(getEthPrice());
  }, [user])

  const handleChange = (value: string) => {
    setSelectWallet(value)
  }

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
        <div tw="flex items-center cursor-pointer">
          <img alt="metamask" src={user.avatar} tw="w-11 h-11 rounded-full border-4 border-white"/>
          <div>
            <div tw="flex items-center pl-2" style={{width: "200px"}}>
              <div tw="text-base font-semibold text-gray-100" style={{textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden"}}>{user.name}</div>
            </div>
            <div tw="flex items-center pl-2"> 
              <div tw="text-gray-500 text-xs">View profile</div> 
              <div tw="text-white text-xs bg-violet-200 py-0.5 px-3 ml-2 rounded-full" style={{width: 'fit-content'}}>LEVEL 8</div>
            </div>
          </div>
        </div>
      </div>
      <div tw="grid grid-cols-2 gap-2 mt-5 mb-5">
        <button onClick={goProfileDashboard} tw="text-white w-full bg-[#9C40CF] text-[13px] font-semibold px-12 py-1 rounded border border-transparent hover:border-white">
          Profile
        </button> 
        <button onClick={goProfileEdit} tw="bg-white text-violet-200 font-semibold text-[13px] py-1 px-4 rounded border border-solid border-violet-200">
          Edit
        </button>
      </div>
      <hr></hr>
      <div tw="flex justify-between mt-5">
        <div tw="text-sm font-semibold text-[#1D1D1D]">
          Change Wallet
        </div>
        {/* <div tw="text-sm font-semibold text-gray-500">
          Manage wallets
        </div> */}
      </div>
      <Select defaultValue="metamask" className="walletSelect" tw="w-full mt-2 rounded-lg h-[74px]" onChange={handleChange}>
        <Option value="metamask">
          <div tw="h-[74px] flex justify-between">
            <div tw="flex items-center">
              <img alt="metamask" src={imgMetaMask} tw="w-[32px]"/>
              <div tw="ml-5">
                <a tw="text-sm font-semibold text-gray-100" target="_blank" href={`https://rinkeby.etherscan.io/address/${user.account}`}>{addressFormat(user.account)}</a>  
                <div tw="text-xs font-medium text-gray-500">Ethereum - ($ {(balance*price).toFixed(2)})</div>
              </div>
            </div>
            {selectWallet == "metamask" && (<img alt="metamask" src={checkPink} tw="w-[32px]"/>)}
          </div>
        </Option>
        <Option value="coinbase">
          <div tw="h-[74px] flex justify-between">
            <div tw="flex items-center">
              <img alt="coinbase" src={imgWallet} tw="w-[32px]"/>
              <div tw="ml-5">
                <div tw="text-sm font-semibold text-gray-100">0x25F5c3...94AF</div>
                <div tw="text-xs font-medium text-gray-500">Ethereum - $1,069.08</div>
              </div>
            </div>
            {selectWallet == "coinbase" && (<img alt="coinbase" src={checkPink} tw="w-[32px]"/>)}
          </div>
        </Option>
        <Option value="walletconnet">
          <div tw="h-[74px] flex justify-between">
            <div tw="flex items-center">
              <img alt="walletconnet" src={imgCoinBase} tw="w-[32px]"/>
              <div tw="ml-5">
                <div tw="text-sm font-semibold text-gray-100">0x25F5c3...94AF</div>
                <div tw="text-xs font-medium text-gray-500">Ethereum - $1,069.08</div>
              </div>
            </div>
            {selectWallet == "walletconnet" && (<img alt="walletconnet" src={checkPink} tw="w-[32px]"/>)}
          </div>
        </Option>
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
          <div tw="text-sm text-gray-300 font-semibold text-right">{balance.toFixed(5)}</div>
          <div tw="text-xs text-gray-500 text-right">$ {(balance*price).toFixed(2)}</div>
        </div>
      </div>
      {/* <div tw="flex justify-between items-center mt-6">
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
      </div> */}
      <div tw="mt-4">
        {/* <button onClick={showModal} tw="text-white w-full bg-[#9C40CF] text-[13px] font-semibold px-12 py-2 rounded border border-transparent hover:border-white">
          Add funds
        </button> */}
        <button onClick={onDisconnet} tw="w-full bg-white text-violet-200 font-semibold text-[13px] py-2 px-5 rounded border border-solid border-violet-200 mt-3">
          Disconnect
        </button> 
      </div>
    </Modal>
  )
}

export default SettingModal;
  