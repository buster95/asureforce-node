import { AxiosInstance } from "axios";
import { AsureForceConnectConfig } from "..";
import { AsureQueryParameters } from "./AsureForceQueries";

type GConstructor<T = {}> = new (...args: any[]) => T;
type IConnectBase = {
  http: AxiosInstance;
  config: AsureForceConnectConfig;
  debugEnabled: boolean;

  processQueryParameters: (queries?: AsureQueryParameters<any>) => string;
};

export type AnyFunction<A = any> = (...input: any[]) => A
export type AnyConstructor<A = object> = new (...input: any[]) => A
export type Mixin<T extends AnyFunction> = InstanceType<ReturnType<T>>

// const mixin = (base: IConnectBase, services: GConstructor<IConnectBase>[]) => {
//   return services.reduce((itema, itemb) => {
//     return itema(itemb(base));
//   });
// }

export { GConstructor, IConnectBase };
