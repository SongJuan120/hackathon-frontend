export interface NFTProps {
    nft: NFTMODEL
}

export interface NFTMODEL {
    id: number,
    image: string,
    time: string,
    eth: number,
    price: number,
    progress: number,
}
