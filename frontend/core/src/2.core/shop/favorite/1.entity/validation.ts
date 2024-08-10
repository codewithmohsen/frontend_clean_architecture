import { array, bool, number, object } from 'yup';

const Validation = object().shape({
	ids: array().of(number()),
});
export { Validation };
