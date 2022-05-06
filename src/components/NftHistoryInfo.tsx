import tw from 'twin.macro';

import showMark from '../assets/images/icon/show-mark2.svg';
import openDetail from '../assets/images/icon/open-detail.svg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/lower-bg.jpg';
import ProgressBar from '@ramonak/react-progress-bar';

const NftHistoryInfo = () => {
  return (
    <div tw="border-solid border border-zinc-300 rounded-lg w-full">   
      <div tw="flex items-center justify-between py-3 px-4">
        <div tw="flex">
          <img alt="metamask" src={showMark} tw="w-6 h-6 mr-1.5"/>
          <div tw="text-gray-300 text-base">Tickets sold</div>
        </div>
        <div tw="text-gray-300 text-base">
          88/100
        </div>
      </div>
      <div>
        <table tw="table-auto w-full">
          <thead tw="border-solid border-t border-zinc-300 h-8 bg-zinc-100"> 
            <tr>
              <th tw="text-[#848484] text-sm font-normal">Quantity</th>
              <th tw="text-[#848484] text-sm font-normal">Date</th>
              <th tw="text-[#848484] text-sm font-normal">Buyer</th>
              <th tw="text-[#848484] text-sm font-normal"></th>
            </tr>
          </thead>
          <tbody>
            <tr tw="border-solid border-t border-zinc-300 h-12">
              <td tw="text-gray-800 text-sm font-normal text-center">1</td>
              <td tw="text-gray-800 text-sm font-normal text-center">21/4/2022</td>
              <td tw="text-blue-100 text-sm font-normal text-center">LeylaGul</td>
              <td>
                <img alt="metamask" src={openDetail} tw="w-4 h-4"/>
              </td>
            </tr> 
            <tr tw="border-solid border-t border-zinc-300 py-3 h-12">
              <td tw="text-gray-800 text-sm font-normal text-center">1</td>
              <td tw="text-gray-800 text-sm font-normal text-center">21/4/2022</td>
              <td tw="text-blue-100 text-sm font-normal text-center">LeylaGul</td>
              <td>
                <img alt="metamask" src={openDetail} tw="w-4 h-4"/>
              </td>
            </tr> 
            <tr tw="border-solid border-t border-zinc-300 py-3 h-12">
              <td tw="text-gray-800 text-sm font-normal text-center">1</td>
              <td tw="text-gray-800 text-sm font-normal text-center">21/4/2022</td>
              <td tw="text-blue-100 text-sm font-normal text-center">LeylaGul</td>
              <td>
                <img alt="metamask" src={openDetail} tw="w-4 h-4"/>
              </td>
            </tr>   
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default NftHistoryInfo;

