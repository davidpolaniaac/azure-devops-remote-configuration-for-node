import * as nodeApi from 'azure-devops-node-api';
import * as GitApi from 'azure-devops-node-api/GitApi';
import * as RemoteConfig from './remoteConfig';
import * as IRemoteConfig from './interfaces/RemoteConfig';

export async function getRemoteConfigApi(
    webApi: nodeApi.WebApi,
    project: string,
    repositoryId: string,
    pathConfig: string,
): Promise<IRemoteConfig.RemoteConfigApi> {
    const gitApi: GitApi.IGitApi = await webApi.getGitApi();
    const remoteConfig: RemoteConfig.RemoteConfigBase = new RemoteConfig.RemoteConfigBase(
        project,
        repositoryId,
        pathConfig,
        gitApi,
    );

    const api: IRemoteConfig.RemoteConfigApi = await remoteConfig.getRemoteConfigApi();
    return api;
}
