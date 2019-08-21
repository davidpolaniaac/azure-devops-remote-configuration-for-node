/* eslint-disable @typescript-eslint/explicit-function-return-type */
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

    private streamToString(stream: NodeJS.ReadableStream): Promise<string> {
        const chunks: any[] = [];
        return new Promise((resolve, reject) => {
            stream.on('data', chunk => chunks.push(chunk));
            stream.on('error', reject);
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
        });
    }

    public async getRemoteConfigApi(): Promise<IRemoteConfig.RemoteConfigApi> {
        const readableStream: NodeJS.ReadableStream = await this.gitApi.getItemText(
            this.repository,
            this.path,
            this.project,
        );
        const value: string = await this.streamToString(readableStream);
        const content: IApi.Content = JSON.parse(value);
        return new RemoteConfig.RemoteConfigApi(content);
    }
}
