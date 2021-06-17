import { AFTimeCardBulkQueryString, AFTimeCardQueryString } from "../types/AsureForceQueries";
import { GConstructor, IConnectBase } from "../types/mixin"
import { Timecard } from "../types/Timecard";
import { TimecardBulk } from "../types/TimecardBulk";

export const TimecardService = <TBase extends GConstructor<IConnectBase>>(Base: TBase) => {
    return class extends Base {
        async getTimecards(employeeNumber: number, processingDate: Date, queries?: AFTimeCardQueryString) {
            const procDate = processingDate.toISOString().slice(0, 10);
            const queryParameters = this.processQueryParameters(queries);
            const { data } = await this.http.get<Timecard[]>(`/webapi/timecards/${employeeNumber}/payrolldata/${procDate}${queryParameters}`);
            return data;
        }

        async getTimecardsBulk(employeeKey: string, processingDate: Date, queries?: AFTimeCardBulkQueryString) {
            const procDate = processingDate.toISOString().slice(0, 10);
            const queryParameters = this.processQueryParameters(queries);
            const { data } = await this.http.get<TimecardBulk[]>(`/webapi/timecards/${employeeKey}/bulkhours/${procDate}${queryParameters}`);
            return data;
        }
    }
}
