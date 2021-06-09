import { AsureForceEmployee } from "..";
import { AFEmployeeQueryString } from "../types/AsureForceEmployee";
import { IConnectBase, GConstructor } from "../types/mixin";

export const EmployeeService = <TBase extends GConstructor<IConnectBase>>(
  Base: TBase
) => {
  return class extends Base {
    processQueries(queries?: AFEmployeeQueryString) {
      let querySight = '';
      let querySelect: string = '';
      let queryExpand: string = '';
      let querySkip: string = '';
      let queryTop: string = '';
      if (queries?.$select !== undefined && queries.$select.length > 0) { querySelect = `$select=${queries.$select.join(',')}`; }
      if (queries?.$expand !== undefined && queries.$expand.length > 0) { queryExpand = `${querySelect !== '' ? '&' : ''}$expand=${queries.$expand.join(',')}`; }
      if (queries?.$skip !== undefined && queries.$skip >= 0) { querySkip = `${(querySelect !== '' || queryExpand !== '') ? '&' : ''}$skip=${queries.$skip}`; }
      if (queries?.$top && queries.$top >= 0) {
        queryTop = `${(querySelect !== '' || queryExpand !== '' || querySkip !== '') ? '&' : ''}$top=${queries.$top}`;
      }

      if (querySelect !== '' || queryExpand !== '') querySight = '?';
      const concatQueries = `${querySight}${querySelect}${queryExpand}${querySkip}${queryTop}`;
      console.log(concatQueries);
      return concatQueries;
    }

    async getEmployees(queries?: AFEmployeeQueryString) {
      const concatQueries = this.processQueries(queries);
      const { data } = await this.http.get<AsureForceEmployee[]>(`/webapi/2/employees${concatQueries}`);
      return data;
    }

    async getEmployee(employeeKey: string, queries?: AFEmployeeQueryString) {
      const concatQueries = this.processQueries(queries);
      const { data } = await this.http.get<AsureForceEmployee>(`/webapi/2/employees/${employeeKey}${concatQueries}`);
      return data;
    }

    async getLevel(employeeId: string) {
      const { data } = await this.http.get<{ hola: string }>(
        `/webapi/2/employees/${employeeId}/levels`
      );
      return data;
    }
  };
};
