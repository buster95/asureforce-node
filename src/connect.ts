import axios, { AxiosInstance } from "axios";
import { AsureForceConnectConfig } from "./types/AsureForceConfig";

class ConnectBase {
  http: AxiosInstance;

  constructor(public readonly config: AsureForceConnectConfig) {
    this.http = axios.create({
      baseURL: this.config.baseURL,
      auth: {
        username: this.config.user,
        password: this.config.pass,
      },
    });
  }
}

export { ConnectBase };
