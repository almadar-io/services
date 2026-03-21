import React from "react";
import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import {
  HeroSection,
  SplitSection,
  FeatureGrid,
  CTABanner,
  ContentSection,
  GradientDivider,
} from "@almadar/ui/marketing";

const INTEGRATIONS = [
  {
    title: translate({ id: "integrations.stripe.title", message: "Stripe" }),
    description: translate({ id: "integrations.stripe.desc", message: "Payment processing, subscriptions, invoicing, and webhook handling. Connect your .orb application to Stripe in one line." }),
  },
  {
    title: translate({ id: "integrations.twilio.title", message: "Twilio" }),
    description: translate({ id: "integrations.twilio.desc", message: "SMS, voice calls, and WhatsApp messaging. Send notifications and receive user responses through Twilio's communication APIs." }),
  },
  {
    title: translate({ id: "integrations.github.title", message: "GitHub" }),
    description: translate({ id: "integrations.github.desc", message: "Repository management, issue tracking, pull requests, and webhooks. Automate development workflows." }),
  },
  {
    title: translate({ id: "integrations.email.title", message: "Email" }),
    description: translate({ id: "integrations.email.desc", message: "Transactional email with templates, attachments, and delivery tracking. Built on SendGrid and Amazon SES." }),
  },
  {
    title: translate({ id: "integrations.youtube.title", message: "YouTube" }),
    description: translate({ id: "integrations.youtube.desc", message: "Video embedding, playlist management, and analytics. Pull video metadata and display content natively." }),
  },
  {
    title: translate({ id: "integrations.docker.title", message: "Docker" }),
    description: translate({ id: "integrations.docker.desc", message: "Container orchestration for custom services. Deploy additional backend services alongside your .orb application." }),
  },
  {
    title: translate({ id: "integrations.redis.title", message: "Redis" }),
    description: translate({ id: "integrations.redis.desc", message: "In-memory caching, pub/sub messaging, and session storage. High-performance data layer for real-time features." }),
  },
];

export default function Integrations(): ReactNode {
  return (
    <Layout
      title={translate({ id: "integrations.meta.title", message: "Integrations — Service Connectors" })}
      description={translate({ id: "integrations.meta.desc", message: "Stripe, Twilio, GitHub, Email, YouTube, Docker, and Redis. Pre-built connectors." })}
    >
      <HeroSection
        tag={translate({ id: "integrations.hero.tag", message: "Connectors" })}
        title={translate({ id: "integrations.hero.title", message: "Integrations" })}
        subtitle={translate({ id: "integrations.hero.subtitle", message: "Pre-built connectors for the services your applications need. No glue code required." })}
        className="min-h-[50vh]"
      />

      <GradientDivider />

      <ContentSection>
        <SplitSection
          title={translate({ id: "integrations.catalog.title", message: "Integration Catalog" })}
          description=""
          image={{ src: "/img/integrations-connectors.webp", alt: "Integration connectors" }}
          imagePosition="right"
        >
          <FeatureGrid items={INTEGRATIONS} columns={2} gap="sm" />
        </SplitSection>
      </ContentSection>

      <CTABanner
        title={translate({ id: "integrations.cta.title", message: "Explore Other Layers" })}
        primaryAction={{ label: translate({ id: "integrations.cta.brains", message: "AI Services" }), href: "/brains" }}
        secondaryAction={{ label: translate({ id: "integrations.cta.metal", message: "Metal Services" }), href: "/metal" }}
        background="dark"
      />
    </Layout>
  );
}
