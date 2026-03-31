import { createClient } from '@sanity/client';
import { services, projects, about, certifications, education, socialLinks, contactInfo } from '../src/constants/index.tsx';
import { projectsContent } from '../src/constants/projects/index.ts';

const client = createClient({
  projectId: 'qwhs1663',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN, // write token
});

async function seed() {
  const tx = client.transaction();

  // Services (6)
  for (const s of services) {
    tx.createOrReplace({
      _id: `service-${s.id}`,
      _type: 'service',
      id: s.id,
      title: s.title,
      description: s.description,
      icon: s.icon,
      items: s.items?.map((item, i) => ({ _key: `item-${i}`, title: item.title })),
    });
  }

  // Projects list (5) — used in the grid view
  for (const p of projects) {
    tx.createOrReplace({
      _id: `project-${p.slug}`,
      _type: 'project',
      id: p.id,
      title: p.title,
      slug: { _type: 'slug', current: p.slug },
      description: p.description,
      image: p.image,
      link: p.link,
      technologies: p.technologies.map((t, i) => ({ _key: `tech-${i}`, id: t.id, name: t.name })),
    });
  }

  // Project details — merge content into the same project docs
  for (const pd of projectsContent) {
    tx.patch(`project-${pd.slug}`, (patch) =>
      patch.set({
        metadata: pd.metadata,
        content: pd.content.map((section) => {
          const base: Record<string, unknown> = {
            _key: section.id,
            id: section.id,
            type: section.type,
            order: section.order,
          };
          switch (section.type) {
            case 'text':
              base.textData = section.data;
              break;
            case 'image':
            case 'video':
            case 'gif':
              base.mediaData = section.data;
              break;
            case 'gallery':
              base.galleryData = {
                ...section.data,
                images: (section.data as { images: Array<Record<string, string>> }).images.map(
                  (img, i) => ({ _key: `img-${i}`, ...img })
                ),
              };
              break;
            case 'quote':
              base.quoteData = section.data;
              break;
          }
          return base;
        }),
      })
    );
  }

  // About (1)
  const a = about[0];
  tx.createOrReplace({
    _id: 'about-singleton',
    _type: 'about',
    name: a.name,
    age: a.age,
    title: a.title,
    subtitle: a.subtitle,
    about: a.about,
    bio: a.bio,
    availability: a.availability,
    fn: a.fn,
    softSkills: a.softSkills,
  });

  // Certifications (5)
  for (const c of certifications) {
    tx.createOrReplace({
      _id: `cert-${c.id}`,
      _type: 'certification',
      id: c.id,
      title: c.title,
      institution: c.institution,
      logo: c.logo,
      url: c.url,
    });
  }

  // Education (2)
  for (const e of education) {
    tx.createOrReplace({
      _id: `edu-${e.id}`,
      _type: 'education',
      id: e.id,
      institution: e.institution,
      degree: e.degree,
      credential: e.credential,
      status: e.status,
    });
  }

  // Social Links (3)
  for (const s of socialLinks) {
    tx.createOrReplace({
      _id: `social-${s.id}`,
      _type: 'socialLink',
      id: s.id,
      name: s.name,
      url: s.url,
      icon: s.icon,
    });
  }

  // Contact Info (1)
  tx.createOrReplace({
    _id: 'contactInfo-singleton',
    _type: 'contactInfo',
    email: contactInfo.email,
    location: contactInfo.location,
  });

  console.log('Committing 23 documents...');
  const result = await tx.commit();
  console.log(`Done! Transaction ID: ${result.transactionId}`);
}

seed().catch(console.error);
