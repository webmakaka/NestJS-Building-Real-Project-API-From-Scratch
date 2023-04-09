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

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
