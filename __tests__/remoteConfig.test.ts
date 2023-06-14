import { RemoteConfigApi } from '../src/remoteConfigApi';
import { RemoteConfigBase } from '../src/remoteConfig';

describe('RemoteConfigBase', () => {
  let mockGitApi: any;
  let remoteConfigBase: RemoteConfigBase;

  beforeEach(() => {
    mockGitApi = {
      getItemText: jest.fn(),
    };

    remoteConfigBase = new RemoteConfigBase('mock-project', 'mock-repo', 'mock-path', mockGitApi);
  });

  describe('getRemoteConfigApi', () => {
    it('should fetch remote config content and return an instance of RemoteConfigApi', async () => {
      const mockContent: any = { 
        mock: 'content',
      };
      const mockReadableStream: NodeJS.ReadableStream = createMockReadableStream(JSON.stringify(mockContent));

      mockGitApi.getItemText = jest.fn().mockImplementation(() => Promise.resolve(mockReadableStream));

      const json = jest.spyOn(global.JSON, 'parse');

      const result = await remoteConfigBase.getRemoteConfigApi();

      expect(mockGitApi.getItemText).toHaveBeenCalledWith('mock-repo', 'mock-path', 'mock-project');

      expect(json).toHaveBeenCalledWith(JSON.stringify(mockContent));

      expect(result).toBeInstanceOf(RemoteConfigApi);
    });
  });
});

function createMockReadableStream(data: string): NodeJS.ReadableStream {
  const stream = new (require('stream').Readable)();
  stream._read = () => {};
  stream.push(data);
  stream.push(null);
  return stream;
}
