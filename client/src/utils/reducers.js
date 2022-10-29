import { useReducer } from 'react';
import {
	QUERY_STARTING, QUERY_SKILLS, QUERY_PROFICIENCIES, QUERY_FEATURES, QUERY_EQUIPMENTS,
	CREATE_CHARACTER, UPDATE_CHARACTER, DELETE_CHARACTER, EDIT_USER, ADD_USER
} from './actions';

// TODO: To get a better understand of how a reducer works - add comments to the various actions in the reducer
export const reducer = (state, action) => {
	switch (action.type) {
		case QUERY_STARTING:
			return {
				...state,
			};
		case QUERY_SKILLS:
			return {
				...state
			};
		case QUERY_PROFICIENCIES:
			return {
				...state
			};
		case QUERY_EQUIPMENTS:
			return {
				...state
			};
			case QUERY_FEATURES:
				return {
					...state
				};
		case CREATE_CHARACTER:
			return {
				...state
			};
		case UPDATE_CHARACTER:
			return {
				...state
			};
		case DELETE_CHARACTER:
			return {
				...state
			};
		case EDIT_USER:
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
