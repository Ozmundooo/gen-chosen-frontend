import groq from "groq";

export const programPageQuery = groq`
*[_type == "programs" && slug.current == $pageSlug][0]{
  _id,
  title,
  email,
  mainImage,
  content,
  imagesGallery,
  slug
}
`;
