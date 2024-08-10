import { object, string } from 'yup';

const Validation = object().shape({
	name: string(),
});
export { Validation };
