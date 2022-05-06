export interface GNftData {
    ownedNfts: GOwnedNft[];
    totalCount: number;
    blockHash: string;
}

export interface GOwnedNft {
    contract: GContract;
    id: GId;
    balance: string;
    title:string;
    description: string;
    tokenUri: GTokenUri;
    media: GMedia[];
    metadata: GMetadata;
    timeLastUpdated: string;
}

export interface GContract {
    address: string;
}

export interface GId {
    tokenId: string;
    tokenMetadata: GTokenMetadata;
}

export interface GTokenMetadata {
    tokenType: string
}

export interface GTokenUri {
    raw: string;
    gateway: string;
}

export interface GMedia {
    raw: string;
    gateway: string;
}

export interface GMetadata {
    name: string;
    image: string;
    attributes: GAttributes[];
}

export interface GAttributes {
    value: string;
    trait_type: string;
}
