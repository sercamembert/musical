import React from "react";
import EventBlock from "@/components/events/EventBlock";
import EventScroll from "./EventScroll";
import getEvents from "@/lib/contentful";

interface Props {
  text: string;
}

const Events = async ({ text }: Props) => {
  const events = await getEvents();

  return (
    <div className="section-space flex flex-col relative ">
      <h2
        className={`${
          text == "Zobacz także inne wydarzenia"
            ? "event-heading"
            : "text-[25px] font-bold md:section-heading text-center"
        }`}
      >
        {text}
      </h2>
      <EventScroll>
        <div
          className="w-full grid grid-cols-3 min-w-[684px] md:min-w-full
        gap-x-[31px] md:gap-x-[27px] lg:gap-x-[35px] xl:gap-x-[44px] desktop:gap-x-[54px] ultra:gap-x-[81px]
        "
        >
          {events.map((event) => (
            <EventBlock
              // @ts-expect-error
              path={"https:" + event.fields.image?.fields.file?.url}
              location={event.fields.location}
              subLocation={event.fields.sublocation}
              entryId={event.fields.entryId}
              data={event.fields.data}
            />
          ))}
        </div>
        <p
          className="hidden md:block text-center text-[11px] md:text-[10px] lg:text-[12px] xl:text-[15.49px] desktop:text-[19px] ultra:text-[28.31px]
          mt-[20px] lg:mt-[23px] xl:mt-[28px] ultra:mt-[35px] opacity-70"
        >
          Kliknij w wybrane wydarzenie aby zobaczyć więcej szczegółów
        </p>
      </EventScroll>
    </div>
  );
};

export default Events;
