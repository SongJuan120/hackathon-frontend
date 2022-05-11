export interface GRaffles {
    raffleId: number,
    raffleAddress: string,
    nftAddress: string,
    tokenId: string,
    totalTickets: string,
    ticketPrice: string,
    totalPrice: string,
    duration: string,
    seller: string,
    created: string,
    soldTickets: string,
    raffleState: string
}

export interface GSoldHistory {
    history: GSoldHistoryInfo,
    buyer: string | null
} 

export interface GSoldHistoryInfo {
    _id: string,
    blockNumber: number,
    txHash: string,
    raffleId: string,
    buyer: string,
    tickets: string,
    timestamp: number,
    __v: number
}

