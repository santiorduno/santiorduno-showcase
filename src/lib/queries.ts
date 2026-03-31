export const PROJECTS_QUERY = `
  *[_type == "project"] | order(id asc) {
    id, title, "slug": slug.current, description, image, link, technologies
  }
`;

export const PROJECT_DETAIL_QUERY = `
  *[_type == "project" && slug.current == $slug][0] {
    id, title, "slug": slug.current, description, technologies, metadata,
    content[] { id, type, order, textData, mediaData, galleryData, quoteData }
  }
`;

export const SERVICES_QUERY = `*[_type == "service"] | order(id asc) { id, title, description, icon, items }`;
export const ABOUT_QUERY = `*[_type == "about"][0] { name, age, title, subtitle, about, bio, availability, fn, softSkills }`;
export const CERTIFICATIONS_QUERY = `*[_type == "certification"] | order(id asc) { id, title, institution, logo, url }`;
export const EDUCATION_QUERY = `*[_type == "education"] | order(id asc) { id, institution, degree, credential, status }`;
export const SOCIAL_LINKS_QUERY = `*[_type == "socialLink"] | order(id asc) { id, name, url, icon }`;
export const CONTACT_INFO_QUERY = `*[_type == "contactInfo"][0] { email, location }`;
