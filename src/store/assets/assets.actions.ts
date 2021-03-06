import { Dispatch } from 'redux'
import { hideLoading } from 'react-redux-loading-bar';

import { ASSETS_GET_ALL } from '../action-types';
import errorHandler from '../error-handler';
import { assetsService } from '../../services';
import { GNftData } from '../../types';

export const getAllAssets = (address: string) => async (dispatch: Dispatch) => {
    try {
        const res = await assetsService.getAssets(address);
        dispatch({
            type: ASSETS_GET_ALL,
            payload: {
                assets: res
            },
        });
    } catch (error: any) {
        dispatch(hideLoading());
        errorHandler(error, ASSETS_GET_ALL)
    }
}


