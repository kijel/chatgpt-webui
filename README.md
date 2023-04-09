<div align="center">
<img src="./docs/images/icon.svg" alt="icon"/>

<h1 align="center">ChatGPT Next Web</h1>

Хорошо продуманный веб-интерфейс ChatGPT на Vercel.

[🍴forked from Yidadaa/ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web/)

![cover](./docs/images/cover.png)

</div>

## Как запустить

1. Нужно достать [OpenAI API Key](https://platform.openai.com/account/api-keys);
2. Развернуть приложение через докер
   1. `docker run -d -p 3000:3000 -e OPENAI_API_KEY="ваш OpenAI API Key" -e CODE="" jnqa/chatgpt-webui:latest`
   2. В `CODE="124,passwerd"` можно указать коды доступа через запятую, если хотите ограничить доступ.
3. Наслаждаться :)

## 👀 Посмотреть
Можно посмотреть как работает наша модификация на [тут](http://chatgpt.kijel.fun/), но без кода доступа не будет доступа💁🏻‍♂️

## Коды/Пароли доступа

Этот проект можно настроить с ограниченным контролем доступа. Добавьте переменную среды с именем `CODE`. Значение должно быть паролем, разделенным запятой, например:

```
docker run -d -p 3000:3000 -e OPENAI_API_KEY="ваш OpenAI API Key" -e CODE="code1,code2,code3" jnqa/chatgpt-webui:latest
```


## Environment Variables / Переменные окружения

### `OPENAI_API_KEY` (обязательно)

Ваш openai api key.

### `CODE` (по желанию)

Коды доступа разделённые запятой.

### `BASE_URL` (по желанию)

> Default: `api.openai.com`

Переопределить базовый URL-адрес запроса openai API.

### `PROTOCOL` (по желанию)

> По умолчанию: `https`

> Значения: `http` | `https`

Переопределить протокол запроса openai API.

## Development

Перед началом разработки вы должны создать новый файл `.env.local` в корне проекта и поместить в него свой ключ API:

```
OPENAI_API_KEY=<ваш api key здесь>
```

### Local Development

```shell
# 1. install nodejs and yarn first
# 2. config local env vars in `.env.local`
# 3. run
yarn install
yarn dev
```

## Скриншоты разработчика Yidadaa

![Settings](./docs/images/settings.png)

![More](./docs/images/more.png)
