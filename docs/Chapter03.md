# [Oleksandr Kocherhin] NestJS - пишем API для реального проекта с нуля [RUS, 2021]

<br/>

## 03 Модуль авторизации

<br/>

### 011 Знакомимся с миграциями

```
$ yarn db:drop
$ yarn db:create src/migrations/CreateTags
$ yarn db:migrate
```

<br/>

```
SELECT * FROM migrations;
```

<br/>

```
postgresdb=# SELECT * FROM migrations;
 id |   timestamp   |          name
----+---------------+-------------------------
  1 | 1680910391043 | CreateTags1680910391043
(1 row)
```

<br/>

### 012 Подготавливаем запрос для регистрации

```
// CREATE USER
$ curl \
    --header "Content-Type: application/json" \
    --request POST http://localhost:3000/users
```

<br/>

### 013 Что такое DTO?

```
// CREATE USER
$ curl \
    --data '{
        "user": {
            "username": "marley",
            "email": "marley@example.com",
            "password": "pass123"}
    }' \
    --header "Content-Type: application/json" \
    --request POST http://localhost:3000/users \
    | jq
```

**response:**

```
{
  "username": "marley",
  "email": "marley@example.com",
  "password": "pass123"
}
```

<br/>

### 014 Создаем сущность пользователя

<br/>

```
$ yarn add bcrypt
```

<br/>

```
$ yarn db:create src/migrations/CreateUsers
$ yarn db:migrate
```

<br/>

```
postgresdb=# \d users;
```

<br/>

```
                                  Table "public.users"
  Column  |       Type        | Collation | Nullable |              Default
----------+-------------------+-----------+----------+-----------------------------------
 id       | integer           |           | not null | nextval('users_id_seq'::regclass)
 email    | character varying |           | not null |
 bio      | character varying |           | not null | ''::character varying
 image    | character varying |           | not null | ''::character varying
 password | character varying |           | not null |
Indexes:
    "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY, btree (id)
```

<br/>

```
// CREATE USER
```

<br/>

**response:**

```
{
  "username": "marley",
  "email": "marley@example.com",
  "password": "$2b$10$ixzFpXpXkym97huk/Dezz.a8p2CTs94zOx/4uVyLXf5gS.LV1sNzW",
  "id": 1,
  "bio": "",
  "image": ""
}
```

<br/>

```
postgresdb=# SELECT * FROM users;
```

<br/>

```
 id |       email        | bio | image |                           password
----+--------------------+-----+-------+--------------------------------------------------------------
  1 | marley@example.com |     |       | $2b$10$ixzFpXpXkym97huk/Dezz.a8p2CTs94zOx/4uVyLXf5gS.LV1sNzW
(1 row)
```

<br/>

### 015 Генерируем JWT токен

<br/>

```
$ yarn add jsonwebtoken
$ yarn add -D @types/jsonwebtoken
```

<br/>

```
$ yarn db:create src/migrations/AddUsernameToUsers
$ yarn db:drop
$ yarn db:migrate
```

<br/>

```
// CREATE USER
```

<br/>

**response:**

```
{
  "user": {
    "username": "marley",
    "email": "marley@example.com",
    "password": "$2b$10$4dWJKpm4MpihMjHhHhCN8OLsKG2OgS7o4.mO1ZUvwTwxL54bxPDAq",
    "id": 1,
    "bio": "",
    "image": "",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtYXJsZXkiLCJlbWFpbCI6Im1hcmxleUBleGFtcGxlLmNvbSIsImlhdCI6MTY4MDk5NzgwM30.w4U55VwbvbKJvC27g0hYxv64BcIkffi0UGLwibcoGzc"
  }
}
```

<br/>

### 016 Знакомимся с валидацией

<br/>

```
$ yarn add class-validator
$ yarn add class-transformer
```

<br/>

```
// CREATE USER
```

<br/>

**response:**

```
{
  "statusCode": 422,
  "message": "Email or username are taken!"
}
```

<br/>

### 017 Реализуем логин запрос

```
// LOGIN USER
$ curl \
    --data '{
        "user": {
            "email": "marley@example.com",
            "password": "pass123"}
    }' \
    --header "Content-Type: application/json" \
    --request POST http://localhost:3000/users/login \
    | jq
```

<br/>

**response:**

```
{
  "user": {
    "id": 1,
    "email": "marley@example.com",
    "username": "marley",
    "bio": "",
    "image": "",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtYXJsZXkiLCJlbWFpbCI6Im1hcmxleUBleGFtcGxlLmNvbSIsImlhdCI6MTY4MTAwMzQwNn0.mbJsY9_n1kAeWNxYrPae7AY3j2aPfoG59ZmraaLSn4U"
  }
}
```

<br/>

### 018 Middleware авторизации

```
// GET AUTH TOKEN
$ AUTH_TOKEN=$(curl \
     --data '{
        "user": {
            "email": "marley@example.com",
            "password": "pass123"}
       }' \
     --header "Content-Type: application/json" \
     --request POST http://localhost:3000/users/login \
     | jq -r '.user.token')
```

<br/>

```
$ echo ${AUTH_TOKEN}
```

<br/>

```
// GET CURRENT USER
$ curl \
    --header "Authorization: Token ${AUTH_TOKEN}" \
    --header "Content-Type: application/json" \
    --request GET http://localhost:3000/user \
    | jq
```

<br/>

**response:**

```
{
  "user": {
    "id": 1,
    "email": "marley@example.com",
    "username": "marley",
    "bio": "",
    "image": "",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtYXJsZXkiLCJlbWFpbCI6Im1hcmxleUBleGFtcGxlLmNvbSIsImlhdCI6MTY4MTAzNTY0M30.gcDVkUXglBdxRbMCD52I8xZNHXG7l4FiD9n-AXshOGE"
  }
}
```

<br/>

Нужно смотреть ответ от middleware в консоли:

<br/>

**console output:**

```
req.user UserEntity {
  id: 1,
  email: 'marley@example.com',
  username: 'marley',
  bio: '',
  image: ''
}
```

<br/>

### 019 Создаем декоратор для пользователя

<br/>

```
// GET CURRENT USER
```

<br/>

**console output:**

```
currentUserId 1
```

<br/>

### 020 Guard для авторизации

```
$ export AUTH_TOKEN='wrong-token'
```

<br/>

```
// GET CURRENT USER
```

<br/>

**response:**

```
{
  "statusCode": 401,
  "message": "Not authorized!"
}
```

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
