// @ts-nocheck
import ArtistBlock from "@/components/artists/ArtistBlock";
import EventTicket from "@/components/events/EventTicket";
import Events from "@/components/events/Events";
import getEvents, { client } from "@/lib/contentful";
import Image from "next/image";
import React from "react";

interface Props {
  entryId: string;
}

const page = async ({ params }: { params: { entryId: string } }) => {
  const { entryId } = params;
  const event = await client.getEntry(entryId);
  const url = "https:" + event.fields.image?.fields.file?.url;
  return (
    <>
      <div className=" mt-[100px] xl:mt-[120px] flex flex-col px-[20px] md:px-[130px] lg:px-[225px] xl:px-[285px] 2xl:px-[320px] 3xl:px-[340px] desktop:px-[380px] ultra:px-[420px]">
        <div
          style={{ backgroundImage: `url(${url})` }}
          className="bg-center bg-cover w-full absolute left-0 top-0 opacity-10 z-0 h-[280px] lg:h-[340px] xl:h-[415px] 2xl:h-[447px] 3xl:h-[470.13px] desktop:h-[520.81px] ultra:h-[830.22px"
        ></div>
        <div className="z-10">
          <h1 className="leading-tight text-center font-bold text-[30px] md:text-[37px] lg:text-[49px] xl:text-[61.72px] 2xl:text-[69.43px] 3xl:text-[74.06px] desktop:text-[82.93px] ultra:text-[123.43px]">
            {event.fields.title}
          </h1>
          <p className="leading-tight text-center opacity-70 text-[11px] md:text-[13px] lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[25px] desktop:text-[28px] ultra:text-[42px]">
            {event.fields.location}
          </p>
        </div>
        <EventTicket
          path={event.fields.ticketLink}
          status={event.fields.ticketsStatus}
        />

        <div className="section-space flex flex-col mt-[80px] md:mt-[100px] xl:mt-[110px] 2xl:mt-[120px] 3xl:mt-[142px] desktop:mt-[178px] ultra:mt-[221px] ">
          <h2 className="event-heading">Artyści którzy wystąpią:</h2>
          <div
            className="mx-auto w-full grid grid-cols-1 md:grid-cols-3 max-w-[250px] md:max-w-full
        gap-y-[40px] md:gap-x-[62px] lg:gap-x-[81px] xl:gap-x-[101px] 2xl:gap-x-[106px] desktop:gap-x-[124px] ultra:gap-x-[185px]"
          >
            {event.fields.artists?.map((artist) => (
              <ArtistBlock
                path={"https:" + artist.fields.image?.fields.file?.url}
                name={artist.fields.name}
                role={artist.fields.role}
                role2={artist.fields.role2}
              />
            ))}
          </div>
        </div>
        <div className="my-[40px] md:my-[20px] lg:my-[40px] xl:my-[48px] 3xl:my-[60px] ultra:my-[80px]">
          <h2 className="text-left event-heading">O Wydarzeniu</h2>
          <p className="font-medium text-[12px] md:text-[9.93px] lg:text-[12.97px] xl:text-[16.21px] 3xl:text-[17.83px] desktop:text-[20px] ultra:text-[29px] mt-[5px] opacity-70">
            {event.fields.description}
          </p>
          <div className="flex justify-start">
            <EventTicket
              path={event.fields.ticketLink}
              status={event.fields.ticketsStatus}
            />
          </div>
        </div>
        <Image
          src={"https:" + event.fields.image?.fields.file?.url}
          alt="Wydarzenie"
          width={2000}
          height={2000}
          quality={100}
          className="w-full"
        />
        <div className="flex flex-col gap-y-[20px] md:flex-row justify-between my-[40px] md:my-[20px] lg:my-[40px] xl:my-[48px] 3xl:my-[60px] ultra:my-[80px]  ">
          <div className="flex flex-col gap-[19px] lg:gap-[26px] xl:gap-[33px] 2xl:gap-[37px] 3xl:gap-[39px] desktop:gap-[43px] ultra:gap-[65px]">
            <h2 className="text-left event-heading ">Lokalizacja</h2>
            <div className="flex items-center gap-[7px] xl:gap-[10px] 2xl:gap-[12px] desktop:gap-[15px] ultra:gap-[21px]">
              <Image
                src="/images/icons/map.svg"
                width={30}
                height={30}
                alt="Lokalizacja"
                className="w-[13px] lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[23px] desktop:w-[25px] ultra:w-[38px]"
              />
              <div>
                <p className="text-[11px] lg:text-[14px] xl:text-[17.71px] 2xl:text-[20px] desktop:text-[23px] ultra:text-[35.41px]">
                  {event.fields.localizationName}
                </p>
                <p className="text-[11px] lg:text-[14px] xl:text-[17.71px] 2xl:text-[20px] desktop:text-[23px] ultra:text-[35.41px]">
                  {event.fields.localizationPlace}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[7px] xl:gap-[10px] 2xl:gap-[12px] desktop:gap-[15px] ultra:gap-[21px]">
              <Image
                src="/images/icons/phone.svg"
                width={30}
                height={30}
                alt="Lokalizacja"
                className="w-[13px] lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[23px] desktop:w-[25px] ultra:w-[38px]"
              />
              <p className="text-[11px] lg:text-[14px] xl:text-[17.71px] 2xl:text-[20px] desktop:text-[23px] ultra:text-[35.41px]">
                {event.fields.phone}
              </p>
            </div>
            <div className="flex items-center gap-[7px] xl:gap-[10px] 2xl:gap-[12px] desktop:gap-[15px] ultra:gap-[21px]">
              <Image
                src="/images/icons/email.svg"
                width={30}
                height={30}
                alt="Lokalizacja"
                className="w-[13px] lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[23px] desktop:w-[25px] ultra:w-[38px]"
              />
              <p className="text-[11px] lg:text-[14px] xl:text-[17.71px] 2xl:text-[20px] desktop:text-[23px] ultra:text-[35.41px]">
                {event.fields.email}
              </p>
            </div>
          </div>
          <iframe
            src={event.fields.iframeLink}
            loading="lazy"
            className="rounded-[10px] h-[220px] md:h-[210px] lg:h-[280px] xl:h-[352px] 2xl:h-[396px] 3xl:h-[422px] desktop:h-[473px] ultra:h-[704px] w-full md:w-1/2"
          ></iframe>
        </div>
        <div>
          <h2 className="text-center event-heading">
            Nie zwlekaj Kup Bilet już teraz
          </h2>
          <EventTicket
            path={event.fields.ticketLink}
            status={event.fields.ticketsStatus}
          />
        </div>
      </div>
      <div
        className="md:px-[40px] lg:px-[95px] xl:px-[105px] 2xl:px-[100px] 3xl:px-[100px] desktop:px-[110px] ultra:px-[20px]
      mt-[100px] lg:mt-[127px] xl:mt-[160px] 2xl:mt-[180px] 3xl:mt-[192px] desktop:mt-[215px] ultra:mt-[320px]
      "
      >
        <Events text="Zobacz także inne wydarzenia" />
      </div>
    </>
  );
};

export default page;
