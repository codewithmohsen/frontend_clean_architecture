import { IEntity, IInbound } from '../1.entityLayer';
import { CORE_CONFIG } from '../../../../1.domain';

class Services implements IInbound {
	async readAll(): Promise<IEntity[]> {
		try {
			const response = await fetch(`${CORE_CONFIG.BASE_URL}${'products'}`, {
				method: 'GET',
			});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const result = await response.json();
			return result;
		} catch (error) {
			throw error;
		}
	}
	async read(_id: number): Promise<IEntity> {
		try {
			const response = await fetch(`${CORE_CONFIG.BASE_URL}${'products'}/${_id}`, {
				method: 'GET',
			});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const result = await response.json();
			return result;
		} catch (error) {
			throw error;
		}
	}
}
export { Services };
