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

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
