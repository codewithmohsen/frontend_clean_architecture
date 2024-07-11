import { array, bool, number, object } from 'yup';

const Validation = object().shape({
	ids: array().of(number()),
	filteredIds: array().of(number()),
	filteredId: bool(),
});
export { Validation };
