import { camelCase, lowerCase } from 'string-ts';
import { en as plurize } from 'make-plural';

export type TConfig = {
	Entity_NAME: string;
	REDUCER_NAME: string;
	REDUCER_STATE: string;
};

export const generate = (_entityName: string, _parentName: string, _couldBePlural: boolean = true): TConfig => {
	_parentName = lowerCase(_parentName);
	_entityName = lowerCase(_entityName);
	const config: TConfig = {
		Entity_NAME: camelCase(_entityName),
		REDUCER_NAME: '/' + _parentName + '/' + _entityName,
		REDUCER_STATE: _couldBePlural ? plurize(_entityName) : _entityName,
	};
	return config;
};
