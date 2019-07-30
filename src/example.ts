import * as RemoteConfig from './index';
import * as IRemoteConfig from './interfaces/RemoteConfig';

async function run(): Promise<string> {
    const config: IRemoteConfig.RemoteConfigApi = await RemoteConfig.getRemoteConfigApi('', '');
    const value: string = config.getStringValue('');
    return value;
}
