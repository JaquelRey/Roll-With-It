import { useReducer } from 'react';
import {
	QUERY_STARTING, QUERY_SKILLS, QUERY_PROFICIENCIES, QUERY_FEATURES, QUERY_EQUIPMENTS,
	CREATE_CHARACTER, UPDATE_CHARACTER, DELETE_CHARACTER, EDIT_USER
} from './actions';

// TODO: To get a better understand of how a reducer works - add comments to the various actions in the reducer
export const reducer = (state, action) => {
	switch (action.type) {
		case QUERY_STARTING:
			console.log('QUERY_STARTING dispatched');
			return {
				...state,
				userId: [action.starting]
			};
		case QUERY_SKILLS:
			console.log('QUERY_SKILLS dispatched');
			return {
				...state
			};
		case QUERY_PROFICIENCIES:
			console.log('QUERY_PROFICIENCIES dispatched');
			return {
				...state
			};
		case QUERY_EQUIPMENTS:
			console.log('QUERY_EQUIPMENTS dispatched');
			return {
				...state
			};
		case QUERY_FEATURES:
			console.log('QUERY_FEATURES dispatched');
			return {
				...state
			};
		case CREATE_CHARACTER:
			console.log('CREATE_CHARACTER dispatched');
			return {
				...state
			};
		case UPDATE_CHARACTER:
			console.log('UPDATE_CHARACTER dispatched');

			return {
				...state
			};
		case DELETE_CHARACTER:
			console.log('DELETE_CHARACTER dispatched');

			return {
				...state
			};
		case EDIT_USER:
			console.log('EDIT_USER dispatched');

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
