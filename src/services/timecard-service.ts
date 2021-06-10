import { GConstructor, IConnectBase } from "../types/mixin"
import { Timecard } from "../types/Timecard";

export const TimecardService = <TBase extends GConstructor<IConnectBase>>(Base: TBase) => {
    return class extends Base {
        async getTimecards(employeeNumber: number, processingDate: Date) {
            const procDate = processingDate.toISOString().slice(0, 10);
            const { data } = await this.http.get<Timecard[]>(`/webapi/timecards/${employeeNumber}/payrolldata/${procDate}`);
            return data;
        }
    }
}
