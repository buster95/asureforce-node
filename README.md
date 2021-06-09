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

await connect.getEmployees()
await connect.getEmployee('YOUR_EMPLOYEE_KEY')
```
