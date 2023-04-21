import Layouts from "~components/layouts";
import "../styles/fonts.css";
import "../styles/tailwind.scss";
import Modals from "~components/modals";
import TranslationsContextWrapper from "~hooks/use-translations/TranslationsContext";
import { ReduxProvider } from "~redux/index";
import { fonts } from "./fonts";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth">
      <body
        className={`${fonts.defaultFont.variable} ${fonts.primaryFont.variable}`}
      >
        <div className="relative">
          <TranslationsContextWrapper>
            <ReduxProvider>
              <Layouts>{children}</Layouts>
              <div id="notification" />
              <Modals />
            </ReduxProvider>
          </TranslationsContextWrapper>
        </div>
      </body>
    </html>
  );
}
