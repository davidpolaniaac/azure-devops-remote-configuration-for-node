import * as common from 'azure-devops-task-utils';
import * as nodeApi from 'azure-devops-node-api';
import * as GitApi from 'azure-devops-node-api/GitApi';
import * as RemoteConfig from './remoteConfig';
import * as IRemoteConfig from './interfaces/RemoteConfig';

export async function getRemoteConfigApi(
    repositoryId: string,
    pathConfig: string,
): Promise<IRemoteConfig.RemoteConfigApi> {
    const webApi: nodeApi.WebApi = await common.getWebApi();
    const gitApi: GitApi.IGitApi = await webApi.getGitApi();
    const project: string = common.getProject();
    const remoteConfig: RemoteConfig.RemoteConfigBase = new RemoteConfig.RemoteConfigBase(
        project,
        repositoryId,
        pathConfig,
        gitApi,
    );

    const api = await remoteConfig.getRemoteConfigApi();
    return api;
}
