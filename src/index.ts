import { ConnectBase } from "./connect";
import { EmployeeService } from "./services/employee-service";
import { PayrollService } from "./services/payroll-service";

export { AsureForceConnectConfig } from "./types/AsureForceConfig";
export { AsureForceEmployee, AsureForceEmployeeLevel } from "./types/AsureForceEmployee";

export class AsureForceConnect extends EmployeeService(PayrollService(ConnectBase)) { }