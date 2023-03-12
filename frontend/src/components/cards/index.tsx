import { FC } from "react";
import Simple from "./Simple";

const variants = {
  simple: Simple,
};

export interface ICardsConfig {
  emptyLength?: number;
  className?: string;
  Comp: React.ComponentType<any>;
  EmptyComp?: React.ComponentType<any>;
  SkeletonComp?: React.ComponentType<any>;
}

export interface ICardsBlock {
  showSkeletons: boolean;
  cardsConfig: ICardsConfig;
  items: any[] | undefined;
}

export interface ICardProps extends ICardsBlock {
  item: any;
  index: number;
}

export interface ICardSkeletonProps extends ICardProps {
  animationClassName: string;
}

export interface ICardsProps extends ICardsBlock {
  variant: `simple`;
}

export default function Cards(props: ICardsProps) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<any>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
