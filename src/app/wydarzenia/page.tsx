import EventBlock from "@/components/events/EventBlock";
import { getAllEvents } from "@/lib/contentful";
import React from "react";

interface Props {}
export const metadata = {
  title: "Złote Głosy Musicalu | Projekt Koncertowy w Polsce",
  description:
    "Odkryj nadchodzące wydarzenia organizowane przez Złote Głosy Musicalu. Znajdź najbliższe występy w Białymstoku, Łomży, Katowicach oraz Bielsku-Białej. Dołącz do nas teraz!",
};
const page = async () => {
  const events = await getAllEvents();
  return (
    <div className="padding flex flex-col mt-[100px] xl:mt-[120px] gap-[35px] md:gap-[50px] lg:gap-[70px] xl:gap-[90px] 2xl:gap-[110px]">
      <div>
        <h1 className="text-center text-[27px] font-bold md:section-heading ">
          Najbliższe Wydarzenia
        </h1>
        <p
          className="text-center text-[11px] md:text-[10px] lg:text-[12px] xl:text-[15.49px] desktop:text-[19px] ultra:text-[28.31px]
           opacity-70 "
        >
          Kliknij w wybrane wydarzenie aby zobaczyć więcej szczegółów
        </p>
      </div>
      <div
        className="w-full grid grid-cols-1 md:grid-cols-3 
        gap-x-[31px] md:gap-x-[27px] lg:gap-x-[35px] xl:gap-x-[44px] desktop:gap-x-[54px] ultra:gap-x-[81px]
        max-w-[300px] md:max-w-full mx-auto
        gap-y-[30px] lg:gap-y-[60px] xl:gap-y-[80px] 3xl:gap-y-[100px] ultra:gap-y-[160px]
        "
      >
        {events.map((event) => (
          <EventBlock
            // @ts-expect-error
            path={"https:" + event.fields.image?.fields.file?.url}
            location={event.fields.location}
            subLocation={event.fields.sublocation}
            data={event.fields.data}
            entryId={event.fields.entryId}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
