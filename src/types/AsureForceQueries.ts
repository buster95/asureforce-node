import { Employee } from "./Employee";
import { EmployeeLevel } from "./EmployeeLevel";

type FancyProperties<T> = Pick<T, {
    [K in keyof T]: T[K] extends Record<string, any> ? K : never
}[keyof T]>;

export type AsureQueryParameters<T> = {
    $select?: Array<keyof T>;
    $expand?: Array<keyof FancyProperties<T>>;
    $top?: number;
    $skip?: number;
};

export type AFEmployeeQueryString = AsureQueryParameters<Employee>;
export type AFEmployeeLevelQueryString = AsureQueryParameters<EmployeeLevel>;

// const config: AFEmployeeQueryString = {
//   $select: ["EmployeeNumber", "EmployeeStatus"],
//   $expand: ["Company"]
// };