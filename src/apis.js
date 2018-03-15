import { send } from '../config/request'

export const getValidation = () => {
	console.log('fire')
	send('/code')
}