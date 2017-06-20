import { UPDATE_SEARCH_PARAMS } from './types';

export const updateSearchParams = (searchParams) => ({ type: UPDATE_SEARCH_PARAMS, payload: searchParams });
