export type EmployeePaygroup = {
    Key: string; //"7fdc1c6b-02e6-4c09-b6ac-1077f2782c3a",
    Id: string; //"STAFF_HR_W",
    Name: string; //"Staffing Hourly - Weekly",
    TimeEntryTechnique: string; //"TimeInOut",
    PayTypes: {
        Key: string; // "3d16ae6c-2f6b-4b4c-9b5f-1e30133957be",
        PayTypeId: string; // "BONUS",
        PayTypeName: string; // "Bonus Earnings",
        ConsideredAbsent: boolean; // false,
        AllowForTimeOff: boolean; // false,
        AllowAccrual: boolean; // false,
        AllowOnCall: boolean; // false,
        AllowRegularHours: boolean; // false,
        AllowMiscHours: boolean; // false,
        AllowMiscAmount: boolean; // true
    }[];
}