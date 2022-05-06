import ProgressBar from '@ramonak/react-progress-bar';
import Icon from 'react-crypto-icons';
import tw from 'twin.macro';

import goBack from '../assets/images/icon/go-back.svg';
import group from '../assets/images/icon/group.svg';
import showEye from '../assets/images/icon/show-eye.svg';
import heart from '../assets/images/icon/heart.svg';
import img4 from '../assets/images/sample/sample_avatar2.png';
import { DetailStatusMODEL, DetailStatusProps } from '../model/DetailStatusModel';


const DetailImage = (props: DetailStatusProps) => {
  const status: DetailStatusMODEL = props.detailStatus;

  return (
    <div tw="">
      <img alt="metamask" src={img4} tw="w-full rounded-2xl h-[424px] shadow-xl"/>
      <div tw="pt-4">
        <div tw="flex justify-between">
          <div tw="flex">
            <div tw="flex items-center">
              <img alt="metamask" src={showEye} tw="w-6 h-6 mr-1"/>
              <div tw="text-gray-800 text-base text-center">{status.views.toLocaleString()}</div>
              <img alt="metamask" src={heart} tw="w-3 h-3 ml-5 mr-1"/>
              <div tw="text-gray-800 text-base text-center">{status.likes.toLocaleString()}</div>
            </div>
          </div>
          <div tw="flex">
            <img alt="metamask" src={group} tw="w-4 h-4 mr-3.5"/>
            <img alt="metamask" src={goBack} tw="w-4 h-4"/>
          </div>  
        </div>
      </div>            
    </div>
  );
};
export default DetailImage;
