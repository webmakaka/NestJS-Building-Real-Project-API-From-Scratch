# [Oleksandr Kocherhin] NestJS - пишем API для реального проекта с нуля [RUS, 2021]

<br/>

## 05 Модуль профиля

<br/>

### 031 Готовим сид данные для нашей базы

```
$ yarn db:drop
$ yarn db:migrate
$ yarn db:seed
```

<br/>

```
SELECT * FROM users;
```

<br/>

```
// LOGIN USER
```

<br/>

### 032 Реализуем получение профиля

```
// GET PROFILE
$ curl \
    --header "Content-Type: application/json" \
    --header "Authorization: Token ${AUTH_TOKEN}" \
    --request GET "http://localhost:3000/profiles/marley" \
    | jq
```

<br/>

**response:**

```
{
  "profile": {
    "id": 1,
    "username": "marley",
    "bio": "",
    "image": "",
    "following": false
  }
}
```

<br/>

### 033 Имплементируем фоллоу пользователей

Решили делать в ручную

```
$ yarn db:create src/migrations/CreateFollows
$ yarn db:migrate
```

<br/>

```
// CREATE NEW USER
$ curl \
    --data '{
        "user": {
            "username": "webmakaka",
            "email": "webmakaka@example.com",
            "password": "pass123"}
    }' \
    --header "Content-Type: application/json" \
    --request POST http://localhost:3000/users \
    | jq
```

<br/>

```
// FOLLOW USER
$ curl \
    --header "Content-Type: application/json" \
    --header "Authorization: Token ${AUTH_TOKEN}" \
    --request POST "http://localhost:3000/profiles/webmakaka/follow" \
    | jq
```

<br/>

**returns:**

```
{
  "profile": {
    "id": 2,
    "username": "webmakaka",
    "bio": "",
    "image": "",
    "following": true
  }
}
```

<br/>

```
SELECT * FROM follows;
```

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
