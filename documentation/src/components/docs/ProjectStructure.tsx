import React from "react";

export default function ProjectStructure() {
  return (
    <div className="project-structure">
      <pre className="prism-code">
        <code>
          . <span className="comment"># root of the application</span>
          <br />
          <Parent
            title=".devcontainer"
            comment="Github Codespaces and VS Code Remote Development configuration Directory"
          />
          <Parent title=".github">
            <Parent
              title="workflows"
              comment="Github Actions configuration Directory"
            />
          </Parent>
          <Parent title=".husky" comment="Husky configuration folder" />
          <Parent title=".vscode" comment="VS Code configuration folder" />
          <Parent title="backend" comment="Strapi-based backend folder">
            <Parent
              title="..."
              comment="The following are listed only those files that have differences from
            the standard project on Strapi"
            />
            <Parent title="config">
              <Parent title="..." />
              <Parent
                title="premissions.js"
                comment="File with configuration of user-permission roles"
              />
              <Parent
                title="plugins.js"
                comment="File with configuration of user-permission roles"
              />
            </Parent>
            <Parent title="src">
              <Parent title="..." />
              <Parent title="api">
                <Parent title="<model_name>">
                  <Parent title="content-types">
                    <Parent title="..." />
                    <Parent title="seeds">
                      <Parent title="..." />
                      <Parent
                        title="<number>.json"
                        comment="Seeding files for migrating data"
                      />
                    </Parent>
                  </Parent>
                </Parent>
                <Parent title="side-effects">
                  <Parent
                    title="index.js"
                    comment="The main file for connecting the side effects that are calls after
            create Form-Request"
                  />
                  <Parent
                    title="pass-to-service.js"
                    comment="The function of proxiding data from form to another system, such
                    as Google Drive"
                  />
                  <Parent
                    title="save-as-pdf.js"
                    comment="Function for saving data in the PDF file"
                  />
                  <Parent
                    title="send-to-recievers.js"
                    comment="The function of sending the received data to recipients to the
                    desired service, for example, by mail"
                  />
                  <Parent
                    title="utils.js"
                    comment="File with utilities for side effect functions"
                  />
                </Parent>
                <Parent
                  title="utils"
                  comment="Utilites that are used in more than one file"
                ></Parent>
              </Parent>
            </Parent>
          </Parent>
          <Parent title="frontend" comment="Next.js based frontend folder">
            <Parent
              title="..."
              comment="The following are listed only those files that have differences
            from the standard project on Next.js"
            />
            <Parent
              title=".storybook"
              comment="Storybook configuration folder"
            />
            <Parent
              title="app"
              comment="Directory with pages that will be displayed on the frontend"
            >
              <Parent title="..." />
              <Parent title="[locale]">
                <Parent title="[[url]]" comment="">
                  <Parent
                    title="page.tsx"
                    comment="File for rendering pages based on Page Model on the Beckend"
                  />
                </Parent>
              </Parent>
              <Parent title="api">
                <Parent title="[[url]]">
                  <Parent
                    title="route.tsx"
                    comment="File for proxying requests to backend and create .json files on build"
                  />
                </Parent>
              </Parent>
              <Parent title="robots.txt">
                <Parent
                  title="route.ts"
                  comment="File for rendering the robots.txt"
                />
              </Parent>
              <Parent title="sitemap.xml">
                <Parent
                  title="route.ts"
                  comment="File for rendering the sitemap.xml file"
                />
              </Parent>
              <Parent
                title="fonts.tsx"
                comment="File for connecting fonts loaded from backend to the
                  /frontend/themes/fonts directory"
              />
              <Parent
                title="global-error.tsx"
                comment="File for catching global frontend errors, that wasn't caught by ErrorBoundary"
              />
              <Parent
                title="layout.tsx"
                comment="File for rendering the layout based on the data received from the
            backend via the /api/layouts request."
              />
              <Parent
                title="not-found.tsx"
                comment="A 404 page with data received from the backend via the
            /api/pages/filters[url]=/404 request"
              />
            </Parent>
            <Parent
              title="src"
              comment="Directory with main resources used on the frontend"
            >
              <Parent
                title="components"
                comment="Directory with components"
              ></Parent>
              <Parent
                title="hooks"
                comment="Directory with hooks used in more than one component"
              ></Parent>
              <Parent
                title="mocks"
                comment="Directory with mock data used in Storybook files and can also be
            used in tests"
              ></Parent>
              <Parent
                title="redux"
                comment="Directory with Redux settings"
              ></Parent>
              <Parent
                title="utils"
                comment="Directory with utilities used in more than one component"
              ></Parent>
            </Parent>
            <Parent
              title="styles"
              comment="Directory with SCSS and CSS styles for Tailwind CSS"
            ></Parent>
            <Parent title="tests" comment="Directory with tests"></Parent>
            <Parent
              title="themes"
              comment="Directory with settings for styles obtained from the Theme model
              on the backend (created automatically after the first launch)"
            ></Parent>
            <Parent
              title="translations"
              comment="Directory with translations for components that are common and do
              not depend on data obtained from the backend"
            >
              <Parent
                title="ru.json"
                comment="Example Russian language translations"
              />
            </Parent>
            <Parent
              title="types"
              comment="Directory with types of models obtained from the backend"
            ></Parent>
            <Parent
              title=".dockerignore"
              comment="Ignore file for Docker container"
            />
            <Parent
              title=".env"
              comment="Environment variables for the frontend during internet computer deployment (creates automatically during the first deployment)"
            />
            <Parent
              title=".env.cloudflare"
              comment="cloudflare env when running internet computer deployment"
            />
            <Parent
              title=".env.cloudflare.example"
              comment="Example for cloudflare env when running internet computer deployment"
            />
            <Parent
              title=".env.development"
              comment="Environment variables for the frontend during development"
            />
            <Parent
              title=".env.local"
              comment="Environment variables for the frontend during development, that overrides .env.development and .env.production locally"
            />
            <Parent
              title=".env.production"
              comment="Environment variables for the frontend during production build"
            />
            <Parent title=".eslintignore" comment="Ignore file for ESLint" />
            <Parent
              title=".eslintrc.json"
              comment="ESLint configuration file"
            />
            <Parent title=".gitignore" comment="Ignore file for Git" />
            <Parent
              title=".ic-assets.json"
              comment="configuration file that specifies the assets to be included in the internet computer deployment"
            />
            <Parent
              title=".lintstagedrc"
              comment="configuration file for lint-staged"
            />
            <Parent
              title=".prettierignore"
              comment="Ignore file for Prettier"
            />
            <Parent title=".prettierrc" comment="Prettier configuration file" />
            <Parent
              title="build-start.sh"
              comment="Script for build and run frontend"
            />
            <Parent
              title="build-static-icp.sh"
              comment="Script for build static for internet computer"
            />
            <Parent
              title="canister_ids.json"
              comment="File with canister ids for internet computer deployment"
            />
            <Parent
              title="create_env.sh"
              comment="Script for creating env files after git clone"
            />
            <Parent
              title="cucumber.mjs"
              comment="Cucumber configuration file"
            />
            <Parent
              title="develop.Dockerfile"
              comment="Dockerfile for development"
            />
            <Parent
              title="develop.dockerignore"
              comment="Ignore file for development Docker container"
            />
            <Parent
              title="develop.sh"
              comment="Script for running frontend in development mode"
            />
            <Parent
              title="dfx.json"
              comment="Internet computer configuration file"
            />
            <Parent
              title="docker-compose.frontend.yaml"
              comment="Docker Compose configuration file for frontend service"
            />
            <Parent
              title="docker-compose.yaml"
              comment="Docker Compose configuration file for running frontend service"
            />
            <Parent title="Dockerfile" comment="Dockerfile for production" />
            <Parent title="jest.config.js" comment="Jest configuration file" />
            <Parent title="jest.setup.js" comment="Jest setup file" />
            <Parent title="middleware.ts" comment="Next.js middleware file" />
            <Parent
              title="next.config.js"
              comment="Next.js configuration file"
            />
            <Parent title="package.json" comment="Package.json file" />
            <Parent
              title="playwright.config.ts"
              comment="Playwright configuration file"
            />
            <Parent
              title="postcss.config.js"
              comment="PostCSS configuration file"
            />
            <Parent
              title="README.md"
              comment="File contains information about repo"
            />
            <Parent
              title="start.sh"
              comment="Script for running frontend on production"
            />
            <Parent
              title="tailwind.config.js"
              comment="Tailwind CSS configuration file"
            />
            <Parent
              title="theme.js"
              comment="A function for retrieving data from the Theme model on the backend
              and placing the resulting file in the themes directory"
            />
            <Parent
              title="tsconfig.json"
              comment="TypeScript configuration file"
            />
            <Parent title="turbo.json" comment="turbo.js configuration file" />
            <Parent
              title="up.sh"
              comment="Script for create env file and running frontend in development mode"
            />
            <Parent title="vercel.json" comment="Vercel configuration file" />
            <Parent title="wallaby.js" comment="Wallaby configuration file" />
          </Parent>
        </code>
      </pre>
    </div>
  );
}

