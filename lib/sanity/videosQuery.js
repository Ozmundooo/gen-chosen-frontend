import groq from "groq";

export const videosQuery = groq`
  *[_type == "videos"] {
    _id,
    title,
    link,
  }
`;
