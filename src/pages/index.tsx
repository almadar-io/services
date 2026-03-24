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
  Box,
  GradientDivider,
} from "@almadar/ui/marketing";
import { AvlOrbital, AvlEntity, AvlBinding, AvlEmitListen } from "@almadar/ui/illustrations";
import { OrbitalHeroBackground } from "../components/OrbitalHeroBackground";

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
        backgroundElement={<OrbitalHeroBackground />}
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
          <Box className="w-full max-w-4xl mx-auto py-6">
            <svg viewBox="0 0 800 360" fill="none" className="w-full">
              {/* Layer 1: Brains — three orbitals across */}
              <AvlOrbital cx={200} cy={70} r={48} label="LLM" color="#a78bfa" />
              <AvlEntity x={200} y={70} r={14} fieldCount={3} color="#a78bfa" />
              <AvlOrbital cx={400} cy={70} r={48} label="DeepAgent" color="#a78bfa" />
              <AvlEntity x={400} y={70} r={14} fieldCount={4} color="#a78bfa" />
              <AvlOrbital cx={600} cy={70} r={48} label="Memory" color="#a78bfa" />
              <AvlEntity x={600} y={70} r={14} fieldCount={2} color="#a78bfa" />
              {/* Brains inter-connections */}
              <AvlBinding x1={248} y1={70} x2={352} y2={70} color="#a78bfa" />
              <AvlBinding x1={448} y1={70} x2={552} y2={70} color="#a78bfa" />
              {/* Layer label */}
              <text x={60} y={75} fill="#a78bfa" fontSize={13} fontFamily="inherit" fontWeight="bold" opacity={0.7}>Brains</text>

              {/* Layer 2: Metal — three orbitals across */}
              <AvlOrbital cx={200} cy={195} r={48} label="Events" color="#60a5fa" />
              <AvlEntity x={200} y={195} r={14} fieldCount={5} color="#60a5fa" />
              <AvlOrbital cx={400} cy={195} r={48} label="Storage" color="#60a5fa" />
              <AvlEntity x={400} y={195} r={14} fieldCount={4} color="#60a5fa" />
              <AvlOrbital cx={600} cy={195} r={48} label="Auth" color="#60a5fa" />
              <AvlEntity x={600} y={195} r={14} fieldCount={3} color="#60a5fa" />
              {/* Metal inter-connections */}
              <AvlBinding x1={248} y1={195} x2={352} y2={195} color="#60a5fa" />
              <AvlBinding x1={448} y1={195} x2={552} y2={195} color="#60a5fa" />
              {/* Layer label */}
              <text x={60} y={200} fill="#60a5fa" fontSize={13} fontFamily="inherit" fontWeight="bold" opacity={0.7}>Metal</text>

              {/* Cross-layer bindings (Brains → Metal) */}
              <AvlBinding x1={200} y1={118} x2={200} y2={147} color="#a78bfa" />
              <AvlBinding x1={400} y1={118} x2={400} y2={147} color="#a78bfa" />
              <AvlBinding x1={600} y1={118} x2={600} y2={147} color="#a78bfa" />

              {/* Layer 3: Integrations — three orbitals across */}
              <AvlOrbital cx={200} cy={315} r={40} label="Stripe" color="#34d399" />
              <AvlEntity x={200} y={315} r={12} fieldCount={2} color="#34d399" />
              <AvlOrbital cx={360} cy={315} r={40} label="Twilio" color="#34d399" />
              <AvlEntity x={360} y={315} r={12} fieldCount={2} color="#34d399" />
              <AvlOrbital cx={520} cy={315} r={40} label="GitHub" color="#34d399" />
              <AvlEntity x={520} y={315} r={12} fieldCount={3} color="#34d399" />
              <AvlOrbital cx={680} cy={315} r={40} label="Redis" color="#34d399" />
              <AvlEntity x={680} y={315} r={12} fieldCount={2} color="#34d399" />
              {/* Layer label */}
              <text x={40} y={320} fill="#34d399" fontSize={13} fontFamily="inherit" fontWeight="bold" opacity={0.7}>Integrations</text>

              {/* Cross-layer bindings (Metal → Integrations) */}
              <AvlBinding x1={200} y1={243} x2={200} y2={275} color="#60a5fa" />
              <AvlBinding x1={400} y1={243} x2={360} y2={275} color="#60a5fa" />
              <AvlBinding x1={600} y1={243} x2={520} y2={275} color="#60a5fa" />
            </svg>
          </Box>
        </VStack>
      </ContentSection>

      <GradientDivider />

      <ContentSection background="alt">
        <VStack gap="lg" align="center" className="container">
          <Typography variant="h2">
            <Translate id="services.catalog.title">Service Catalog</Translate>
          </Typography>
          <Box className="w-full max-w-4xl mx-auto py-6">
            <AvlEmitListen className="w-full" emitter={{ name: "Service A", fields: 3 }} listener={{ name: "Service B", fields: 2 }} eventName="EVENT" />
          </Box>
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
