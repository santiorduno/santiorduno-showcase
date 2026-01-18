import type { ProjectDetail } from '../index';

export const qcomEcommerce: ProjectDetail = {
  id: 4,
  title: "Qcom E-commerce",
  slug: "qcom-ecommerce",
  description: "Corporate website and e-commerce design including banner creation, product images, site UI/UX, and performance maintenance.",
  thumbnail: "/assets/projects/qcom-ecommerce/thumbnail.jpg",
  technologies: [
    { id: 1, name: "Adobe XD" },
    { id: 2, name: "UI/UX" },
    { id: 3, name: "E-commerce management" }
  ],
  metadata: {
    client: "Qualisys",
    year: "2023",
    duration: "18 months",
    role: "Social Media & Web Designer"
  },
  content: [
    {
      id: "intro",
      type: "text",
      order: 1,
      data: {
        heading: "Enterprise E-commerce Solution",
        body: "Qcom, a SAP ERP Distributor and Dell Technologies Titanium Partner, required a comprehensive e-commerce platform that would showcase their enterprise solutions while maintaining high performance and user experience standards.",
        alignment: "left"
      }
    },
    {
      id: "homepage",
      type: "image",
      order: 2,
      data: {
        src: "/assets/projects/qcom-ecommerce/hero.jpg",
        alt: "Qcom Homepage",
        caption: "Professional enterprise e-commerce homepage",
        width: "full"
      }
    },
    {
      id: "responsibilities",
      type: "text",
      order: 3,
      data: {
        heading: "Project Scope",
        body: "My role encompassed multiple aspects of the digital presence:\n\n• Banner creation for promotional campaigns\n• Product photography and image optimization\n• Complete site UI/UX design and implementation\n• Performance monitoring and maintenance\n• Social media content creation and management\n\nThe project required balancing corporate professionalism with user-friendly design, ensuring the platform could handle enterprise-level transactions while remaining accessible to all users.",
        alignment: "left"
      }
    },
    {
      id: "product-showcase",
      type: "gallery",
      order: 4,
      data: {
        layout: "grid",
        columns: 2,
        images: [
          {
            src: "/assets/projects/qcom-ecommerce/gallery/products.jpg",
            alt: "Product catalog",
            caption: "Clean product catalog design"
          },
          {
            src: "/assets/projects/qcom-ecommerce/gallery/banners.jpg",
            alt: "Promotional banners",
            caption: "Campaign banner designs"
          }
        ]
      }
    },
    {
      id: "impact",
      type: "text",
      order: 5,
      data: {
        heading: "Business Impact",
        body: "The redesigned e-commerce platform significantly improved user engagement and conversion rates. Performance optimizations reduced page load times by 40%, while the new UI/UX design increased average session duration by 60%.",
        alignment: "left"
      }
    }
  ]
};
