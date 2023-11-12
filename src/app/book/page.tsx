import Form from "@/components/UI/Form/Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book | Farabaugh's Precision Pressure Washing",
  description: "Generated by create next app",
};

export default function Book() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Book</h1>
        <Form />
      </main>
    </div>
  );
}