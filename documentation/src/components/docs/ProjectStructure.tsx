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
            #{" "}
            <a href="https://github.com/features/actions" target="_blank">
              Github Actions
            </a>{" "}
            configuration Directory
          </span>
          <br />
          {"|     |     ├ "}
          production.yml
          <span className="comment">
            {" "}
            # Configuration for deploying the project to the production
          </span>
          <br />
          {"|     |     └ "}
          staging.yml
          <span className="comment">
            {" "}
            # Configuration for deploying the project to the staging
          </span>
          <br />
          ├──── .husky{" "}
          <span className="comment">
            #{" "}
            <a href="https://github.com/typicode/husky" target="_blank">
              Husky
            </a>{" "}
            configuration folder
          </span>
          <br />
          ├──── .vscode{" "}
          <span className="comment"># VS Code configuration folder</span>
          <br />
          ├──── backend{" "}
          <span className="comment">
            #{" "}
            <a href="https://strapi.io/" target="_blank">
              Strapi
            </a>{" "}
            based backend folder
          </span>
          <br />
          {"|     ├ "}
          ...{" "}
          <span className="comment">
            The following are listed only those files that have differences from
            the standard project on Strapi
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
            # File with configuration of user-permission roles
          </span>
          <br />
          {"|     |     └ "}
          plugins.js{" "}
          <span className="comment"># Plugins configuration file</span>
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
          <span className="comment"># Seeding files for migrating data</span>
          <br />
          {"|     |     ├──── "}
          side-effects <br />
          {"|     |     |     ├ "}
          index.js{" "}
          <span className="comment">
            # The main file for connecting the side effects that are calls after
            create Form-Request
          </span>{" "}
          <br />
          {"|     |     |     ├ "}
          pass-to-service.js{" "}
          <span className="comment">
            # The function of proxiding data from form to another system, such
            as Google Drive
          </span>{" "}
          <br />
          {"|     |     |     ├ "}
          save-as-pdf.js{" "}
          <span className="comment">
            # Function for saving data in the PDF file
          </span>{" "}
          <br />
          {"|     |     |     ├ "}
          send-to-recievers.js{" "}
          <span className="comment">
            # The function of sending the received data to recipients to the
            desired service, for example, by mail
          </span>{" "}
          <br />
          {"|     |     |     └ "}
          utils.js{" "}
          <span className="comment">
            # File with utilities for side effect functions
          </span>{" "}
          <br />
          ├──── frontend{" "}
          <span className="comment">
            #{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            based frontend folder
          </span>
          <br />
          {"|     ├ "}
          ...{" "}
          <span className="comment">
            # The following are listed only those files that have differences
            from the standard project on Next.js
          </span>
          <br />
          {"|     ├──── "}
          .storybook{" "}
          <span className="comment">
            #{" "}
            <a href="https://storybook.js.org/" target="_blank">
              Storybook
            </a>{" "}
            configuration folder
          </span>
          <br />
          {"|     ├──── "}
          app{" "}
          <span className="comment">
            # Directory with pages that will be displayed on the frontend. In
            more detail, you can study in the{" "}
            <a
              href="https://nextjs.org/docs/app/building-your-application/routing/defining-routes"
              target="_blank"
            >
              Documentation Next.js
            </a>
          </span>
          <br />
          {"|     |     ├ "}
          ...
          <br />
          {"|     |     ├──── "}
          [locale] <br />
          {"|     |     |     ├──── "}
          [[url]] <br />
          {"|     |     |     |     └ "}
          page.tsx{" "}
          <span className="comment">
            # File for rendering pages based on Page on the Beckend
          </span>
          <br />
          {"|     |     ├──── "}
          robots.txt <br />
          {"|     |     |     └ "}
          route.ts{" "}
          <span className="comment">
            # File for rendering the{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Glossary/Robots.txt"
              target="_blank"
            >
              robots.txt
            </a>{" "}
            file
          </span>
          <br />
          {"|     |     ├──── "}
          sitemap.xml <br />
          {"|     |     |     └ "}
          route.ts{" "}
          <span className="comment">
            # File for rendering the{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Glossary/Site_map"
              target="_blank"
            >
              sitemap.xml
            </a>{" "}
            file
          </span>
          <br />
          {"|     |     ├ "}
          fonts.tsx{" "}
          <span className="comment">
            # File for connecting fonts loaded from backend to the directory
            /frontend/themes/fonts
          </span>
          <br />
          {"|     |     ├ "}
          global-error.tsx{" "}
          <span className="comment"># File for catching frontend errors</span>
          <br />
          {"|     |     ├ "}
          layout.tsx{" "}
          <span className="comment">
            # File for rendering the layout based on the data received from the
            backend via the /api/layouts request.
          </span>
          <br />
          {"|     |     └ "}
          not-found.tsx{" "}
          <span className="comment">
            # A 404 page with data received from the backend via the
            /api/pages/filters[url]=/404 request
          </span>
          <br />
          {"|     ├──── "}
          src{" "}
          <span className="comment">
            # Directory with main resources used on the frontend
          </span>
          <br />
          {"|     |     ├──── "}
          components{" "}
          <span className="comment"># Directory with components</span>
          <br />
          {"|     |     ├──── "}
          hooks{" "}
          <span className="comment">
            # Directory with hooks used in more than one component
          </span>
          <br />
          {"|     |     ├──── "}
          mocks{" "}
          <span className="comment">
            # Directory with mock data used in Storybook files and can also be
            used in tests
          </span>
          <br />
          {"|     |     ├──── "}
          redux <span className="comment"># Directory with Redux settings</span>
          <br />
          {"|     |     └──── "}
          utils{" "}
          <span className="comment">
            # Directory with utilities used in more than one component
          </span>
          <br />
          {"|     ├──── "}
          styles{" "}
          <span className="comment">
            # Directory with SCSS and CSS styles for Tailwind CSS
          </span>
          <br />
          {"|     ├──── "}
          tests{" "}
          <span className="comment">
            # Directory with{" "}
            <a href="https://playwright.dev/" target="_blank">
              Playwright
            </a>{" "}
            tests
          </span>
          <br />
          {"|     ├──── "}
          themes{" "}
          <span className="comment">
            # Directory with settings for styles obtained from the Theme model
            on the backend (created automatically after the first launch)
          </span>
          <br />
          {"|     ├──── "}
          translations{" "}
          <span className="comment">
            # Directory with translations for components that are common and do
            not depend on data obtained from the backend
          </span>
          <br />
          {"|     |     └ "}
          ru.json{" "}
          <span className="comment">
            # Example Russian language translations
          </span>
          <br />
          {"|     ├──── "}
          types{" "}
          <span className="comment">
            # Directory with types of models obtained from the backend
          </span>
          <br />
          {"|     ├ "}
          ... <br />
          {"|     ├ "}
          playwright.config.ts{" "}
          <span className="comment">
            #{" "}
            <a href="https://playwright.dev/" target="_blank">
              Playwright
            </a>{" "}
            configuration file
          </span>
          <br />
          {"|     ├ "}
          postcss.config.js{" "}
          <span className="comment">
            # Post CSS configuration for{" "}
            <a href="https://tailwindcss.com/" target="_blank">
              Tailwind CSS
            </a>
          </span>
          <br />
          {"|     ├ "}
          tailwind.config.js{" "}
          <span className="comment">
            #{" "}
            <a href="https://tailwindcss.com/" target="_blank">
              Tailwind CSS
            </a>{" "}
            configuration
          </span>
          <br />
          {"|     └ "}
          theme.js{" "}
          <span className="comment">
            # A function for retrieving data from the Theme model on the backend
            and placing the resulting file in the themes directory
          </span>
          <br />
        </code>
      </pre>
    </div>
  );
}
