# [Oleksandr Kocherhin] NestJS - пишем API для реального проекта с нуля [RUS, 2021]

<br/>

[Аналогичный проект с кодом на 2021 год](https://github.com/webmakaka/NestJS-Building-Real-Project-API-From-Scratch-v1.1)

<br/>

```
$ sudo apt install -y jq
```

<br/>

```
$ volta install node@18 npm@9 yarn@3
```

<br/>

```
$ npm install -g @nestjs/cli
$ npm install -g typescript
```

<br/>

```
$ nest -v
9.3.0
```

<br/>

## Запуск

<br/>

```
$ git clone https://github.com/webmakaka/NestJS-Building-Real-Project-API-From-Scratch.git
$ cd /NestJS-Building-Real-Project-API-From-Scratch/app
$ yarn install
$ yarn start
```

<br/>

```
$ cd app
$ yarn db:drop
$ yarn db:migrate
$ yarn db:seed
```

<br/>

```
$ git clone https://github.com/gothinkster/realworld.git
$ cd /realworld/api

$ export APIURL=http://localhost:3000/api
$ export USERNAME=marley
$ export EMAIL=marley@example.com
$ export PASSWORD=pass123

$ ./run-api-tests.sh
```

<br/>

```
┌─────────────────────────┬──────────────────┬──────────────────┐
│                         │         executed │           failed │
├─────────────────────────┼──────────────────┼──────────────────┤
│              iterations │                1 │                0 │
├─────────────────────────┼──────────────────┼──────────────────┤
│                requests │               32 │                0 │
├─────────────────────────┼──────────────────┼──────────────────┤
│            test-scripts │               48 │                2 │
├─────────────────────────┼──────────────────┼──────────────────┤
│      prerequest-scripts │               18 │                0 │
├─────────────────────────┼──────────────────┼──────────────────┤
│              assertions │              303 │               49 │
├─────────────────────────┴──────────────────┴──────────────────┤
│ total run duration: 17.4s                                     │
├───────────────────────────────────────────────────────────────┤
│ total data received: 11.77kB (approx)                         │
├───────────────────────────────────────────────────────────────┤
│ average response time: 19ms [min: 4ms, max: 81ms, s.d.: 18ms] │
└───────────────────────────────────────────────────────────────┘
```

<br/>

## Разработка

### [01 Подготавливаем инструменты](./docs/Chapter01.md)

### [02 Модуль тегов](./docs/Chapter02.md)

### [03 Модуль авторизации](./docs/Chapter03.md)

### [04 Модуль статьи](./docs/Chapter04.md)

### [05 Модуль профиля](./docs/Chapter05.md)

### [06 Последние улучшения](./docs/Chapter06.md)

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
