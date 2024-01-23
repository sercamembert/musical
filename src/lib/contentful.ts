import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

const getEvents = async () => {
  const response = await client.getEntries({
    content_type: "eventsHome",
    limit: 3,
    // @ts-expect-error
    order: "fields.data",
  });

  return response.items;
};

export const getAllEvents = async () => {
  const response = await client.getEntries({
    content_type: "eventsHome",
    // @ts-expect-error
    order: "fields.data",
  });

  return response.items;
};

export const getHomeArtists = async () => {
  const response = await client.getEntries({
    content_type: "artists",
    limit: 3,
  });

  return response.items;
};

export const getAllArtists = async () => {
  const response = await client.getEntries({
    content_type: "artists",
  });

  return response.items;
};

export const getAllMusicians = async () => {
  const response = await client.getEntries({
    content_type: "musicians",
  });

  return response.items;
};

export const getHomeGallery = async () => {
  const response = await client.getEntries({
    content_type: "galeriaHome",
  });

  return response.items;
};

export default getEvents;
