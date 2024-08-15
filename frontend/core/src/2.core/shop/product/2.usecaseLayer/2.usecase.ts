import { IEntity } from '../1.entityLayer';
import { IOutbound } from './1.interface';

class Usecase implements IOutbound {
	readAll(_list: IEntity[]): IEntity[] {
		return _list;
	}
	read(_item: IEntity): IEntity {
		return _item;
	}
}
export { Usecase };
