import { useMemo } from "react";
import { ICardProps } from "..";
import { ISpsLiteCatdsProps } from ".";

export const animationClassName = "bg-gray-200 animate-pulse";

export default function Simple(props: ISpsLiteCatdsProps) {
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
      <div data-is-empty={isEmpty} className={`${cardsConfig.className || ""}`}>
        <EmptyRenderComponent cardsConfig={cardsConfig} />
      </div>
    );
  }

  return (
    <div data-is-empty={isEmpty} className={`${cardsConfig.className || ""}`}>
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
    <div className="w-full flex items-center justify-center py-10 border-2 border-gray-200 border-dashed rounded-md">
      <p className="text-gray-500">There are no items</p>
    </div>
  );
}

function DefaultCardSkeletonComponent() {
  return <div className="w-full h-[150px] skeleton"></div>;
}
