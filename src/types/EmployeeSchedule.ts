export type EmployeeSchedule = {
    ReportDate: string;
    ScheduleType: number;
    CanScheduleEmployee: boolean;
    ScheduleSegments: {
        Key: string;  // "e2540fdb-e7a4-43d0-a72e-c695ec2f350a",
        ScheduleType: number;  // 1,
        ReportDate: string;  // "2021-06-01T00:00:00",
        IsSwapSchedule: boolean;  // false,
        RuleKey: string;  // null,
        StartDateTime: string;  // "2021-06-01T22:00:00",
        StopDateTime: string;  // "2021-06-02T06:00:00",
        BreakMinutes: number;  // 0,
        ScheduledMinutes: number;  // 480,
        StartDayPointer: number;  // 0,
        StopDayPointer: number;  // 2,
        OnCall: boolean;  // false,
        PositionKey: string;  // "f067e192-eb0d-4ca1-8b35-340b401ea0c9",
        ShiftKey: string;  // null,
        PayTypeKey: string;  // "4cc95b4c-ed22-48dd-940c-0eba6bbbd30a",
        Position: {
            PayrollCode: string; // "",
            TimeClockNbrInt: number; // 0,
            Id: string; // "3b42b168fb11",
            Key: string; // "f067e192-eb0d-4ca1-8b35-340b401ea0c9",
            Description: string; // "Default Position",
            IsDefault: boolean; // true,
            ParentKey: string; // "ccb05cea-0d53-4d4a-9fc3-b6379b463745",
            Type: number; // 5,
            Children: {
                Id: string; // "430ce2b0-e837",
                Key: string; // "430ce2b0-e5d5-4082-9f8e-06e14f116e0c",
                Description: string; // "",
                IsDefault: boolean; // false,
                ParentKey: string; // "f067e192-eb0d-4ca1-8b35-340b401ea0c9",
                Type: number; // 6,
                Children: any[]; // []
            }[];
        }
    }[];
}