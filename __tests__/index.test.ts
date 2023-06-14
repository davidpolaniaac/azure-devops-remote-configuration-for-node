import * as rc from '../src/remoteConfig';

import { getRemoteConfigApi } from '../src/index';

describe('getRemoteConfigApi', () => {
  it('should return the remote config API', async () => {
    const mockWebApi: any = {
      getGitApi: jest.fn(() => Promise.resolve({})),
    };
    const mockGitApi = {};
    const mockRemoteConfigBase: any = {
      getRemoteConfigApi: jest.fn(() => Promise.resolve({})),
    };

    jest.spyOn(rc, 'RemoteConfigBase').mockImplementation(() => mockRemoteConfigBase);

    const result = await getRemoteConfigApi(mockWebApi, 'mock-project', 'mock-repo-id', 'mock-path');

    expect(mockWebApi.getGitApi).toHaveBeenCalled();

    expect(rc.RemoteConfigBase).toHaveBeenCalledWith(
      'mock-project',
      'mock-repo-id',
      'mock-path',
      mockGitApi
    );

    expect(mockRemoteConfigBase.getRemoteConfigApi).toHaveBeenCalled();

    expect(result).toEqual({});
  });
});
