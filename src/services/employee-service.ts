import { AFEmployeeLevelQueryString, AFEmployeeQueryString } from "../types/AsureForceQueries";
import { Employee } from "../types/Employee";
import { EmployeeLevel } from "../types/EmployeeLevel";
import { EmployeePaygroup } from "../types/EmployeePaygroup";
import { EmployeeSchedule } from "../types/EmployeeSchedule";
import { IConnectBase, GConstructor } from "../types/mixin";

export const EmployeeService = <TBase extends GConstructor<IConnectBase>>(Base: TBase) => {
    return class extends Base {
        processEmployeeQueries(queries?: AFEmployeeQueryString) {
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
            if (this.debugEnabled) console.log(concatQueries);
            return concatQueries;
        }

        processEmployeeLevelsQueries(queries?: AFEmployeeLevelQueryString) {
            let querySight = '';
            let querySelect: string = '';
            if (queries?.$select !== undefined && queries.$select.length > 0) { querySelect = `$select=${queries.$select.join(',')}`; }
            if (querySelect !== '') querySight = '?';
            const concatQueries = `${querySight}${querySelect}`;
            if (this.debugEnabled) console.log(concatQueries);
            return concatQueries;
        }

        async getEmployees(queries?: AFEmployeeQueryString) {
            const concatQueries = this.processEmployeeQueries(queries);
            const { data } = await this.http.get<Employee[]>(`/webapi/2/employees${concatQueries}`);
            return data;
        }

        async getEmployee(employeeKey: string, queries?: AFEmployeeQueryString) {
            const concatQueries = this.processEmployeeQueries(queries);
            const { data } = await this.http.get<Employee>(`/webapi/2/employees/${employeeKey}${concatQueries}`);
            return data;
        }

        async getEmployeePaygroup(employeeKey: string) {
            const { data } = await this.http.get<EmployeePaygroup>(`/webapi/2/employees/${employeeKey}/paygroup`);
            return data;
        }

        async getEmployeeSchedule(employeeKey: string, startDate: Date, endDate: Date) {
            const start = startDate.toISOString().slice(0, 10);
            const end = endDate.toISOString().slice(0, 10);
            const endpoint = `/webapi/2/employees/${employeeKey}/schedule/${start}/${end}`;
            if (this.debugEnabled) console.log(endpoint);
            const { data } = await this.http.get<{ DaySchedules: EmployeeSchedule[] }>(endpoint);
            return data;
        }

        async getEmployeeAccrualBalance(employeeKey: string, startDate: Date, endDate: Date) {
            const start = startDate.toISOString().slice(0, 10);
            const end = endDate.toISOString().slice(0, 10);
            const endpoint = `/webapi/2/employees/${employeeKey}/accrualbalance/${start}/${end}`;
            if (this.debugEnabled) console.log(endpoint);
            const { data } = await this.http.get(endpoint);
            return data;
        }

        async getLevel(employeeKey: string, queries?: AFEmployeeLevelQueryString) {
            const concatQueries = this.processEmployeeLevelsQueries(queries);
            const { data } = await this.http.get<EmployeeLevel>(`/webapi/2/employees/${employeeKey}/levels${concatQueries}`);
            return data;
        }
    };
};
