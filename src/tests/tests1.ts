import { AsureForceConnect } from "..";
import path from 'path';
import { config } from 'dotenv';
config({ path: path.resolve(__dirname, '.env') });

(async () => {
    const connector = new AsureForceConnect({
        baseURL: process.env.ASURE_URL || '',
        user: process.env.ASURE_USER || '',
        pass: process.env.ASURE_PASS || '',
        debugEnabled: true
    });

    // const employee = await connector.getEmployee("34cd7c62-6e8b-413a-8b63-264eba01948d", {
    //     $select: ['Id', 'Key', 'FirstName', 'LastName', 'EmployeeNumber', 'EmployeeStatus'],
    //     $expand: ['EmployeeStatus']
    // });
    // console.log(employee);

    // const employees = await connector.getEmployees({
    //     $select: ['Id', 'Key', 'FirstName', 'LastName', 'EmployeeNumber'],
    //     $skip: 0,
    //     $top: 10
    // });
    // console.log(employees[0]);

    // const levels = await connector.getLevel("34cd7c62-6e8b-413a-8b63-264eba01948d", {
    //     $select: ['Company']
    // });
    // console.log(levels);

    // const paygroup = await connector.getEmployeePaygroup("34cd7c62-6e8b-413a-8b63-264eba01948d");
    // console.log(paygroup);

    const startDate = new Date('2021-05-17T00:00:00');
    // const endDate = new Date('2021-05-23T00:00:00');
    // const accrualBalance = await connector.getEmployeeAccrualBalance("e97a654e-a542-45f5-88b5-a97032bd7e1f", startDate, endDate);
    // console.log(accrualBalance);

    // const schedule = await connector.getEmployeeSchedule("e97a654e-a542-45f5-88b5-a97032bd7e1f", startDate, endDate);
    // console.log(schedule.DaySchedules[0]);


    const timecards = await connector.getTimecards(116, startDate, {
        $select: ['CompanyID', 'DepartmentID'],
    });
    console.log(timecards);
})();
