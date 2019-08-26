import * as IApi from './Api';

export interface RemoteConfigApi {
    getAllContent(): any;
    getStringValue(key: string): string;
    getNumberValue(key: string): number;
    getSimpleStringList(key: string): string[];
    getSimpleNumberList(key: string): number[];
    getObject(key: string): object;
    getKeyValue(key: string): IApi.KeyValue;
    get(key: string): any;
    getListValues(key: string): any[];
}

export interface RemoteConfigBase {
    getRemoteConfigApi(): Promise<RemoteConfigApi>;
}
