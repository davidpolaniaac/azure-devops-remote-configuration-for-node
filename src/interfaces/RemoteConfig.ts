import { KeyValue } from './Api';

export interface IRemoteConfigApi {
    getAllContent(): any;
    getStringValue(key: string): string;
    getNumberValue(key: string): number;
    getSimpleStringList(key: string): string[];
    getSimpleNumberList(key: string): number[];
    getValue<T>(key: string): T;
    getKeyValue(key: string): KeyValue;
    get(key: string): any;
    getListValues(key: string): any[];
    getValueConfiguration<T>(key: string): T;
    getValueConfigurationFromConfiguration<T>(configuration: any, key: string): T;
    getConfigurationByType<T>(): T;
}

export interface IRemoteConfigBase {
    getRemoteConfigApi(): Promise<IRemoteConfigApi>;
}
