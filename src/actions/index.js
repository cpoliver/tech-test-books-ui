import { UPDATE_ADMIN_STATE, UPDATE_SEARCH_PARAMS } from './types';

export const updateAdminState = (adminState) => ({
  type: UPDATE_ADMIN_STATE,
  payload: adminState
});

export const updateSearchParams = (searchParams) => ({
  type: UPDATE_SEARCH_PARAMS,
  payload: searchParams
});
