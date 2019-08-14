import { Action } from '@ngrx/store';

export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

export class ShowLoader implements Action {
    readonly type = SHOW_LOADER;
}

export class HideLoader implements Action {
    readonly type = HIDE_LOADER;
}

export type LoaderActions = ShowLoader | HideLoader;
