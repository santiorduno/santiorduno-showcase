import { useState, useEffect } from 'react';
import { sanityClient } from '../lib/sanity';
import {
  PROJECTS_QUERY, PROJECT_DETAIL_QUERY, SERVICES_QUERY, ABOUT_QUERY,
  CERTIFICATIONS_QUERY, EDUCATION_QUERY, SOCIAL_LINKS_QUERY, CONTACT_INFO_QUERY
} from '../lib/queries';
import type { Project, ProjectDetail, Service, AboutInfo, Certification, SocialLink, ContactInfo, ContentSection } from '../constants';
import { projects as staticProjects, services as staticServices, about as staticAbout, certifications as staticCertifications, education as staticEducation, socialLinks as staticSocialLinks, contactInfo as staticContactInfo } from '../constants';
import { projectsContent as staticProjectsContent } from '../constants/projects';

function normalizeContentSection(s: Record<string, unknown>): ContentSection {
  const data = s.textData ?? s.mediaData ?? s.galleryData ?? s.quoteData ?? {};
  return { id: s.id as string, type: s.type as ContentSection['type'], order: s.order as number, data: data as ContentSection['data'] };
}

export function useProjects() {
  const [data, setData] = useState<Project[]>(staticProjects);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    sanityClient.fetch<Project[]>(PROJECTS_QUERY)
      .then(r => { if (r?.length) setData(r); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);
  return { data, loading };
}

export function useProjectDetail(slug: string) {
  const [data, setData] = useState<ProjectDetail | undefined>(
    staticProjectsContent.find(p => p.slug === slug)
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    sanityClient.fetch<Record<string, unknown>>(PROJECT_DETAIL_QUERY, { slug })
      .then(r => {
        if (r) setData({
          ...r,
          slug: r.slug as string,
          content: (r.content as Record<string, unknown>[])?.map(normalizeContentSection) ?? [],
        } as ProjectDetail);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [slug]);
  return { data, loading };
}

export function useServices() {
  const [data, setData] = useState<Service[]>(staticServices);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    sanityClient.fetch<Service[]>(SERVICES_QUERY)
      .then(r => { if (r?.length) setData(r); })
      .catch(() => {}).finally(() => setLoading(false));
  }, []);
  return { data, loading };
}

export function useAbout() {
  const [data, setData] = useState<AboutInfo>(staticAbout[0]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    sanityClient.fetch<AboutInfo>(ABOUT_QUERY)
      .then(r => { if (r) setData(r); })
      .catch(() => {}).finally(() => setLoading(false));
  }, []);
  return { data, loading };
}

export function useCertifications() {
  const [data, setData] = useState<Certification[]>(staticCertifications);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    sanityClient.fetch<Certification[]>(CERTIFICATIONS_QUERY)
      .then(r => { if (r?.length) setData(r); })
      .catch(() => {}).finally(() => setLoading(false));
  }, []);
  return { data, loading };
}

export function useEducation() {
  const [data, setData] = useState<typeof staticEducation>(staticEducation);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    sanityClient.fetch(EDUCATION_QUERY)
      .then(r => { if ((r as unknown[])?.length) setData(r as typeof staticEducation); })
      .catch(() => {}).finally(() => setLoading(false));
  }, []);
  return { data, loading };
}

export function useSocialLinks() {
  const [data, setData] = useState<SocialLink[]>(staticSocialLinks);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    sanityClient.fetch<SocialLink[]>(SOCIAL_LINKS_QUERY)
      .then(r => { if (r?.length) setData(r); })
      .catch(() => {}).finally(() => setLoading(false));
  }, []);
  return { data, loading };
}

export function useContactInfo() {
  const [data, setData] = useState<ContactInfo>(staticContactInfo);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    sanityClient.fetch<ContactInfo>(CONTACT_INFO_QUERY)
      .then(r => { if (r) setData(r); })
      .catch(() => {}).finally(() => setLoading(false));
  }, []);
  return { data, loading };
}
