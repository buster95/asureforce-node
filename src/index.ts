import { flow } from "./flow";
import { ConnectBase } from "./connect";
import { EmployeeService } from "./services/employee-service";
import { PayrollService } from "./services/payroll-service";
import { TimecardService } from "./services/timecard-service";

export { AsureForceConnectConfig } from "./types/AsureForceConfig";
export { Employee } from "./types/Employee";
export { EmployeeLevel } from "./types/EmployeeLevel";
export { EmployeePaygroup } from "./types/EmployeePaygroup";
export { EmployeeSchedule } from "./types/EmployeeSchedule";

export class AsureForceConnect extends EmployeeService(
    TimecardService(PayrollService(ConnectBase))
) {}

const mixer = flow(EmployeeService, TimecardService, PayrollService);
export class AsureForceConnect2 extends mixer(ConnectBase) {}
