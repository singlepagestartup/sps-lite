"use client";

import { persistentMessageQuery } from "@sps/store";
import React from "react";

export default function StoreConsumer() {
  const messages = persistentMessageQuery((state) => state.messages);

  return (
    <div className="relative mx-auto px-20 py-40 bg-gray-200 max-w-7xl flex flex-col gap-2">
      <p>Messages: {messages.length}</p>
      <pre className="text-wrap">{JSON.stringify(messages)}</pre>
    </div>
  );
}
