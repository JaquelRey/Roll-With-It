import { useReducer } from 'react';
import {
	SAMPLE_ACTION
} from './actions';

// TODO: To get a better understand of how a reducer works - add comments to the various actions in the reducer
export const reducer = (state, action) => {
	switch (action.type) {
		case SAMPLE_ACTION:
			return {
				...state
			};
		default:
			return state;
	}
};

export function useAppReducer(initialState) {
	return useReducer(reducer, initialState);
}
