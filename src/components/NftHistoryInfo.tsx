import tw from 'twin.macro';
import { useState, useEffect } from 'react';
import { rafflesService } from '../services';
import showMark from '../assets/images/icon/show-mark2.svg';
import openDetail from '../assets/images/icon/open-detail.svg';
import { GRaffles, GSoldHistory } from '../types';
import { getDateBySecond, addressFormat } from '../utils/helpers'

const NftHistoryInfo = (props: {raffle: GRaffles}) => {
 
  const raffle: GRaffles = props.raffle;
  const [raffleHistory, setRaffleHistory] = useState<GSoldHistory[]>([]);
  
  useEffect(() => {
    getNftInfo();
  }, [raffle]);
  
  const getNftInfo = async() => {
    const history = await rafflesService.getSoldHistory(raffle.raffleId);
    setRaffleHistory(history);
  }
  return (
    <div tw="border-solid border border-zinc-300 rounded-lg w-full">   
      <div tw="flex items-center justify-between py-3 px-4">
        <div tw="flex items-center">
          <img alt="metamask" src={showMark} tw="w-6 h-6 mr-1.5"/>
          <div tw="text-gray-300 text-xs lg:text-base">Tickets sold</div>
        </div>
        <div tw="text-gray-300 text-xs lg:text-base">
          {raffle.soldTickets}/{raffle.totalTickets}
        </div>
      </div>
      <div>
        <table tw="table-auto w-full">
          <thead tw="border-solid border-t border-zinc-300 h-8 bg-zinc-100"> 
            <tr>
              <th tw="text-[#848484] text-xs lg:text-sm font-normal">Quantity</th>
              <th tw="text-[#848484] text-xs lg:text-sm font-normal">Date</th>
              <th tw="text-[#848484] text-xs lg:text-sm font-normal">Buyer</th>
              <th tw="text-[#848484] text-xs lg:text-sm font-normal"></th>
            </tr>
          </thead>
          <tbody>
            {raffleHistory && raffleHistory.map((item, index)=>{
              return(
                <tr key={index} tw="border-solid border-t border-zinc-300 h-12">
                  <td tw="text-gray-800 text-xs lg:text-sm font-normal text-center">{item?.history?.tickets}</td>
                  <td tw="text-gray-800 text-xs lg:text-sm font-normal text-center">{getDateBySecond(item?.history?.timestamp)}</td>
                  <td tw="text-blue-100 text-xs lg:text-sm font-normal text-center">{item.buyer?item?.buyer?.name:addressFormat(item?.history?.buyer)}</td>
                  <td>
                  <a tw="text-base text-violet-200 cursor-pointer" target="_blank" href={`https://rinkeby.etherscan.io/tx/${item?.history?.txHash}`}>
                    <img alt="metamask" src={openDetail} tw="w-4 h-4"/>
                  </a>  
                  </td>
                </tr> 
              )})
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default NftHistoryInfo;

