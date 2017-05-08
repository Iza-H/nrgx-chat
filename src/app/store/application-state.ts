import { ApplicationState } from './application-state';
import { UiState, INITIAL_UI_STATE } from './ui-state';
import { StoreData } from './store-date';

export interface ApplicationState {
    uiState: UiState;
    storeData: StoreData;
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
    uiState: INITIAL_UI_STATE,
    
}