function Parent({
  title,
  comment,
  children,
  tabs = 0,
  isLast = false,
}: {
  title: string;
  comment?: string;
  children?: React.ReactNode[] | React.ReactNode;
  tabs?: number;
  isLast?: boolean;
}) {
  const childrenArray =
    children && Array.isArray(children)
      ? children
      : children
        ? [children]
        : null;

  return (
    <span>
      <span>
        {tabs ? Array.from({ length: tabs }, () => "|     ").join("") : null}
        {isLast ? "└" : "├"}
        {"────"} {title}{" "}
        {comment ? <span className="comment"># {comment}</span> : null}
        <br />
      </span>
      {childrenArray?.length ? (
        childrenArray.map((child: any, index: number) => {
          return (
            <span key={index}>
              {React.cloneElement(child, {
                tabs: tabs + 1,
                isLast: index === childrenArray.length - 1,
              })}
            </span>
          );
        })
      ) : children ? (
        <span>
          {React.cloneElement(children as any, {
            tabs: tabs + 1,
            isLast: true,
          })}
        </span>
      ) : null}
    </span>
  );
}

{
  /* <a href="https://github.com/features/codespaces" target="_blank">
          Github Codespaces
        </a>{" "}
        and{" "}
        <a
          href="https://code.visualstudio.com/docs/remote/remote-overview"
          target="_blank"
        >
          VS Code Remote Development
        </a>{" "}
        configuration Directory */
}
