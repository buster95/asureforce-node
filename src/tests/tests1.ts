import { AsureForceConnect, Employee } from "..";
import path from 'path';
import { config } from 'dotenv';
import { parseWithDate, parseWithDate2 } from "../utils/datetime";
config({ path: path.resolve(__dirname, '.env') });

(async () => {
    const connector = new AsureForceConnect({
        baseURL: process.env.ASURE_URL || '',
        user: process.env.ASURE_USER || '',
        pass: process.env.ASURE_PASS || '',
        debugEnabled: true
    });

    const employee = await connector.getEmployee("34cd7c62-6e8b-413a-8b63-264eba01948d", {
        $select: ['Id', 'Key', 'FirstName', 'LastName', 'EmployeeNumber', 'EmployeeStatus', 'TerminationDate'],
        $expand: ['EmployeeStatus']
    });
    console.log(employee.TerminationDate);
    console.log(employee.TerminationDate.getDate());

    // const employees = await connector.getEmployees({
    //     $select: ['Id', 'Key', 'FirstName', 'LastName', 'EmployeeNumber'],
    // $skip: 0,
    // $top: 10
    // });
    // console.time('Execution time1');
    // console.log(employees.length);
    // console.timeEnd('Execution time1');

    // console.time('Execution time3');
    // const employees3 = employees.map(item => parseWithDate<Employee>(JSON.stringify(item)));
    // console.log(employees3.length);
    // console.timeEnd('Execution time3');

    // console.time('Execution time2');
    // const employee2 = employees.map(item => parseWithDate2<Employee>(item));
    // console.log(employee2.length);
    // console.timeEnd('Execution time2');


    // const levels = await connector.getLevel("34cd7c62-6e8b-413a-8b63-264eba01948d", {
    //     $select: ['Company']
    // });
    // console.log(levels);

    // const paygroup = await connector.getEmployeePaygroup("34cd7c62-6e8b-413a-8b63-264eba01948d");
    // console.log(paygroup);

    // const startDate = new Date('2021-05-17T00:00:00');
    // const endDate = new Date('2021-05-23T00:00:00');
    // const accrualBalance = await connector.getEmployeeAccrualBalance("e97a654e-a542-45f5-88b5-a97032bd7e1f", startDate, endDate);
    // console.log(accrualBalance);

    // const schedule = await connector.getEmployeeSchedule("e97a654e-a542-45f5-88b5-a97032bd7e1f", startDate, endDate);
    // console.log(schedule.DaySchedules[0]);


    // const timecards = await connector.getTimecards(116, startDate, {
    //     $select: ['CompanyID', 'DepartmentID'],
    // });
    // console.log(timecards);
})();
