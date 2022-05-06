import tw from 'twin.macro';
import { useState } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { Divider, Select, Input } from 'antd';

import eth from '../assets/images/icon/eth-icon.svg';
import ethSmall from '../assets/images/icon/eth-small.png';
import tooltip from '../assets/images/icon/tooltip.png';
import SellRaffleComponentModal from './Modal/SellRaffleComponentModal'
import raffle from '../assets/images/icon/raffle.png';
import dollar from '../assets/images/icon/dollar.png';
import hummer from '../assets/images/icon/hummer.png';

const SellRaffleInfo = () => {
  const { Option } = Select;
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }

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
    <div>
      <div tw="font-semibold text-2xl text-gray-300">List item for sale</div>
      <div tw="flex justify-between items-center mb-1 mt-5">
        <div tw="font-semibold text-base">Type</div>
        <img alt="metamask" src={tooltip} tw="w-4 h-4"/>
      </div>
      <div tw="border-solid border border-zinc-300 rounded-lg w-full">   
        <div tw="grid grid-cols-3">
          <div tw="border-solid border-r pt-4 pb-3 bg-zinc-100">
            <div tw="flex justify-center mb-2">
              <img alt="metamask" src={raffle} tw="w-7 h-7"/>
            </div>
            <div tw="flex justify-center">
              <div tw="text-gray-800 text-center text-base">Raffle</div>
            </div>
          </div>
          <div tw="border-solid border-r py-4">
            <div tw="flex justify-center mb-2">
              <img alt="metamask" src={dollar} tw="w-4"/>
            </div>
            <div tw="flex justify-center">
              <div tw="text-gray-800 text-center text-base">Fixed price</div>
            </div>
          </div>
          <div tw="py-4">
            <div tw="flex justify-center mb-2">
              <img alt="metamask" src={hummer} tw="w-8"/>
            </div>
            <div tw="flex justify-center">
              <div tw="text-gray-800 text-center text-base">Auction</div>
            </div>
          </div>
        </div>
      </div>

      <div tw="flex justify-between items-center mb-1 mt-10">
        <div tw="font-semibold text-base">Price</div>
        <div tw="text-xs text-gray-900">$90,100 total</div>
      </div>

      <div tw="flex justify-between items-center">
        <Select defaultValue="lucy" tw="w-48 mr-2 rounded-lg" onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Input type="number" />
      </div>
    
      <div tw="flex justify-between items-center mb-1 mt-10">
        <div tw="font-semibold text-base">Ticket quantity</div>
        <img alt="metamask" src={tooltip} tw="w-4 h-4"/>
      </div>

      <div tw="border-solid border border-zinc-300 rounded-lg w-full">   
        <div tw="grid grid-cols-3">
          <div tw="border-solid border-r py-4 bg-zinc-100">
            <div tw="text-gray-300 text-center text-2xl font-semibold">{total.toLocaleString()}</div>
            <div tw="flex justify-center items-center">
              <img alt="metamask" src={ethSmall} tw="w-[12px] mb-1"/>
              <div tw="text-gray-800 text-center text-base ml-2">0.03 per ticket</div>
            </div>
          </div>
          <div tw="border-solid border-r py-4">
            <div tw="text-gray-300 text-center text-2xl font-semibold">{total.toLocaleString()}</div>
            <div tw="flex justify-center items-center">
              <img alt="metamask" src={ethSmall} tw="w-[12px] mb-1"/>
              <div tw="text-gray-800 text-center text-base ml-2">0.03 per ticket</div>
            </div>
          </div>
          <div tw="py-4">
            <div tw="text-gray-300 text-center text-2xl font-semibold">{total.toLocaleString()}</div>
            <div tw="flex justify-center items-center">
              <img alt="metamask" src={ethSmall} tw="w-[12px] mb-1"/>
              <div tw="text-gray-800 text-center text-base ml-2">0.03 per ticket</div>
            </div>
          </div>
        </div>
      </div>
      <div tw="flex justify-between items-center mb-1 mt-10">
        <div tw="font-semibold text-base">Duration</div>
        <img alt="metamask" src={tooltip} tw="w-4 h-4"/>
      </div>
      <Select defaultValue="lucy" tw="w-full rounded-lg" onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <Divider />
      <div tw="flex items-center mb-1 mt-2">
        <div tw="text-base text-gray-300 mr-3">Fees</div>
        <img alt="metamask" color="text-gray-300" src={tooltip} tw="w-4 h-4"/>
      </div>
      <div tw="flex justify-between items-center mb-1 mt-2">
        <div tw="text-base text-gray-800">Goobig fees</div>
        <div tw="text-base text-gray-800">1.5%</div>
      </div>
      <div tw="flex justify-between items-center mb-1 mt-2">
        <div tw="text-base text-gray-800">Goobig fees</div>
        <div tw="text-base text-gray-800">5%</div>
      </div>
      <div tw="flex justify-end mt-10">
        <button onClick={showModal} tw="bg-[#9C40CF] text-white text-base font-semibold px-12 py-2 rounded border border-transparent hover:border-white">
          Complete listing
        </button>
        <SellRaffleComponentModal isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel}></SellRaffleComponentModal>
      </div>
    </div>
  );
};
export default SellRaffleInfo;





