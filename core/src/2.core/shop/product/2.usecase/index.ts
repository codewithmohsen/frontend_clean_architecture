import { IEntity, IOutbound } from '../1.entity';
import { IEntity as IProduct } from '../1.entity';
class Usecase implements IOutbound {
	readAll(_list: IEntity[]): IEntity[] {
		return _list;
	}
	read(_item: IEntity): IEntity {
		return _item;
	}
}
export { Usecase };
