
import { ACTION_TEST } from '../actions';

export default function(state = {}, action){

	switch(action.type){

		case ACTION_TEST: 

			console.log("ACTION_TEST case from reducer");

			return state;

		default: 
			return state;
	}
}