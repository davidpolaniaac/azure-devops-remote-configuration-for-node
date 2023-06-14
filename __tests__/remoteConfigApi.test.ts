import { Content } from '../src/interfaces/Api';
import Message from '../src/constant/message';
import { RemoteConfigApi } from '../src/remoteConfigApi';

describe('RemoteConfigApi', () => {
  let remoteConfigApi: RemoteConfigApi;
  let mockContent: Content;

  beforeEach(() => {
    mockContent = { 
      'mock-key': 'mock-value',
    };

    remoteConfigApi = new RemoteConfigApi(mockContent);
  });

  describe('getValueConfiguration', () => {
    it('should return the value for the specified key if it exists in the configuration', () => {
      const mockValue = 'mock-value';
      const mockKey = 'mock-key';
      mockContent[mockKey] = mockValue;

      const result = remoteConfigApi.getValueConfiguration<string>(mockKey);

      expect(result).toBe(mockValue);
    });

    it('should throw an error if the specified key does not exist in the configuration', () => {
      const mockKey = 'non-existent-key';

      expect(() => {
        remoteConfigApi.getValueConfiguration<string>(mockKey);
      }).toThrowError(`${Message.CONFIG_NOT_EXIST} for the key = ${mockKey}`);
    });
  });

  describe('getValueConfigurationFromConfiguration', () => {
    it('should return the value for the specified key if it exists in the provided configuration', () => {
      const mockValue = 'mock-value';
      const mockKey = 'mock-key';
      const mockConfiguration = { [mockKey]: mockValue };

      const result = remoteConfigApi.getValueConfigurationFromConfiguration<string>(mockConfiguration, mockKey);

      expect(result).toBe(mockValue);
    });

    it('should throw an error if the specified key does not exist in the provided configuration', () => {
      const mockKey = 'non-existent-key';
      const mockConfiguration = {};

      expect(() => {
        remoteConfigApi.getValueConfigurationFromConfiguration<string>(mockConfiguration, mockKey);
      }).toThrowError(`${Message.CONFIG_NOT_EXIST} for the key = ${mockKey}`);
    });
  });

  describe('getStringValue', () => {
    it('should return the string value for the specified key if it exists', () => {
      const mockValue = 'mock-value';
      const mockKey = 'mock-key';
      mockContent[mockKey] = mockValue;
  
      const result = remoteConfigApi.getStringValue(mockKey);
  
      expect(result).toEqual(mockValue);
    });
  
    it('should throw an error if the key does not exist', () => {
      const mockKey = 'non-existent-key';
  
      expect(() => {
        remoteConfigApi.getStringValue(mockKey);
      }).toThrowError(`${Message.VALUE_NOT_EXIST} for the key = ${mockKey}`);
    });
  });
  
  describe('getNumberValue', () => {
    it('should return the number value for the specified key if it exists', () => {
      const mockValue = 42;
      const mockKey = 'mock-key';
      mockContent[mockKey] = mockValue;
  
      const result = remoteConfigApi.getNumberValue(mockKey);
  
      expect(result).toEqual(mockValue);
    });
  
    it('should throw an error if the key does not exist', () => {
      const mockKey = 'non-existent-key';
  
      expect(() => {
        remoteConfigApi.getNumberValue(mockKey);
      }).toThrowError(`${Message.VALUE_NOT_EXIST} for the key = ${mockKey}`);
    });
  });
  
  describe('getSimpleStringList', () => {
    it('should return the simple string list for the specified key if it exists', () => {
      const mockValue = ['value1', 'value2'];
      const mockKey = 'mock-key';
      mockContent[mockKey] = mockValue;
  
      const result = remoteConfigApi.getSimpleStringList(mockKey);
  
      expect(result).toEqual(mockValue);
    });
  
    it('should throw an error if the key does not exist', () => {
      const mockKey = 'non-existent-key';
  
      expect(() => {
        remoteConfigApi.getSimpleStringList(mockKey);
      }).toThrowError(`${Message.VALUE_NOT_EXIST} for the key = ${mockKey}`);
    });
  });
  
  describe('getSimpleNumberList', () => {
    it('should return the simple number list for the specified key if it exists', () => {
      const mockValue = [1, 2, 3];
      const mockKey = 'mock-key';
      mockContent[mockKey] = mockValue;
  
      const result = remoteConfigApi.getSimpleNumberList(mockKey);
  
      expect(result).toEqual(mockValue);
    });
  
    it('should throw an error if the key does not exist', () => {
      const mockKey = 'non-existent-key';
  
      expect(() => {
        remoteConfigApi.getSimpleNumberList(mockKey);
      }).toThrowError(`${Message.VALUE_NOT_EXIST} for the key = ${mockKey}`);
    });
  });
  
  describe('getObject', () => {
    it('should return the object value for the specified key if it exists', () => {
      const mockValue = { key: 'value' };
      const mockKey = 'mock-key';
      mockContent[mockKey] = mockValue;
  
      const result = remoteConfigApi.getObject(mockKey);
  
      expect(result).toEqual(mockValue);
    });
  
    it('should throw an error if the key does not exist', () => {
      const mockKey = 'non-existent-key';
  
      expect(() => {
        remoteConfigApi.getObject(mockKey);
      }).toThrowError(`${Message.VALUE_NOT_EXIST} for the key = ${mockKey}`);
    });
  });
  
  describe('getKeyValue', () => {
    it('should return the key-value object for the specified key if it exists', () => {
      const mockValue = { key: 'value' };
      const mockKey = 'mock-key';
      mockContent[mockKey] = mockValue;
  
      const result = remoteConfigApi.getKeyValue(mockKey);
  
      expect(result).toEqual(mockValue);
    });
  
    it('should throw an error if the key does not exist', () => {
      const mockKey = 'non-existent-key';
  
      expect(() => {
        remoteConfigApi.getKeyValue(mockKey);
      }).toThrowError(`${Message.VALUE_NOT_EXIST} for the key = ${mockKey}`);
    });
  });
  
  describe('getListValues', () => {
    it('should return the list of values for the specified key if it exists', () => {
      const mockValue = ['value1', 'value2'];
      const mockKey = 'mock-key';
      mockContent[mockKey] = mockValue;
  
      const result = remoteConfigApi.getListValues(mockKey);
  
      expect(result).toEqual(mockValue);
    });
  
    it('should throw an error if the key does not exist', () => {
      const mockKey = 'non-existent-key';
  
      expect(() => {
        remoteConfigApi.getListValues(mockKey);
      }).toThrowError(`${Message.VALUE_NOT_EXIST} for the key = ${mockKey}`);
    });
  });
  
  describe('get', () => {
    it('should return the value for the specified key if it exists', () => {
      const mockValue = 'mock-value';
      const mockKey = 'mock-key';
      mockContent[mockKey] = mockValue;
  
      const result = remoteConfigApi.get(mockKey);
  
      expect(result).toEqual(mockValue);
    });
  
    it('should throw an error if the key does not exist', () => {
      const mockKey = 'non-existent-key';
  
      expect(() => {
        remoteConfigApi.get(mockKey);
      }).toThrowError(`${Message.VALUE_NOT_EXIST} for the key = ${mockKey}`);
    });
  });

  describe('getConfigurationByType', () => {
    it('should return the configuration object if it exists', () => {
      const mockConfig = { key: 'value' };
      const remoteConfigApi = new RemoteConfigApi(mockConfig);
  
      const result = remoteConfigApi.getConfigurationByType();
  
      expect(result).toEqual(mockConfig);
    });
  
    it('should throw an error if the configuration does not exist', () => {
      const remoteConfigApi = new RemoteConfigApi(undefined as any);
  
      expect(() => {
        remoteConfigApi.getConfigurationByType();
      }).toThrowError(Message.CONFIG_NOT_EXIST);
    });
  });
  
  describe('getAllContent', () => {
    it('should return the content object if it exists', () => {
      const mockContent = { key: 'value' };
      const remoteConfigApi = new RemoteConfigApi(mockContent);
  
      const result = remoteConfigApi.getAllContent();
  
      expect(result).toEqual(mockContent);
    });
  
    it('should throw an error if the content does not exist', () => {
      const remoteConfigApi = new RemoteConfigApi(undefined as any);
  
      expect(() => {
        remoteConfigApi.getAllContent();
      }).toThrowError(Message.CONFIG_NOT_EXIST);
    });
  });
  
  describe('getValue', () => {
    it('should return the value for the specified key if it exists', () => {
      const mockValue = 'mock-value';
      const mockKey = 'mock-key';
      const mockContent = { [mockKey]: mockValue };
      const remoteConfigApi = new RemoteConfigApi(mockContent);
  
      const result = remoteConfigApi.getValue(mockKey);
  
      expect(result).toEqual(mockValue);
    });
  
    it('should throw an error if the key does not exist', () => {
      const mockKey = 'non-existent-key';
      const remoteConfigApi = new RemoteConfigApi({});
  
      expect(() => {
        remoteConfigApi.getValue(mockKey);
      }).toThrowError(`${Message.VALUE_NOT_EXIST} for the key = ${mockKey}`);
    });
  });
  
  
});
