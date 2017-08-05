import Request from "./Request";
import XhrRequest from "../XhrRequest";
export default class UserEntitiesRequest extends Request {
  constructor(apiAiClient, options = {}) {
    super(apiAiClient, options);
    this.apiAiClient = apiAiClient;
    this.userEntityName = options.userEntityName;
    this.entities = options.entities;
  }

  postUserEntity() {
    if (!this.userEntityName) {
      throw new ApiAiClientConfigurationError("userEntityName should not be empty")
    }
    if (!this.entities || !Array.isArray(this.entities)) {
      throw new ApiAiClientConfigurationError("Entity Entry object should not be empty and use array")
    }
    this.requestMethod = XhrRequest.Method.PUT;
    this.uri = this.apiAiClient.getApiBaseUrl() + `userEntities/${userEntityName}/?v=${this.apiAiClient.getApiVersion()}`;
    this.options.entities = this.entities;
  }

  updateUserEntity() {
    if (!this.userEntityName) {
      throw new ApiAiClientConfigurationError("userEntityName should not be empty")
    }
    if (!this.entities || !Array.isArray(this.entities)) {
      throw new ApiAiClientConfigurationError("Entity Entry object should not be empty and use array")
    }
    this.requestMethod = XhrRequest.Method.POST;
    this.uri = this.apiAiClient.getApiBaseUrl() + `userEntities/${userEntityName}/?v=${this.apiAiClient.getApiVersion()}`;
    this.options.entities = this.entities;
  }

  getUserEntity() {
    if (!this.userEntityName) {
      throw new ApiAiClientConfigurationError("userEntityName should not be empty")
    }
    this.requestMethod = XhrRequest.Method.GET;
    this.uri = this.apiAiClient.getApiBaseUrl() + `userEntities/${userEntityName}/?v=${this.apiAiClient.getApiVersion()}`;
  
  }
}
