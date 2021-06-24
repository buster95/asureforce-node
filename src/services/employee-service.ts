import { AFEmployeeLevelQueryString, AFEmployeeQueryString } from "../types/AsureForceQueries";
import { Employee } from "../types/Employee";
import { EmployeeLevel } from "../types/EmployeeLevel";
import { EmployeePaygroup } from "../types/EmployeePaygroup";
import { EmployeeSchedule } from "../types/EmployeeSchedule";
import { IConnectBase, GConstructor } from "../types/mixin";
import { parseWithDate, parseWithDate2 } from "../utils/datetime";

export const EmployeeService = <TBase extends GConstructor<IConnectBase>>(Base: TBase) => {
    return class extends Base {
        async getEmployees(queries?: AFEmployeeQueryString) {
            const concatQueries = this.processQueryParameters(queries);
            const { data } = await this.http.get<Employee[]>(`/webapi/2/employees${concatQueries}`);
            return data.map(item => parseWithDate2<Employee>(item));
        }

        async getEmployee(employeeKey: string, queries?: AFEmployeeQueryString) {
            const concatQueries = this.processQueryParameters(queries);
            const { data } = await this.http.get<Employee>(`/webapi/2/employees/${employeeKey}${concatQueries}`);
            return parseWithDate2<Employee>(data);
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
            const concatQueries = this.processQueryParameters(queries);
            const { data } = await this.http.get<EmployeeLevel>(`/webapi/2/employees/${employeeKey}/levels${concatQueries}`);
            return data;
        }
    };
};
