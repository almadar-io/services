import React from "react";
import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import {
  HeroSection,
  ContentSection,
  FeatureGrid,
  ServiceCatalog,
  CTABanner,
  VStack,
  Typography,
  GradientDivider,
} from "@almadar/ui/marketing";

const LAYERS = [
  {
    icon: "brain-circuit",
    title: translate({ id: "services.layers.brains.title", message: "Brains" }),
    description: translate({ id: "services.layers.brains.desc", message: "LLM orchestration, memory management, session handling, skill agents, and the DeepAgent. The intelligence layer." }),
    href: "/brains",
    linkLabel: translate({ id: "services.layers.brains.link", message: "AI Services" }),
    variant: "interactive" as const,
  },
  {
    icon: "server",
    title: translate({ id: "services.layers.metal.title", message: "Metal" }),
    description: translate({ id: "services.layers.metal.desc", message: "Event bus, persistence, service discovery, storage, queues, authentication, and observability. The infrastructure layer." }),
    href: "/metal",
    linkLabel: translate({ id: "services.layers.metal.link", message: "Compute Services" }),
    variant: "interactive" as const,
  },
  {
    icon: "plug",
    title: translate({ id: "services.layers.integrations.title", message: "Integrations" }),
    description: translate({ id: "services.layers.integrations.desc", message: "Stripe, Twilio, GitHub, Email, YouTube, Docker, Redis. Pre-built connectors for the services your applications need." }),
    href: "/integrations",
    linkLabel: translate({ id: "services.layers.integrations.link", message: "Integration Catalog" }),
    variant: "interactive" as const,
  },
];

const CATALOG = [
  { name: "LLM Orchestrator", layer: "Brains" },
  { name: "DeepAgent SDK", layer: "Brains" },
  { name: "Semantic Memory", layer: "Brains" },
  { name: "S-Expression Engine", layer: "Brains" },
  { name: "Context Manager", layer: "Brains" },
  { name: "Vector Search", layer: "Brains" },
  { name: "Distributed Event Bus", layer: "Metal" },
  { name: "Managed Authentication", layer: "Metal" },
  { name: "Persistent Storage", layer: "Metal" },
  { name: "Service Discovery", layer: "Metal" },
  { name: "Observability Hub", layer: "Metal" },
  { name: "Secret Manager", layer: "Metal" },
  { name: "IAM & RBAC", layer: "Metal" },
  { name: "VPC Networking", layer: "Metal" },
  { name: "Stripe Connector", layer: "Integrations" },
  { name: "Twilio Gateway", layer: "Integrations" },
  { name: "GitHub Automations", layer: "Integrations" },
  { name: "Firebase Sync", layer: "Integrations" },
  { name: "PostgreSQL Bridge", layer: "Integrations" },
  { name: "Redis Cache", layer: "Integrations" },
  { name: "AWS S3 Adapter", layer: "Integrations" },
  { name: "Slack & Discord", layer: "Integrations" },
];

export default function ServicesHome(): ReactNode {
  return (
    <Layout
      title={translate({ id: "services.meta.title", message: "Almadar Services — Infrastructure for the Agentic Era" })}
      description={translate({ id: "services.meta.desc", message: "AI-native compute, storage, and orchestration. Built for applications that agents create and operate." })}
    >
      <HeroSection
        tag={translate({ id: "services.hero.tag", message: "Infrastructure" })}
        title={translate({ id: "services.hero.title", message: "Infrastructure for the Agentic Era" })}
        subtitle={translate({ id: "services.hero.subtitle", message: "AI-native compute, storage, and orchestration. Built for applications that agents create and operate." })}
        primaryAction={{ label: translate({ id: "services.hero.cta1", message: "View Pricing" }), href: "/pricing" }}
        secondaryAction={{ label: translate({ id: "services.hero.cta2", message: "Explore Services" }), href: "/brains" }}
      />

      <ContentSection>
        <VStack gap="lg" align="center" className="container">
          <VStack gap="sm" align="center">
            <Typography variant="h2">
              <Translate id="services.layers.title">Three Layers</Translate>
            </Typography>
            <Typography variant="body" color="muted">
              <Translate id="services.layers.subtitle">Intelligence on top, infrastructure in the middle, integrations at the edge.</Translate>
            </Typography>
          </VStack>
          <FeatureGrid items={LAYERS} columns={3} />
        </VStack>
      </ContentSection>

      <GradientDivider />

      <ContentSection background="alt">
        <VStack gap="lg" align="center" className="container">
          <Typography variant="h2">
            <Translate id="services.catalog.title">Service Catalog</Translate>
          </Typography>
          <ServiceCatalog services={CATALOG} />
        </VStack>
      </ContentSection>

      <CTABanner
        title={translate({ id: "services.waitlist.title", message: "Coming Soon" })}
        subtitle={translate({ id: "services.waitlist.text", message: "Almadar Services is in private beta. Join the waitlist to get early access." })}
        primaryAction={{ label: translate({ id: "services.waitlist.cta", message: "Join Waitlist" }), href: "mailto:hello@almadar.io" }}
        background="dark"
      />
    </Layout>
  );
}
