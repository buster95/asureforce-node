# ASURE FORCE

### This is a third-party package to connect with Asure Force API
<br>

# Getting Started

```javascript
import { AsureForceConnect } from 'asureforce';

const connect = new AsureForceConnect({
    baseURL: "YOUR_ASURE_FORCE_URL",
    user: "YOUR_USER",
    pass: "YOUR_PASS",
});

await connect.getEmployees({
    $select: [],
    $expand: [],
    $top: 1,
    $skip: 0,
})
await connect.getEmployee('YOUR_EMPLOYEE_KEY', {config})
```

## Asure Force Connector Configuration

| Parameter    | Type    | Required | Default  |
| :----------- | :-----: | :------: | :-------: |
| baseURL      | string  | true     | N/A      |
| user         | string  | true     | N/A      |
| pass         | string  | true     | N/A      |
| debugEnabled | boolean | false    | false    |

## Asure Force QueryOptions
| Parameter | Description     | Type     | Required |
| :-------- | :------------- | :------: | -------: |
| $select   | You can choose any property that you want get in the first level of the main object  | string[] | false |
| $expand   | You only can choose property that will have sub property in the first level of the main object | string[] ||
| $top      | indicates quantity of objects that you want to get | number |false|
| $skip     | indicates quantity of objects that you want to jump | number |false|