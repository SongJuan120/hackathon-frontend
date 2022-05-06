import tw from 'twin.macro';
import { Modal, Button } from 'antd';
import img1 from '../../assets/images/icon/nftSample.svg';
import img2 from '../../assets/images/sample/sample_avatar2.png';
import checkMarkBlue from '../../assets/images/icon/check-mark-blue.svg';
import minuseButton from '../../assets/images/icon/minuse_button.svg'
import plusButton from '../../assets/images/icon/plus_button.svg'
import eth from '../../assets/images/icon/eth-icon.svg';

const SellConfirmModal = (props: {isConfirmModalVisible: boolean, handleOk: ()=>void, handleCancel: ()=>void }) =>{

  const raffleNumber = '2 raffle tickets';
  const name = 'Azuki #1162';

  return(
    <Modal visible={props.isConfirmModalVisible} onOk={props.handleOk} onCancel={props.handleCancel} footer={null}>
      <div tw="text-gray-300 text-2xl font-semibold text-center">
        You have raffle listed this item!
      </div>
      <div tw="flex justify-center mt-8">
        <img alt="metamask" src={img2} tw="w-[167px] h-[167px] rounded-xl shadow-xl"/> 
      </div>
      <div tw="flex justify-center mt-12">
        <button tw="text-white bg-[#9C40CF] text-base font-semibold px-12 py-2 rounded border border-transparent hover:border-white">
          View item
        </button>
      </div>
      
    </Modal>
  )
}

export default SellConfirmModal;
  