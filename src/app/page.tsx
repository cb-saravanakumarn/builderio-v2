"use client";
import { BuilderComponent, builder } from "@builder.io/react";

// Replace with your actual Builder.io public key
builder.init("7f58433da349460a86f2bfe8f11285ed");

export default function Home() {
  return (
    <div>
      <h1>Welcome to Builder.io Project</h1>
      <BuilderComponent model="page" />
    </div>
  );
}
