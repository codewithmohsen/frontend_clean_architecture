import { ValidationError } from 'yup';
import { IEntity } from './interfaces';
import { Validation } from './validation';
interface Entity extends IEntity {}
class Entity implements IEntity {
	constructor(props: IEntity) {
		try {
			const result = Validation.validateSync(props);
			if (result) {
				for (let key in props) {
					(this as any)[key] = (props as any)[key];
				}
			}
		} catch (error: any) {
			if (error.name === 'ValidationError') throw new ValidationError(error);
			throw new Error(error);
		}
	}
}
export { Entity };
