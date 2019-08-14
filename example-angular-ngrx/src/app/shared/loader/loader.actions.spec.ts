import { SHOW_LOADER, ShowLoader, HIDE_LOADER, HideLoader } from './loader.actions';

describe('ShowLoader', () => {
    it('should create an action', () => {
        const action = new ShowLoader();
        expect(action.type).toEqual(SHOW_LOADER);
    });
});

describe('HideLoader', () => {
    it('should create an action', () => {
        const action = new HideLoader();
        expect(action.type).toEqual(HIDE_LOADER);
    });
});
