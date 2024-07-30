import { EAction } from '../../../../1.domain';
import { IEntity, IOutbound } from '../1.entity';
class Usecase implements IOutbound {
	[EAction.UPDATE](_list: IEntity): IEntity {
		return _list;
	}
	[EAction.READ_ALL](_list: IEntity): IEntity {
		return _list;
	}
	[EAction.READ](_item: boolean): boolean {
		return _item;
	}
}
export { Usecase };
