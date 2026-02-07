// Schema markup for SEO - helps Google understand our content and show rich snippets

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CricutHelper",
    "url": "https://cricuthelper.com",
    "description": "Free Cricut troubleshooting guides, material settings, and community help",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://cricuthelper.com/materials?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CricutHelper",
    "url": "https://cricuthelper.com",
    "logo": "https://cricuthelper.com/icons/icon-512x512.png",
    "description": "The Cricut community that actually helps. Free troubleshooting and material settings.",
    "sameAs": [
      "https://pinterest.com/cricuthelper1",
      "https://instagram.com/cricuthelper1",
      "https://tiktok.com/@cricuthelper1",
      "https://x.com/CricutHelper"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function HowToSchema({ 
  name, 
  description, 
  steps,
  totalTime
}: { 
  name: string; 
  description: string; 
  steps: { name: string; text: string }[];
  totalTime?: string; // ISO 8601 duration, e.g., "PT15M" for 15 minutes
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": step.name,
      "text": step.text
    }))
  };
  
  if (totalTime) {
    schema.totalTime = totalTime;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
