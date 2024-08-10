import { IEntity, IInbound } from '../1.entityLayer';
import { CORE_CONFIG } from '../../../../1.domain';
import { IEntity as IProduct } from '../../product/1.entityLayer';
class Services implements IInbound {
	async readAll(): Promise<string[]> {
		try {
			const response = await fetch(`${CORE_CONFIG.BASE_URL}${'products/categories'}`, {
				method: 'GET',
			});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const result = await response.json();
			return result;
		} catch (error) {
			console.log(error);

			throw error;
		}
	}
	async read(_name: string): Promise<IProduct[]> {
		try {
			const response = await fetch(`${CORE_CONFIG.BASE_URL}${'products/category'}/${_name}`, {
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
