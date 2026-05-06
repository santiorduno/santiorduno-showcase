export type Language = 'en' | 'es';

export interface UITranslations {
  nav: {
    home: string;
    services: string;
    about: string;
    work: string;
    education: string;
    contact: string;
    emailLabel: string;
    socialLabel: string;
  };
  serviceSummary: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
  };
  works: {
    title: string;
    text: string;
  };
  education: {
    title: string;
    text: string;
    academic: string;
    certifications: string;
    viewButton: string;
  };
  contact: {
    subTitle: string;
    title: string;
    text: string;
    emailLabel: string;
    reachOutText: string;
    connectLabel: string;
    formTitle: string;
    nameLabel: string;
    emailFieldLabel: string;
    subjectLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    sendingButton: string;
    successButton: string;
    errorMessage: string;
  };
  projectDetail: {
    clientLabel: string;
    yearLabel: string;
    roleLabel: string;
    liveSiteLabel: string;
    visitLabel: string;
    backToProjects: string;
    previousLabel: string;
    nextLabel: string;
    notFoundTitle: string;
    notFoundText: string;
    notFoundLink: string;
  };
}

export interface ProjectContentTranslation {
  slug: string;
  description: string;
  metadata: {
    role: string;
  };
  content: {
    [blockId: string]: {
      heading?: string;
      body?: string;
      text?: string;
      caption?: string;
      images?: { caption?: string }[];
    };
  };
}
