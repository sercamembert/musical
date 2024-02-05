// @ts-nocheck
import { client } from "@/lib/contentful";
import React from "react";

interface Props {}
export const metadata = {
  title: "Złote Głosy Musicalu - Koncerty Muzyczne Najwyższej Jakości w Polsce",
  description:
    "Przeżyj najwyższej jakości występy muzyczne w całej Polsce z Złotymi Głosami Musicalu. Przygotuj się na niezapomniane przeżycie koncertowe.",
};
const page = async () => {
  const text = await client.getEntry("6xHFvtjmJwjFDl3RQmaXw9");
  return (
    <div className="padding min-h-screen flex items-center justify-center">
      <p className="font-semibold text-[18px] 2xl:text-[22px]">
        {text.fields.text}
      </p>
    </div>
  );
};

export default page;
