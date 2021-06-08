import axios, { AxiosInstance } from "axios";
import { AsureForceConnectConfig } from "./types/AsureForceConfig";
import { AsureForceEmployee } from "./types/AsureForceEmployee";

class AsureForceConnect {
  http: AxiosInstance;

  constructor(private readonly config: AsureForceConnectConfig) {
    this.http = axios.create({
      baseURL: this.config.baseURL,
      auth: {
        username: this.config.user,
        password: this.config.pass,
      },
    });
  }

  async getEmployee(employeeKey: string) {
    const { data } = await this.http.get<AsureForceEmployee>(
      `/webapi/2/employees/${employeeKey}?$select=Id,Key,EmployeeNumber`
    );
    return data;
  }
}

export { AsureForceConnect };
