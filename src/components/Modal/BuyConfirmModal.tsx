import tw from 'twin.macro';
import { Modal, Button } from 'antd';
import img1 from '../../assets/images/icon/nftSample.svg';
import img2 from '../../assets/images/sample/sample_avatar2.png';
import checkMarkBlue from '../../assets/images/icon/check-mark-blue.svg';
import minuseButton from '../../assets/images/icon/minuse_button.svg'
import plusButton from '../../assets/images/icon/plus_button.svg'
import eth from '../../assets/images/icon/eth-icon.svg';

const BuyConfirmModal = (props: {isConfirmModalVisible: boolean, handleOk: ()=>void, handleCancel: ()=>void }) =>{

  const raffleNumber = '2 raffle tickets';
  const name = 'Azuki #1162';

  return(
    <Modal visible={props.isConfirmModalVisible} onOk={props.handleOk} onCancel={props.handleCancel} footer={null}>
      <div tw="text-gray-300 text-2xl font-semibold text-center">
        Ticket purchase confirmed!
      </div>
      <div tw="text-base text-gray-800 text-center mt-6">
        LFG! You successfully purchased <span tw="text-base text-gray-800 font-semibold">{raffleNumber}</span> <br></br>for <span tw="text-base text-gray-800 font-semibold">{name}</span>. Good luck!
      </div>
      <div tw="flex justify-center mt-4">
        <img alt="metamask" src={img2} tw="w-[167px] h-[167px] rounded-xl"/>
      </div>
      <div tw="w-[300px] border border-solid rounded-lg m-auto px-5 py-3 mt-6">
        <div tw="grid grid-cols-2 gap-3">
          <div>
            <div tw="text-[#1d1d1d] text-xs">Status</div>
            <div tw="text-[#522294] text-sm">Complete</div>
          </div>
          <div>
            <div tw="text-[#1d1d1d] text-xs">Transaction Hash</div>
            <div tw="text-[#522294] text-sm">0x25...94af</div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default BuyConfirmModal;
  