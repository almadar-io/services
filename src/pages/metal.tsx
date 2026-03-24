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
  Box,
} from "@almadar/ui/marketing";
import { AvlClosedCircuit } from "@almadar/ui/illustrations";
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

const SERVICES = [
  {
    title: "Event Bus",
    description: "Publish-subscribe event routing with guaranteed delivery. Every state machine transition flows through the bus.",
  },
  {
    title: "Event Persistence",
    description: "Full event sourcing. Every event is stored, indexed, and replayable. Rebuild state from any point in time.",
  },
  {
    title: "Service Discovery",
    description: "Automatic service registration and discovery. Applications find each other without manual configuration.",
  },
  {
    title: "Storage",
    description: "Object storage with CDN distribution. Files, images, and documents with automatic optimization.",
  },
  {
    title: "Queue",
    description: "Background job processing with retry logic, dead letter queues, and priority scheduling.",
  },
  {
    title: "Auth",
    description: "Authentication and authorization. Email/password, OAuth providers, API keys, and role-based access control.",
  },
  {
    title: "Observability",
    description: "Logs, metrics, and traces. See what every service and agent is doing in real time.",
  },
];

export default function Metal(): ReactNode {
  return (
    <Layout
      title={translate({ id: "metal.meta.title", message: "Metal — Compute Services" })}
      description={translate({ id: "metal.meta.desc", message: "Event Bus, Event Persistence, Service Discovery, Storage, Queue, Auth, and Observability." })}
    >
      <HeroSection
        tag={translate({ id: "metal.hero.tag", message: "Infrastructure Layer" })}
        title={translate({ id: "metal.hero.title", message: "Metal" })}
        subtitle={translate({ id: "metal.hero.subtitle", message: "The infrastructure layer. Event-driven compute, persistent storage, and platform services." })}
        className="min-h-[50vh]"
      />

      <GradientDivider />

      <ContentSection>
        <SplitSection
          title={translate({ id: "metal.services.title", message: "Compute Services" })}
          description=""
          image={{ src: "/img/metal-eventbus.webp", alt: "Event bus architecture" }}
          imagePosition="right"
        >
          <FeatureGrid items={SERVICES} columns={2} gap="sm" />
        </SplitSection>
      </ContentSection>

      <ContentSection background="alt">
        <Box className="w-full max-w-[450px] mx-auto py-6">
          <ThemedImage
            alt="Metal Infrastructure Application Topology"
            sources={{
              light: useBaseUrl('/img/illustrations/Application-light.svg'),
              dark: useBaseUrl('/img/illustrations/Application-dark.svg'),
            }}
            className="w-full drop-shadow-2xl "
          />
        </Box>
      </ContentSection>

      <CTABanner
        title={translate({ id: "metal.cta.title", message: "Explore Other Layers" })}
        primaryAction={{ label: translate({ id: "metal.cta.brains", message: "AI Services" }), href: "/brains" }}
        secondaryAction={{ label: translate({ id: "metal.cta.integrations", message: "Integrations" }), href: "/integrations" }}
        background="dark"
      />
    </Layout>
  );
}
