import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  TipTap,
} from "@sps/shared-ui-shadcn";
import { cn } from "@sps/shared-frontend-client-utils";
import type { IComponentPropsExtended } from "./interface";
export function Component(props: IComponentPropsExtended) {
  const language = props.language || "en";
  return (
    <section
      id={props.data.anchor || undefined}
      data-module="website-builder"
      data-model="widget"
      data-id={props.data.id}
      data-variant={props.variant}
      className={cn(
        "w-full flex flex-col",
        props.data.className,
        props.className,
      )}
    >
      <div className="w-full max-w-7xl mx-auto">
        <Card className="w-full flex flex-col gap-3">
          <CardHeader>
            {props.data.title?.[language] ? (
              <CardTitle>{props.data.title[language]}</CardTitle>
            ) : null}
            {props.data.subtitle?.[language] ? (
              <p>{props.data.subtitle[language]}</p>
            ) : null}
            {props.data.description?.[language] ? (
              <TipTap value={props.data.description[language] || ""} />
            ) : null}
          </CardHeader>
          <CardContent>{props.children}</CardContent>
        </Card>
      </div>
    </section>
  );
}
