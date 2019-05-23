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

Output:

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
