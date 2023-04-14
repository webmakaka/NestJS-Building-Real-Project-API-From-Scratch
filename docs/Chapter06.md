# [Oleksandr Kocherhin] NestJS - пишем API для реального проекта с нуля [RUS, 2021]

<br/>

## 06 Последние улучшения

<br/>

### 036 Улучшаем бекенд валидацию

<br/>

```
// ERRORS HANDLER CHECK
$ curl \
    --data '{
        "article": {
        }
    }' \
    --header "Content-Type: application/json" \
    --header "Authorization: Token ${AUTH_TOKEN}" \
    --request POST http://localhost:3000/articles \
    | jq
```

<br/>

**response:**

```
{
  "errors": {
    "title": [
      "title should not be empty"
    ],
    "description": [
      "description should not be empty"
    ],
    "body": [
      "body should not be empty"
    ]
  }
}
```

<br/>

```
// CREATE USER
```

<br/>

**response:**

```
{
  "errors": {
    "email": "has already been taken!",
    "username": "has already been taken!"
  }
}
```

<br/>

```
// LOGIN USER WITH WRONG LOGIN/PASSWORD
```

<br/>

**response:**

```
{
  "errors": {
    "email or password": "is invalid"
  }
}
```

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
