import * as RemoteConfig from './index';
import * as IRemoteConfig from './interfaces/RemoteConfig';

async function run(): Promise<string> {
    const config: IRemoteConfig.RemoteConfigApi = await RemoteConfig.getRemoteConfigApi(
        'AW1192003_DevOps_ConfigRemote',
        'ChangeOrder/pdn.json',
    );
    const value: string = config.getStringValue('test');
    console.log(value);
    return value;
}

run();
