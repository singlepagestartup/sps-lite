"use client";

import { FC } from "react";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
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

export interface ICardsProps extends ICardsBlock {
  variant: keyof typeof variants;
}

export default function Card(props: ICardsProps) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<any>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
