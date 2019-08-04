// Take TState as AppState for example
export type MockReducer<TState> = {[prop in keyof TState]: (() => TState[prop])};
