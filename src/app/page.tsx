"use client";
import "./style.css";
import { BuilderComponent, builder } from "@builder.io/react";
import { SButton } from "@chargebee/sting-react";
// Replace with your actual Builder.io public key
builder.init("7f58433da349460a86f2bfe8f11285ed");

export default function Home() {
  return (
    <div className="p-8 space-y-4">
      <SButton>Click me</SButton>
      <BuilderComponent model="page" />
    </div>
  );
}
