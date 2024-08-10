import { InferType, object, string, ValidationError } from 'yup';

// ------------------------------------------------------------------- OBJECT
const Object = object().shape({
	name: string(),
});

// ------------------------------------------------------------------- INTERFACE
interface IEntity extends InferType<typeof Object> {}

// ------------------------------------------------------------------- ENTITY
interface Entity extends IEntity {}
class Entity implements IEntity {
	constructor(props: IEntity) {
		try {
			const result = Object.validateSync(props);
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

export { Entity, IEntity, Object };
