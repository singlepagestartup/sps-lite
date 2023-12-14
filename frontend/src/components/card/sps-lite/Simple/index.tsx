import { useMemo } from "react";
import { ICardProps, ICardsProps } from "../..";

export default function Simple(props: ICardsProps) {
  const { cardsConfig, items, showSkeletons } = props;

  const localItems = useMemo(() => {
    if (showSkeletons) {
      return Array(cardsConfig?.emptyLength || 5).fill({});
    }

    return items;
  }, [items, showSkeletons, cardsConfig?.emptyLength]);

  const isEmpty = useMemo(() => {
    if (!items?.length && !showSkeletons) {
      return true;
    }

    return false;
  }, [items, showSkeletons]);

  const EmptyRenderComponent = useMemo(() => {
    if (cardsConfig?.EmptyComp) {
      return cardsConfig.EmptyComp;
    }

    return DefaultEmptyComponent;
  }, [cardsConfig]);

  if (isEmpty) {
    return (
      <div
        data-ui="components.card"
        data-variant={props.variant}
        data-is-empty={isEmpty}
        className={cardsConfig.className || ""}
      >
        <EmptyRenderComponent cardsConfig={cardsConfig} />
      </div>
    );
  }

  return (
    <div
      data-ui="components.card"
      data-variant={props.variant}
      data-is-empty={isEmpty}
      className={cardsConfig.className || ""}
    >
      {localItems?.map((item: any, index: number) => {
        return <Card key={index} {...props} item={item} index={index} />;
      })}
    </div>
  );
}

function Card(props: ICardProps) {
  const { cardsConfig, showSkeletons } = props;

  const RenderComponent = useMemo(() => {
    return cardsConfig.Comp;
  }, [cardsConfig]);

  const SkeletonRenderComponent = useMemo(() => {
    if (cardsConfig.SkeletonComp) {
      return cardsConfig.SkeletonComp;
    }

    return DefaultCardSkeletonComponent;
  }, [cardsConfig]);

  if (showSkeletons) {
    return <SkeletonRenderComponent {...props} />;
  }

  return <RenderComponent {...props} />;
}

function DefaultEmptyComponent() {
  return (
    <div className="default-empty-card">
      <p>There are no items</p>
    </div>
  );
}

function DefaultCardSkeletonComponent() {
  return <div className="default-skeleton-card"></div>;
}
