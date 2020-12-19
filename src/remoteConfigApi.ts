import * as IRemoteConfig from './interfaces/RemoteConfig';
import * as IApi from './interfaces/Api';
import Message from './constant/message';

export class RemoteConfigApi implements IRemoteConfig.RemoteConfigApi {
    private ObjectConfig: IApi.Content;

    public constructor(ObjectConfig: IApi.Content) {
        this.ObjectConfig = ObjectConfig;
    }

    private getValue(value: any, key: string): any {
        if (typeof value[key] !== 'undefined' && value[key]) {
            return value[key];
        } else {
            throw new Error(Message.NOT_EXIST);
        }
    }

    public getValueConfiguration<T>(key: string): T {
        if (typeof this.ObjectConfig[key] !== 'undefined' && this.ObjectConfig[key]) {
            return this.ObjectConfig[key];
        } else {
            throw new Error(Message.NOT_EXIST);
        }
    }

    public getValueConfigurationFromConfiguration<T>(configuration: any, key: string): T {
        if (typeof configuration[key] !== 'undefined' && configuration[key]) {
            return configuration[key];
        } else {
            throw new Error(Message.NOT_EXIST);
        }
    }

    public getConfigurationByType<T>(): T {
        if (this.ObjectConfig) {
            const configuration: T = (<T>this.ObjectConfig) as T;
            return configuration;
        } else {
            throw new Error(Message.NOT_EXIST);
        }
    }

    public getAllContent(): any {
        if (this.ObjectConfig) {
            return this.ObjectConfig;
        } else {
            throw new Error(Message.NOT_EXIST);
        }
    }

    public getStringValue(key: string): string {
        try {
            const value: string = this.getValue(this.ObjectConfig, key) as string;
            return value;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    public getNumberValue(key: string): number {
        try {
            const value: number = this.getValue(this.ObjectConfig, key) as number;
            return value;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    public getSimpleStringList(key: string): string[] {
        try {
            const value: string[] = this.getValue(this.ObjectConfig, key) as string[];
            return value;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    public getSimpleNumberList(key: string): number[] {
        try {
            const value: number[] = this.getValue(this.ObjectConfig, key) as number[];
            return value;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    public getObject(key: string): object {
        try {
            const value: object = this.getValue(this.ObjectConfig, key) as object;
            return value;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    public getKeyValue(key: string): IApi.KeyValue {
        try {
            const value: IApi.KeyValue = this.getValue(this.ObjectConfig, key) as IApi.KeyValue;
            return value;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    public getListValues(key: string): any[] {
        try {
            const value: any[] = this.getValue(this.ObjectConfig, key) as any[];
            return value;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    public get(key: string): any {
        try {
            const value: any = this.getValue(this.ObjectConfig, key) as any;
            return value;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
