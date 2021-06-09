import { IConnectBase, GConstructor } from "../types/mixin";

export const PayrollService = <TBase extends GConstructor<IConnectBase>>(
  Base: TBase
) => {
  return class extends Base {
    async getPayroll() {
      // const { data } = await this.http.get<{ adios: string }>(
      //   `webapi/2/employees/${employeeId}/levels`
      // );
      // return data;
      return "hola";
    }
  };
};
