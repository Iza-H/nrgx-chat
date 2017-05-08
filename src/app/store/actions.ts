import { Action } from '@ngrx/store';
import { AllUserData } from '../../../shared/to/all-user-data';

export const LOAD_USER_THREADS_ACTIONS = 'LOAD_USER_THREADS_ACTIONS';

export class LoadUserThreadsAction implements Action {
    readonly type = LOAD_USER_THREADS_ACTIONS;
    constructor(public payload: AllUserData) {
    }
}
