import { AsureForceConnect } from "..";
import path from 'path';
import { config } from 'dotenv';
config({ path: path.resolve(__dirname, '.env') });

(async () => {
    const connector = new AsureForceConnect({
        baseURL: process.env.ASURE_URL || '',
        user: process.env.ASURE_URL || '',
        pass: process.env.ASURE_URL || '',
    });

    const employee = await connector.getEmployee("34cd7c62-6e8b-413a-8b63-264eba01948d", {
        $select: ['Id', 'Key', 'FirstName', 'LastName', 'EmployeeNumber', 'EmployeeStatus'],
        $expand: ['EmployeeStatus']
    });
    // const employees = await connector.getEmployees({
    //     $select: ['Id', 'Key', 'FirstName', 'LastName', 'EmployeeNumber'],
    //     $skip: 0,
    //     $top: 10
    // });
    // console.log(employees[0]);
    console.log(employee);
})();