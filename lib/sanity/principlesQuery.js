import groq from "groq";

export const principlesQuery = groq`
  *[_type == "principles"] {
    _id,
    title,
    image,
    description,
  }
`;
