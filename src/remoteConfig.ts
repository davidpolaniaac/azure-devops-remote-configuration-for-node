import { IRemoteConfigApi, IRemoteConfigBase } from './interfaces/RemoteConfig';

import { Content } from './interfaces/Api';
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IGitApi } from 'azure-devops-node-api/GitApi';
import { RemoteConfigApi } from './remoteConfigApi';

export class RemoteConfigBase implements IRemoteConfigBase {
    private repository: string;
    private path: string;
    private gitApi: IGitApi;
    private project: string;

    public constructor(project: string, repository: string, path: string, gitApi: IGitApi) {
        this.project = project;
        this.repository = repository;
        this.path = path;
        this.gitApi = gitApi;
    }

    private streamToString(stream: NodeJS.ReadableStream): Promise<string> {
        const chunks: any[] = [];
        return new Promise((resolve, reject) => {
            stream.on('data', (chunk) => chunks.push(chunk));
            stream.on('error', reject);
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
        });
    }

    public async getRemoteConfigApi(): Promise<IRemoteConfigApi> {
        const readableStream: NodeJS.ReadableStream = await this.gitApi.getItemText(
            this.repository,
            this.path,
            this.project,
        );
        const value: string = await this.streamToString(readableStream);
        const content: Content = JSON.parse(value);
        return new RemoteConfigApi(content);
    }
}
