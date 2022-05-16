export interface GTicket {
    type: string,
    typeId: number,
    totalPrice: number,
    quantity: number,
    perPrice: number,
    duration: number,
}

export interface GSellTicket {
    registerRaffle: number,
    nftAddress: string,
    tokenId: number,
    ticketType: number,
    ticketPrice: number,
    duration: number
}