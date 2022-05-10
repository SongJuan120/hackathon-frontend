import { Dispatch } from 'redux'
import { hideLoading } from 'react-redux-loading-bar';

import { RAFFLES_GET_ALL, RAFFLES_GET_BY_ID, NFT_GET_BY_ID } from '../action-types';
import errorHandler from '../error-handler';
import { rafflesService } from '../../services';
import { assetsService } from '../../services';
import { GRaffles } from '../../types';

export const getAllRaffles = () => async (dispatch: Dispatch) => {
    try {
        const raffles = await rafflesService.getRaffles();
        dispatch({
            type: RAFFLES_GET_ALL,
            payload: {
                raffles: raffles
            },
        });

    } catch (error: any) {
        dispatch(hideLoading());
        errorHandler(error, RAFFLES_GET_ALL)
    } 
}

export const getRafflesById = (id: number) => async (dispatch: Dispatch) => {
    try {
        const raffle = await rafflesService.getRafflesById(id);
        const nft = await assetsService.getAssetById(raffle.nftAddress, raffle.tokenId);
        dispatch({
            type: RAFFLES_GET_BY_ID,
            payload: {
                raffle: raffle
            },
        });

        dispatch({
            type: NFT_GET_BY_ID,
            payload: {
                nft: nft
            },
        });
    } catch (error: any) {
        dispatch(hideLoading());
        errorHandler(error, RAFFLES_GET_ALL)
    }
}

