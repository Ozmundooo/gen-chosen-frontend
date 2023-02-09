import groq from "groq";

export const programsQuery = groq`
  *[_type == "programs"] {
    _id,
    title,
    mainImage,
    content,
    imagesGallery,
    slug
  }
`;
