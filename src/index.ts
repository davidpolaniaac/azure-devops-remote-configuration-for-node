import { IRemoteConfigApi, IRemoteConfigBase } from './interfaces/RemoteConfig';

import { IGitApi } from 'azure-devops-node-api/GitApi';
import { RemoteConfigBase } from './remoteConfig';
import { WebApi } from 'azure-devops-node-api';
export { RemoteConfigApi } from './remoteConfigApi';
export { IRemoteConfigApi } from './interfaces/RemoteConfig';
export async function getRemoteConfigApi(
    webApi: WebApi,
    project: string,
    repositoryId: string,
    pathConfig: string,
): Promise<IRemoteConfigApi> {
    const gitApi: IGitApi = await webApi.getGitApi();
    const remoteConfig: IRemoteConfigBase = new RemoteConfigBase(project, repositoryId, pathConfig, gitApi);
    const api: IRemoteConfigApi = await remoteConfig.getRemoteConfigApi();
    return api;
}
