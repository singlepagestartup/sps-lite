import "../styles/fonts.css";
import "../styles/tailwind.scss";
import Modals from "~components/modals";
import TranslationsContextWrapper from "~hooks/use-translations/TranslationsContext";
import { ReduxProvider } from "~redux/index";
import { fonts } from "./fonts";
import SlideOvers from "~components/slide-overs";
import { Suspense } from "react";
import Layouts from "~components/layouts";

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
          {/* Suspense here is for static build, without that build will return nothing */}
          <Suspense>
            <TranslationsContextWrapper>
              <ReduxProvider>
                <Layouts>{children}</Layouts>
                <Modals />
                <SlideOvers />
              </ReduxProvider>
            </TranslationsContextWrapper>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
