# [Oleksandr Kocherhin] NestJS - пишем API для реального проекта с нуля [RUS, 2021]

<br/>

## 04 Модуль статьи

<br/>

### 022 Создание модуля статьи

```
$ yarn db:create src/migrations/CreateArticles
$ yarn db:drop
$ yarn db:migrate
```

<br/>

```
postgresdb=# \d articles;
                                          Table "public.articles"
     Column     |            Type             | Collation | Nullable |               Default
----------------+-----------------------------+-----------+----------+--------------------------------------
 id             | integer                     |           | not null | nextval('articles_id_seq'::regclass)
 slug           | character varying           |           | not null |
 title          | character varying           |           | not null |
 description    | character varying           |           | not null | ''::character varying
 body           | character varying           |           | not null | ''::character varying
 createdAt      | timestamp without time zone |           | not null | now()
 updatedAt      | timestamp without time zone |           | not null | now()
 tagList        | text                        |           | not null |
 favoritesCount | integer                     |           | not null | 0
Indexes:
    "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY, btree (id)

```

<br/>

### 023 Создание метода статьи

<br/>

```
$ yarn db:create src/migrations/AddRelationsBetweenArticleAndUser
$ yarn db:migrate
```

<br/>

```
postgresdb=# \d articles;
                                  Table "public.users"
  Column  |       Type        | Collation | Nullable |              Default
----------+-------------------+-----------+----------+-----------------------------------
 id       | integer           |           | not null | nextval('users_id_seq'::regclass)
 email    | character varying |           | not null |
 bio      | character varying |           | not null | ''::character varying
 image    | character varying |           | not null | ''::character varying
 password | character varying |           | not null |
 username | character varying |           | not null |
Indexes:
    "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "articles" CONSTRAINT "FK_65d9ccc1b02f4d904e90bd76a34" FOREIGN KEY ("authorId") REFERENCES users(id)
```

<br/>

```
postgresdb=# \d users;
                                          Table "public.articles"
     Column     |            Type             | Collation | Nullable |               Default
----------------+-----------------------------+-----------+----------+--------------------------------------
 id             | integer                     |           | not null | nextval('articles_id_seq'::regclass)
 slug           | character varying           |           | not null |
 title          | character varying           |           | not null |
 description    | character varying           |           | not null | ''::character varying
 body           | character varying           |           | not null | ''::character varying
 createdAt      | timestamp without time zone |           | not null | now()
 updatedAt      | timestamp without time zone |           | not null | now()
 tagList        | text                        |           | not null |
 favoritesCount | integer                     |           | not null | 0
 authorId       | integer                     |           |          |
Indexes:
    "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "FK_65d9ccc1b02f4d904e90bd76a34" FOREIGN KEY ("authorId") REFERENCES users(id)

```

<br/>

```
// CREATE ARTICLE
$ curl \
    --data '{
        "article": {
            "title": "How to train your dragon",
            "description": "Ever wonder how?",
            "body": "You have to believe",
            "tagList": ["reactjs", "angularjs", "dragons"]
        }
    }' \
    --header "Content-Type: application/json" \
    --header "Authorization: Token ${AUTH_TOKEN}" \
    --request POST http://localhost:3000/articles \
    | jq
```

<br/>

**returns:**

```
{
  "title": "How to train your dragon",
  "description": "Ever wonder how?",
  "body": "You have to believe",
  "tagList": [
    "reactjs",
    "angularjs",
    "dragons"
  ],
  "slug": "foo",
  "author": {
    "id": 1,
    "email": "marley@example.com",
    "username": "marley",
    "bio": "",
    "image": ""
  },
  "id": 1,
  "createdAt": "2023-04-09T15:29:48.011Z",
  "updatedAt": "2023-04-09T15:29:48.011Z",
  "favoritesCount": 0
}
```

<br/>

### 024 Заканчиваем создание статьи

```
$ yarn add slugify
```

```
// CREATE ARTICLE
```

<br/>

**returns:**

```
{
  "article": {
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "You have to believe",
    "tagList": [
      "reactjs",
      "angularjs",
      "dragons"
    ],
    "slug": "how-to-train-your-dragon-ct9eta",
    "author": {
      "id": 1,
      "email": "marley@example.com",
      "username": "marley",
      "bio": "",
      "image": ""
    },
    "id": 2,
    "createdAt": "2023-04-09T16:18:33.332Z",
    "updatedAt": "2023-04-09T16:18:33.332Z",
    "favoritesCount": 0
  }
}
```

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
