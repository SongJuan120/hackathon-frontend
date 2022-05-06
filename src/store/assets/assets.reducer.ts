import { Action, Reducer } from 'redux';
import { handleActions } from 'redux-actions';

import { GNftData } from '../../types';
import { ASSETS_GET_ALL } from '../action-types';

export interface AssetsState {
  assets: GNftData;
}

interface AssetsAction extends Action {
  payload: {
    assets: GNftData,
  }
}

const initialState: AssetsState = {
  assets: {
    blockHash:'0x00000000000000000000000000000000000000000000000000',
    ownedNfts: [],
    totalCount: 0
  }
}

export const assetsReducer: Reducer<AssetsState, AssetsAction> = handleActions(
  {
    [ASSETS_GET_ALL]: (state: AssetsState, { payload: { assets }}: AssetsAction) => ({
      ...state,
      assets
    }),
  },
  initialState,
);
