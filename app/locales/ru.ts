import { SubmitKey } from "../store/app";
import type { LocaleType } from "./index";

const ru: LocaleType = {
  WIP: "WIP...",
  Error: {
    Unauthorized:
      "Нет доступа! Необходимо ввести код доступа на странице настроек.",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} сообщений`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} сообщений с ChatGPT`,
    Actions: {
      ChatList: "К списку чатов",
      CompressedHistory: "Сжатая история Memory Prompt",
      Export: "Экспортировать все сообщения в разметке Markdown",
      Copy: "копировать",
      Stop: "остановаить",
      Retry: "повторить",
    },
    Rename: "переименовать чат",
    Typing: "печатает…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} отправить`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter для переноса";
      }
      return inputHints + ", / поиск prompts";
    },
    Send: "Отправить",
  },
  Export: {
    Title: "Все сообщения",
    Copy: "Копировать всё",
    Download: "Скачать",
    MessageFromYou: "Твоё сообщение",
    MessageFromChatGPT: "Сообщение ChatGPT",
  },
  Memory: {
    Title: "Memory Prompt",
    EmptyContent: "Nothing yet.",
    Send: "Использовать Memory",
    Copy: "Копировать Memory",
    Reset: "Обнулить сессию",
    ResetConfirm:
      "Сброс очистит текущую историю разговоров и историческую память. Вы уверены, что хотите выполнить сброс?",
  },
  Home: {
    NewChat: "Новый чат",
    DeleteChat: "Подтвердить удаление выбранного разговора?",
    DeleteToast: "Чат удалён",
    Revert: "Откатить",
  },
  Settings: {
    Title: "Настройки",
    SubTitle: "это все настройки",
    Actions: {
      ClearAll: "Очистить все данные",
      ResetAll: "Очистить все настройки",
      Close: "Закрыть",
      ConfirmResetAll: {
        Confirm: "Вы уверены, что хотите сбросить все настройки?",
      },
      ConfirmClearAll: {
        Confirm: "Вы уверены, что хотите сбросить весь чат?",
      },
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      Options: {
        cn: "简体中文",
        en: "English",
        tw: "繁體中文",
        es: "Español",
        it: "Italiano",
        ru: "Русский",
      },
    },
    Avatar: "Аватар",
    FontSize: {
      Title: "Размер  шрифта",
      SubTitle: "Настройте размер шрифта чата",
    },
    Update: {
      Version: (x: string) => `Версия: ${x}`,
      IsLatest: "Последняя версия",
      CheckUpdate: "Проверить обновления",
      IsChecking: "Проверка обновления...",
      FoundUpdate: (x: string) => `Найдена новая версия: ${x}`,
      GoToUpdate: "Обновить",
    },
    SendKey: "Отправить ключ",
    Theme: "Тема",
    TightBorder: "По ширине экрана",
    SendPreviewBubble: "Отправлять превью сообщения",
    Prompt: {
      Disable: {
        Title: "Отключить автозаполнение",
        SubTitle: "Ввод / для запуска автозаполнения",
      },
      List: "Prompt лист",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} built-in, ${custom} user-defined`,
      Edit: "изменить",
    },
    HistoryCount: {
      Title: "Счетчик вложенных сообщений",
      SubTitle: "Количество отправленных сообщений, прикрепленных к запросу",
    },
    CompressThreshold: {
      Title: "Порог сжатия истории",
      SubTitle:
        "Будет сжиматься, если длина несжатых сообщений превышает значение",
    },
    Token: {
      Title: "API Key",
      SubTitle: "Ввод нового ключа",
      Placeholder: "OpenAI API Key",
    },
    Usage: {
      Title: "Баланс",
      SubTitle(used: any, total: any) {
        return `В этом месяце использовано $${used}, доступно $${total}`;
      },
      IsChecking: "Проверка...",
      Check: "Проверить снова",
      NoAccess: "Введите API Key для проверки баланса",
    },
    AccessCode: {
      Title: "Код доступа",
      SubTitle: "Введите сюда код/пароль для доступа к приложению",
      Placeholder: "Необходим код доступа",
    },
    Model: "Модель",
    Temperature: {
      Title: "Temperature",
      SubTitle: "Большее значение делает более случайным вывод",
    },
    MaxTokens: {
      Title: "Max Tokens",
      SubTitle: "Максимальная длина входных токенов и сгенерированных токенов / Длина сообщения",
    },
    PresencePenlty: {
      Title: "Presence Penalty",
      SubTitle:
        "Большее значение увеличивает вероятность разговора на новые темы",
    },
  },
  Store: {
    DefaultTopic: "Новый разговор",
    BotHello: "Привет, что сегодня тебя интересует?",
    Error: "Что-то пошло не так...",
    Prompt: {
      History: (content: string) =>
        "Это краткое изложение истории чата между ИИ и пользователем:" +
        content,
      Topic:
        "Пожалуйста, сгенерируйте заголовок из четырех-пяти слов, резюмирующий нашу беседу, без вводных слов, знаков препинания, кавычек, точек, символов или дополнительного текста. Удалите закрывающие кавычки.",
      Summarize:
        "Кратко резюмируйте нашу дискуссию в 200 или меньше слов, чтобы использовать их в качестве подсказки для будущего контекста.",
    },
    ConfirmClearAll: "Подтверждаете удаление всех данных чата и настроек?",
  },
  Copy: {
    Success: "Скопировано в буферь обмена",
    Failed: "Ошибка копирования. Разрешите доступ к буферу обмена.",
  },
  Context: {
    Toast: (x: any) => `с ${x} contextual prompts`,
    Edit: "Контекстные prompts и  Memory Prompts",
    Add: "Добавить",
  },
};

export default ru;
