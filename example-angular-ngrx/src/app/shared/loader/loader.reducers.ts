import { ActionReducer, Action } from '@ngrx/store';
import * as LoaderActions from './loader.actions';

export interface LoaderState {
    loadingCount: number;
}

export const initialLoaderState: LoaderState = {
    loadingCount: 0
};

export function LoaderReducer(state = initialLoaderState, action: LoaderActions.LoaderActions): LoaderState {
    let newState: LoaderState;
    switch (action.type) {
        case LoaderActions.SHOW_LOADER:
            newState = {...state,
                loadingCount: state.loadingCount + 1
            };
            return newState;
        case LoaderActions.HIDE_LOADER:
            newState = {...state,
                loadingCount: state.loadingCount > 0 ?  state.loadingCount - 1 : 0
            };
            return newState;
        default:
            return state;
    }
}
