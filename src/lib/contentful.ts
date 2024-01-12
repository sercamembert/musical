import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

const getEvents = async () => {
  const response = await client.getEntries({
    content_type: "eventsHome",
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

export default getEvents;
