import { ApplicationState } from './application-state';
import { UiState, INITIAL_UI_STATE } from './ui-state';
import { StoreData, INITIAL_STORE_DATA } from './store-date';

export interface ApplicationState {
    uiState: UiState;
    storeData: StoreData;
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
    uiState: INITIAL_UI_STATE,
    storeData: INITIAL_STORE_DATA,
};
