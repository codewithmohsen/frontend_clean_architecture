import { IEntity, IInbound } from '../1.entity';
import { CORE_CONFIG, EAction } from '../../../../1.domain';

class Services implements IInbound {
	async [EAction.UPDATE](_id: number): Promise<IEntity> {
		throw new Error('Method not implemented.');
	}
	async [EAction.READ_ALL](): Promise<IEntity> {
		throw new Error('Method not implemented.');
	}
	async [EAction.READ](_id: number): Promise<boolean> {
		throw new Error('Method not implemented.');
	}
}
export { Services };
