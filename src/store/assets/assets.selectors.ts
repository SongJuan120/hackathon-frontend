import { createSelector } from 'reselect';

import { AppState } from '..';
import { AssetsState } from './assets.reducer';
import { GNftData } from '../../types';

export const selectAssets = createSelector<AppState, AssetsState, GNftData>(
  (state) => state.assetsModule,
  (assetsModule) => assetsModule.assets,
);

