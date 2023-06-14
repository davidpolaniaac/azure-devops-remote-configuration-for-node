import Message from './constant/message';
import { Content, KeyValue } from './interfaces/Api';
import { IRemoteConfigApi } from './interfaces/RemoteConfig';

export class RemoteConfigApi implements IRemoteConfigApi {
    private ObjectConfig: Content;

    public constructor(ObjectConfig: Content) {
        this.ObjectConfig = ObjectConfig;
    }

    private getData(value: any, key: string): any {
        if (typeof value[key] !== 'undefined' && value[key]) {
            return value[key];
        } else {
            throw new Error(`${Message.VALUE_NOT_EXIST} for the key = ${key}`);
        }
    }

    public getValueConfiguration<T>(key: string): T {
        if (typeof this.ObjectConfig[key] !== 'undefined' && this.ObjectConfig[key]) {
            return this.ObjectConfig[key];
        } else {
            throw new Error(`${Message.CONFIG_NOT_EXIST} for the key = ${key}`);
        }
    }

    public getValueConfigurationFromConfiguration<T>(configuration: any, key: string): T {
        if (typeof configuration[key] !== 'undefined' && configuration[key]) {
            return configuration[key];
        } else {
            throw new Error(`${Message.CONFIG_NOT_EXIST} for the key = ${key}`);
        }
    }

    public getConfigurationByType<T>(): T {
        if (this.ObjectConfig) {
            const configuration: T = (<T>this.ObjectConfig) as T;
            return configuration;
        } else {
            throw new Error(Message.CONFIG_NOT_EXIST);
        }
    }

    public getAllContent(): any {
        if (this.ObjectConfig) {
            return this.ObjectConfig;
        } else {
            throw new Error(Message.CONFIG_NOT_EXIST);
        }
    }

    public getValue<T>(key: string): T {
        try {
            const value: T = this.getData(this.ObjectConfig, key) as T;
            return value;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public getStringValue(key: string): string {
        try {
            const value: string = this.getData(this.ObjectConfig, key) as string;
            return value;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public getNumberValue(key: string): number {
        try {
            const value: number = this.getData(this.ObjectConfig, key) as number;
            return value;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    public getSimpleStringList(key: string): string[] {
        try {
            const value: string[] = this.getData(this.ObjectConfig, key) as string[];
            return value;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public getSimpleNumberList(key: string): number[] {
        try {
            const value: number[] = this.getData(this.ObjectConfig, key) as number[];
            return value;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public getObject(key: string): any {
        try {
            const value: any = this.getData(this.ObjectConfig, key) as any;
            return value;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public getKeyValue(key: string): KeyValue {
        try {
            const value: KeyValue = this.getData(this.ObjectConfig, key) as KeyValue;
            return value;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public getListValues(key: string): any[] {
        try {
            const value: any[] = this.getData(this.ObjectConfig, key) as any[];
            return value;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    public get(key: string): any {
        try {
            const value: any = this.getData(this.ObjectConfig, key) as any;
            return value;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}
