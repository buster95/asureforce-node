import axios, { AxiosInstance } from "axios";
import { AsureForceConnectConfig } from "./types/AsureForceConfig";
import { AsureQueryParameters } from "./types/AsureForceQueries";

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

  processQueryParameters(queries?: AsureQueryParameters<any>) {
    let querySight = '';
    let querySelect: string = '';
    let queryExpand: string = '';
    let querySkip: string = '';
    let queryTop: string = '';

    if (queries?.$select !== undefined && queries.$select.length > 0)
      querySelect = this.processSelect(queries.$select);
    if (queries?.$expand !== undefined && queries.$expand.length > 0)
      queryExpand = `${(querySelect === '') ? '' : '&'}${this.processExpand(queries.$expand)}`;
    if (queries?.$skip !== undefined && queries.$skip >= 0)
      querySkip = `${(querySelect === '' && queryExpand === '') ? '' : '&'}${this.processSkip(queries.$skip)}`;
    if (queries?.$top !== undefined && queries.$top >= 0)
      queryTop = `${(querySelect === '' && queryExpand === '' && querySkip === '') ? '' : '&'}${this.processTop(queries.$top)}`;

    if (querySelect !== '' || queryExpand !== '' || querySkip !== '' && queryTop !== '') querySight = '?';
    const concatQueries = `${querySight}${querySelect}${queryExpand}${querySkip}${queryTop}`;
    if (this.debugEnabled) console.log(concatQueries);
    return concatQueries;
  }

  processSelect(queryParams?: (string | number | symbol)[]) {
    if (queryParams !== undefined && queryParams.length > 0) return `$select=${queryParams.join(',')}`;
    return '';
  }

  processExpand(queryParams?: (string | number | symbol)[]) {
    if (queryParams !== undefined && queryParams.length > 0) return `$expand=${queryParams.join(',')}`;
    return '';
  }

  processSkip(skip?: number) {
    if (skip !== undefined && skip >= 0) return `$skip=${skip}`;
    return '';
  }

  processTop(top?: number) {
    if (top !== undefined && top >= 0) return `$top=${top}`;
    return '';
  }
}

export { ConnectBase };
