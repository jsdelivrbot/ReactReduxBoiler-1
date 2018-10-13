

export const ACTION_TEST = 'action_test';

export function testAction(){

	console.log("testAction() from the action creator");

	return {
		type: ACTION_TEST,
		payload: "Action Test"
	}
}