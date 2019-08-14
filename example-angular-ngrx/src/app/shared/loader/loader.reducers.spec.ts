import * as fromLoaderReducers from './loader.reducers';
import * as fromLoaderActions from './loader.actions';

describe('LoaderReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialLoaderState } = fromLoaderReducers;
      const state = fromLoaderReducers.LoaderReducer(undefined, {} as any);
      expect(state).toBe(initialLoaderState);
    });
  });

  describe('SHOW_LOADER action', () => {
    it('should set loadingCount', () => {
        const { initialLoaderState } = fromLoaderReducers;
        const action = new fromLoaderActions.ShowLoader();
        const state = fromLoaderReducers.LoaderReducer(initialLoaderState, action);

        expect(state.loadingCount).toEqual(1);
    });
  });

  describe('HIDE_LOADER action', () => {
    it('should set loadingCount to -1', () => {
        const { initialLoaderState } = fromLoaderReducers;
        const previousState = { ...initialLoaderState, loadingCount: 1};
        const action = new fromLoaderActions.HideLoader();
        const state = fromLoaderReducers.LoaderReducer(previousState, action);

        expect(state.loadingCount).toEqual(0);
    });
  });
});
