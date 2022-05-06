import tw, { styled } from 'twin.macro';
import NftCard from '../components/NftCard';
import { Divider, Select, Input } from 'antd';

const StyledPage = styled.div`
  ${tw`w-full bg-[#ffffff]`}
  height: calc(100vh - 110px)
`;

const LiveRaffles = () => {
  const { Option } = Select;

  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }

  const temp = [{
    id: 1,
    image:'../assets/images/3.jpg',
    time: '12h 30m',
    eth: 0.3,
    price: 30,
    progress: 88,
  },{
    id: 2,
    image:'../assets/images/3.jpg',
    time: '12h 30m',
    eth: 0.3,
    price: 30,
    progress: 88,
  },{
    id: 3,
    image:'../assets/images/3.jpg',
    time: '12h 30m',
    eth: 0.3,
    price: 30,
    progress: 88,
  },{
    id: 4,
    image:'../assets/images/3.jpg',
    time: '12h 30m',
    eth: 0.3,
    price: 30,
    progress: 88,
  }];
  return (
    <StyledPage>
      <div tw="mx-auto max-w-6xl px-3 pt-14">
        <div tw="flex justify-between items-center mb-10">
          <div tw="text-gray-300 text-3xl font-semibold">Live raffles</div>
          <div tw="flex">
            <Select defaultValue="Sort" tw="w-full rounded-lg" onChange={handleChange}>
              <Option value="jack">Sort</Option>
            </Select>
            <Select defaultValue="Filter" tw="w-full rounded-lg ml-2" onChange={handleChange}>
              <Option value="jack">Filter</Option>
            </Select>
          </div>
        </div>

        <div tw="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {temp.map(item=>{
            return(<div key={item.id} tw="text-gray-300"><NftCard nft={item}></NftCard></div>)
          })}
        </div>
      </div>
    </StyledPage>
  );
};

export default LiveRaffles;
