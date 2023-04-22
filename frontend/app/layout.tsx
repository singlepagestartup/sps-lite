import Layouts from "~components/layouts";
import "../styles/fonts.css";
import "../styles/tailwind.scss";
import Modals from "~components/modals";
import TranslationsContextWrapper from "~hooks/use-translations/TranslationsContext";
import { ReduxProvider } from "~redux/index";
import { fonts } from "./fonts";
import SlideOvers from "~components/slide-overs";
import { getBackendData } from "~utils/api";
import { BACKEND_URL } from "~utils/envs";
import { layoutPopulate } from "~utils/api/queries";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const layouts = await getBackendData({
    url: `${BACKEND_URL}/api/layouts`,
    params: {
      locale: "all",
      populate: layoutPopulate,
    },
  });

  return (
    <html className="scroll-smooth">
      <body
        className={`${fonts.defaultFont.variable} ${fonts.primaryFont.variable}`}
      >
        <div className="relative">
          <TranslationsContextWrapper>
            <ReduxProvider>
              <Layouts layouts={layouts}>{children}</Layouts>
              <Modals />
              <SlideOvers />
            </ReduxProvider>
          </TranslationsContextWrapper>
        </div>
      </body>
    </html>
  );
}
