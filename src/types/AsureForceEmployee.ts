export type AsureForceEmployee = {
  Id: string;
  Key: string;
  EmployeeNumber: string;
  SupervisorKey: string; // "ead2c7a1-e902-4a93-81eb-37ec44ca76e9",
  TerminationDate: Date; // "0001-01-01T00:00:00",
  HireDate: Date; // "2019-09-23T00:00:00",
  // set HireDate(v: Date | string) { this._hireDate = new Date(v); }
  // get HireDate(): Date { return this._hireDate; }
  LastName: string; // "Martinez Valerio",
  FirstName: string; // "Miguel",
  PayGroup: {
    Key: string; // "03472511-d269-4033-b807-cd7439e0f6b9",
    Id: string; // "BMD-HRL-3",
    Name: string; // "BMD-HRL-3",
    IsActive: boolean; // true,
    TimeEntryTechnique: string; // "Punch"
  };
  Department: {
    Id: string; // "BMD",
    Key: string; // "9401bf9d-ce22-4849-b2e2-9a2b1a26a6c8",
    Description: string; // "BMD Buckhead Meat Of Dallas",
    IsDefault: boolean; // false,
    ParentKey: string; // "b97e0557-0a4d-4b6d-a2f9-77df92ca8200",
    Type: number; // 4,
    TimeZoneOffset: number; // 0.0,
    NoPay: boolean; // false
  };
  Division: {
    Id: string; // "00c70c638b08",
    Key: string; // "b97e0557-0a4d-4b6d-a2f9-77df92ca8200",
    Description: string; // "Default Division",
    IsDefault: boolean; // true,
    ParentKey: string; // "75de71d8-a932-4127-a6ef-7281895b784e",
    Type: number; // 3,
    PayrollCode: string; // ""
  };
  Location: {
    Id: string;  // "4cb446e14228",
    Key: string;  // "75de71d8-a932-4127-a6ef-7281895b784e",
    Description: string;  // "Default Location",
    IsDefault: boolean;  // true,
    ParentKey: string;  // "1c1558c7-6007-4f69-97ee-ac28197bb845",
    Type: number;  // 2,
    PayrollCode: string;  // ""
  };
  Company: {
    Id: string; // "70063901",
    Key: string; // "1c1558c7-6007-4f69-97ee-ac28197bb845",
    Description: string; // "Startkleen Legacy LLC",
    IsDefault: boolean; // true,
    ParentKey: string; // "541b1458-2f39-4e32-a5b5-febeb360969f",
    Type: number; // 1,
    PayrollCode: string; // ""
  };
  EmployeeStatus: {
    Key: string;  // "4b6fb594-84ab-485b-a047-278b5423622f",
    Code: string;  // "0",
    Description: string;  // "Active",
    StatusClass: number;  // 1
  };
};

export type AsureForceEmployeeLevel = {
  EmployeeKey: string; //"ca499525-203a-4337-b04c-fad4ba6f95c4",
  CompanyEnabled: boolean; //true,
  LocationEnabled: boolean; //false,
  DivisionEnabled: boolean; //false,
  DepartmentEnabled: boolean; //true,
  PositionEnabled: boolean; //false,
  Company: string; //"Startkleen Legacy LLC",
  CompanyId: string; //"70063901",
  CompanyKey: string; //"1c1558c7-6007-4f69-97ee-ac28197bb845",
  Location: string; //"",
  LocationId: string; //"",
  LocationKey: string; //"",
  Division: string; //"",
  DivisionId: string; //"",
  DivisionKey: string; //"",
  Department: string; //"BMD Buckhead Meat Of Dallas",
  DepartmentId: string; //"BMD",
  DepartmentKey: string; //"9401bf9d-ce22-4849-b2e2-9a2b1a26a6c8",
  Position: string; //"",
  PositionId: string; //"",
  PositionKey: string; //""
}

type FancyProperties<T> = Pick<T, {
  [K in keyof T]: T[K] extends Record<string, any> ? K : never
}[keyof T]>;

export type AsureQueryParameters<T> = {
  $select?: Array<keyof T>;
  $expand?: Array<keyof FancyProperties<T>>;
  $top?: number;
  $skip?: number;
};

export type AFEmployeeQueryString = AsureQueryParameters<AsureForceEmployee>;
export type AFEmployeeLevelQueryString = AsureQueryParameters<AsureForceEmployeeLevel>;

// const config: AFEmployeeQueryString = {
//   $select: ["EmployeeNumber", "EmployeeStatus"],
//   $expand: ["Company"]
// };
