import * as GitApi from 'azure-devops-node-api/GitApi';
import * as IRemoteConfig from './interfaces/RemoteConfig';
import * as IApi from './interfaces/Api';
import * as RemoteConfig from './remoteConfigApi';

export class RemoteConfigBase implements IRemoteConfig.RemoteConfigBase {
    private repository: string;
    private path: string;
    private gitApi: GitApi.IGitApi;
    private project: string;

    public constructor(project: string, repository: string, path: string, gitApi: GitApi.IGitApi) {
        this.project = project;
        this.repository = repository;
        this.path = path;
        this.gitApi = gitApi;
    }

    public async getRemoteConfigApi(): Promise<IRemoteConfig.RemoteConfigApi> {
        const readableStream: NodeJS.ReadableStream = await this.gitApi.getItemContent(this.repository, this.path, this.project);
        const value: string = readableStream.read().toString();
        const content: IApi.Content = JSON.parse(value);
        return new RemoteConfig.RemoteConfigApi(content);
    }
}
