import React from "react";

export default function ProjectStructure() {
  return (
    <div className="project-structure">
      <pre className="prism-code">
        <code>
          . <span className="comment"># root of the application</span>
          <br />
          {"├────"} .github
          <br />
          {"|     ├────"} workflows{" "}
          <span className="comment">
            # Директория с файлами конфигурации{" "}
            <a href="https://github.com/features/actions" target="_blank">
              Github Actions
            </a>
          </span>
          <br />
          {"|     |     ├ "}
          production.yml
          <span className="comment">
            {" "}
            # Конфигурация для деплоя проекта в продакшн-среду
          </span>
          <br />
          {"|     |     └ "}
          staging.yml
          <span className="comment">
            {" "}
            # Конфигурация для деплоя проекта в стейдж-среду
          </span>
          <br />
          ├──── .husky{" "}
          <span className="comment">
            # Директория с файлами конфигурации{" "}
            <a href="https://github.com/typicode/husky" target="_blank">
              Husky
            </a>
          </span>
          <br />
          ├──── .vscode{" "}
          <span className="comment">
            # Директория с файлами конфигурации VS Code
          </span>
          <br />
          ├──── backend{" "}
          <span className="comment">
            # Директория с бекендом проекта на основе{" "}
            <a href="https://strapi.io/" target="_blank">
              Strapi
            </a>
          </span>
          <br />
          {"|     ├ "}
          ...{" "}
          <span className="comment">
            Ниже перечислены только те файлы, которые имеют отличия от
            стандартного проекта на Strapi
          </span>
          <br />
          {"|     ├──── "}
          config
          <br />
          {"|     |     ├ "}
          ...
          <br />
          {"|     |     ├ "}
          premissions.js{" "}
          <span className="comment">
            # Файл с конфигурацией ролей доступа к контенту
          </span>
          <br />
          {"|     |     └ "}
          plugins.js{" "}
          <span className="comment"># Файл с конфигурацией плагинов</span>
          <br />
          {"|     ├──── "}
          src
          <br />
          {"|     |     ├──── "}
          api <br />
          {"|     |     |     ├──── "}
          {"<model_name>"} <br />
          {"|     |     |     |     ├──── "}
          content-types <br />
          {"|     |     |     |     |     ├──── "}
          seeds <br />
          {"|     |     |     |     |     |     └ "}
          {"<number>.json"}{" "}
          <span className="comment"># Файлы с данными для плагина сидинга</span>
          <br />
          {"|     |     ├──── "}
          side-effects <br />
          {"|     |     |     ├ "}
          index.js{" "}
          <span className="comment">
            # Основной файл для подключения сайд эффектов, которые используются
            при создании нового form-request
          </span>{" "}
          <br />
          {"|     |     |     ├ "}
          pass-to-service.js{" "}
          <span className="comment">
            # Функция проксирования данных с формы в другую систему, например
            Google Drive
          </span>{" "}
          <br />
          {"|     |     |     ├ "}
          save-as-pdf.js{" "}
          <span className="comment">
            # Функция для сохранения данных в PDF-файл
          </span>{" "}
          <br />
          {"|     |     |     ├ "}
          send-to-recievers.js{" "}
          <span className="comment">
            # Функция отправки полученных данных реципиентам в нужный сервис,
            например на почту
          </span>{" "}
          <br />
          {"|     |     |     └ "}
          utils.js{" "}
          <span className="comment"># Файл с утилитами для функций</span> <br />
          ├──── frontend{" "}
          <span className="comment">
            # Директория с фронтендом проекта на основе{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>
          </span>
          <br />
          {"|     ├ "}
          ...{" "}
          <span className="comment">
            # Ниже перечислены только те файлы, которые имеют отличия от
            стандартного проекта на Next.js
          </span>
          <br />
          {"|     ├──── "}
          .storybook{" "}
          <span className="comment">
            # Директория с файлами конфигурации{" "}
            <a href="https://storybook.js.org/" target="_blank">
              Storybook
            </a>
          </span>
          <br />
          {"|     |     ├──── "}
          pages{" "}
          <span className="comment">
            # Директория со страницами, которые будут отображаться на фронтенде.
            Более подробно можно изучить в{" "}
            <a
              href="https://nextjs.org/docs/basic-features/pages/"
              target="_blank"
            >
              Документации Next.js
            </a>
          </span>
          <br />
          {"|     |     |     ├ "}
          ...
          <br />
          {"|     |     |     ├ "}
          [[url.tsx]]{" "}
          <span className="comment">
            # Файл для рендеринга страниц на основе модели Page на бекенде
          </span>
          <br />
          {"|     |     |     └ "}
          custom.tsx{" "}
          <span className="comment">
            # Пример страницы, переопределяющий роут, название которого
            соответствует названия файла. Если такой же роут будет добавлен
            через модель Pages на бекенде, он не будет обработан в файле
            [[url.tsx]]
          </span>
          <br />
          {"|     |     ├──── "}
          src{" "}
          <span className="comment">
            # Директория с основными ресурсами, используемыми на фронтенде
          </span>
          <br />
          {"|     |     |     ├──── "}
          components{" "}
          <span className="comment"># Директория с компонентами</span>
          <br />
          {"|     |     |     ├──── "}
          hooks{" "}
          <span className="comment">
            # Директория с хуками, используемыми более чем в одном компоненте
          </span>
          <br />
          {"|     |     |     ├──── "}
          mocks{" "}
          <span className="comment">
            # Директория с моковыми данными, используемыми в Storybook файлах,
            также может быть использовано в тестах
          </span>
          <br />
          {"|     |     |     ├──── "}
          redux <span className="comment"># Директория с настойками Redux</span>
          <br />
          {"|     |     |     └──── "}
          utils{" "}
          <span className="comment">
            # Директория с утилитами, используемыми более чем в одном компоненте
          </span>
          <br />
          {"|     |     ├──── "}
          styles{" "}
          <span className="comment">
            # Директория с SCSS и CSS стилями для Tailwind CSS
          </span>
          <br />
          {"|     |     ├──── "}
          tests{" "}
          <span className="comment">
            # Директория с{" "}
            <a href="https://playwright.dev/" target="_blank">
              Playwright
            </a>{" "}
            тестами
          </span>
          <br />
          {"|     |     ├──── "}
          themes{" "}
          <span className="comment">
            # Директория с настройками стилей, полученных с бекенда из модели
            Theme (создается автоматически после первого запуска)
          </span>
          <br />
          {"|     |     ├──── "}
          translations{" "}
          <span className="comment">
            # Директория с переводами для компонентов, которые являются общими и
            не зависят от данных, получаемых с бекенда
          </span>
          <br />
          {"|     |     ├──── "}
          types{" "}
          <span className="comment">
            # Директория с типами моделей, получаемых с бекенда
          </span>
          <br />
          {"|     |     ├ "}
          ... <br />
          {"|     |     ├ "}
          playwright.config.ts{" "}
          <span className="comment">
            # Файл конфигурации{" "}
            <a href="https://playwright.dev/" target="_blank">
              Playwright
            </a>
          </span>
          <br />
          {"|     |     ├ "}
          postcss.config.js{" "}
          <span className="comment">
            # Файл конфигурации Post CSS для{" "}
            <a href="https://tailwindcss.com/" target="_blank">
              Tailwind CSS
            </a>
          </span>
          <br />
          {"|     |     ├ "}
          tailwind.config.js{" "}
          <span className="comment">
            # Файл конфигурации{" "}
            <a href="https://tailwindcss.com/" target="_blank">
              Tailwind CSS
            </a>
          </span>
          <br />
          {"|     |     └ "}
          theme.js{" "}
          <span className="comment">
            # Функция для взятия данных из модели Theme на бекенде и размещения
            полученного в результате файла в папку themes
          </span>
          <br />
        </code>
      </pre>
    </div>
  );
}
