import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Body, Container, Head, Preview, Text } from "@react-email/components";

export function Component(props: IComponentPropsExtended) {
  return (
    <>
      <Head />
      <Preview>Order Status Is Changed To Paid</Preview>

      <Body>
        <Container>
          <Text>Order Id: {props.data.id}</Text>
          <Text>Status: Paid</Text>
          <Text>Component payload: {JSON.stringify(props)}</Text>
        </Container>
      </Body>
    </>
  );
}
