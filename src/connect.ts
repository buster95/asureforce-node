import axios, { AxiosInstance } from "axios";
import { AsureForceConnectConfig } from "./types/AsureForceConfig";

class ConnectBase {
  http: AxiosInstance;
  debugEnabled: boolean = false;

  constructor(public readonly config: AsureForceConnectConfig) {
    this.http = axios.create({
      baseURL: this.config.baseURL,
      auth: {
        username: this.config.user,
        password: this.config.pass,
      },
    });
    this.debugEnabled = config.debugEnabled || false;
  }
}

export { ConnectBase };
