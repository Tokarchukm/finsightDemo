# Demo e2e tests for finsight group

```npm install ```
to install all dependencies



.env file in root folder should contain:
```
TC_BASE_URL=https://users.finsight.com/login?callbackUrl=https%3A%2F%2F17g5.com%2Fapi%2Fv1%2Fuser%2Fset-ssid%3FcallbackUrl%3Dhttps%253A%252F%252Fmanager.finsight.com%252F17g5&tenant=17g5
TC_CLIENT_USERNAME=tokarchukm@gmail.com
TC_CLIENT_PASSWORD=Qatestpassword1
```

To run login tests use command from root directory:
```
testcafe chrome e2eTests/login/login.spec.js 
```

update: *added test to get ssid value. Test is located at random tests folder
