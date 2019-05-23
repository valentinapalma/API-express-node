# Weekly Assignments

## Week 20
### GET User
Input for all Users in database:
```
curl -X GET localhost:2000/user | jq .
```
<details>
  <summary> Output: </summary>
  <p>
    
```
[
  {
    "address": {
      "street": "Kulas Light",
      "city": "Gwenborough",
      "zipcode": "92998"
    },
    "_id": "5ce52123ea20d73f9c24fd4f",
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "__v": 0
  },
  {
    "address": {
      "street": "Victor Plains",
      "city": "Wisokyburgh",
      "zipcode": "90566"
    },
    "_id": "5ce521a2ea20d73f9c24fd50",
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shana@melissa.tv",
    "__v": 0
  },
  {
    "address": {
      "street": "Lebsack Ln.",
      "city": "Elvis South",
      "zipcode": "76920"
    },
    "_id": "5ce651a6dc91af115c7bc99b",
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yenisa.net",
    "__v": 0
  },
  {
    "address": {
      "street": "Lebsack Ln."
    },
    "_id": "5ce65221dc91af115c7bc99c",
    "name": "Patrick Lebsack",
    "username": "Karianne",
    "email": "Julianne@kory.net",
    "__v": 0
  }
]
```
    
  </p></details>

Input for single user:

```
curl -X GET localhost:2000/user/5ce52123ea20d73f9c24fd4f | jq .
```

<details>
  <summary> Output: </summary>
  <p>
  
```
{
  "address": {
    "street": "Kulas Light",
    "city": "Gwenborough",
    "zipcode": "92998"
  },
  "_id": "5ce52123ea20d73f9c24fd4f",
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "__v": 0
}
```
  </p></details>
  
### POST
Input to add a user to the database:
```
curl -i -X POST -H "Content-Type:application/json" localhost:2000/user -d'{
  "name": "Aaron", 
  "username":"LittleAaron", 
  "email":"aaron@april.biz", 
  "address" : {
      "street":"Fleur De Lis",
      "city":"Arlington",
      "zipcode":"76012"
      }
   }'
```   
<details>
  <summary> Output: </summary>
  <p>
   
```
TP/1.1 201 Created
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 30
ETag: W/"1e-YTx+dLO2dm61SruAw5IffrD4+8E"
Date: Thu, 23 May 2019 09:46:51 GMT
Connection: keep-alive

 -LittleAaron has been added.-
```

</p></details>

## DELETE
Input to remove a user:
```
curl -i -X DELETE localhost:2000/user/5ce66c0b0fd2ed2b70d43923
```
<details>
  <summary> Output: </summary>
  <p>

```
TP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 32
ETag: W/"20-N0LX8yKQ/nqR4oZfDOSICcIq7To"
Date: Thu, 23 May 2019 09:51:29 GMT
Connection: keep-alive

 -LittleAaron has been deleted.-
```

  </p></details>
