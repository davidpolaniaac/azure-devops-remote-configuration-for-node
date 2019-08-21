import * as RemoteConfig from './index';
import * as IRemoteConfig from './interfaces/RemoteConfig';
import * as common from 'azure-devops-task-utils';

async function run(): Promise<string> {
    const web = await common.getWebApi();
    const config: IRemoteConfig.RemoteConfigApi = await RemoteConfig.getRemoteConfigApi(
        web,
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        'repository name',
        'xxxxxxx/config.json',
    );
    const value: string = config.getStringValue('test');
    console.log(value);
    return value;
}

run();
