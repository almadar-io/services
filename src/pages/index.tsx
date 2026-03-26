import React from "react";
import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import {
  VStack,
  HStack,
  Typography,
  Box,
  Card,
  Badge,
  Button,
  Icon,
  SimpleGrid,
  AnimatedReveal,
} from "@almadar/ui/marketing";
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { OrbitalHeroBackground } from "../components/OrbitalHeroBackground";

const LAYERS = [
  {
    icon: "brain-circuit",
    title: translate({ id: "services.layers.brains.title", message: "Brains" }),
    description: translate({ id: "services.layers.brains.desc", message: "LLM orchestration, memory management, session handling, skill agents, and the DeepAgent. The intelligence layer." }),
    href: "/brains",
    linkLabel: translate({ id: "services.layers.brains.link", message: "AI Services" }),
  },
  {
    icon: "server",
    title: translate({ id: "services.layers.metal.title", message: "Metal" }),
    description: translate({ id: "services.layers.metal.desc", message: "Event bus, persistence, service discovery, storage, queues, authentication, and observability. The infrastructure layer." }),
    href: "/metal",
    linkLabel: translate({ id: "services.layers.metal.link", message: "Compute Services" }),
  },
  {
    icon: "plug",
    title: translate({ id: "services.layers.integrations.title", message: "Integrations" }),
    description: translate({ id: "services.layers.integrations.desc", message: "Stripe, Twilio, GitHub, Email, YouTube, Docker, Redis. Pre-built connectors for the services your applications need." }),
    href: "/integrations",
    linkLabel: translate({ id: "services.layers.integrations.link", message: "Integration Catalog" }),
  },
];

const CATALOG = [
  { name: "LLM Orchestrator", layer: "Brains", icon: "brain" },
  { name: "DeepAgent SDK", layer: "Brains", icon: "bot" },
  { name: "Semantic Memory", layer: "Brains", icon: "database" },
  { name: "S-Expression Engine", layer: "Brains", icon: "code" },
  { name: "Context Manager", layer: "Brains", icon: "layers" },
  { name: "Vector Search", layer: "Brains", icon: "search" },
  { name: "Distributed Event Bus", layer: "Metal", icon: "radio" },
  { name: "Managed Authentication", layer: "Metal", icon: "shield" },
  { name: "Persistent Storage", layer: "Metal", icon: "hard-drive" },
  { name: "Service Discovery", layer: "Metal", icon: "compass" },
  { name: "Observability Hub", layer: "Metal", icon: "activity" },
  { name: "Secret Manager", layer: "Metal", icon: "lock" },
  { name: "IAM & RBAC", layer: "Metal", icon: "users" },
  { name: "VPC Networking", layer: "Metal", icon: "network" },
  { name: "Stripe Connector", layer: "Integrations", icon: "credit-card" },
  { name: "Twilio Gateway", layer: "Integrations", icon: "phone" },
  { name: "GitHub Automations", layer: "Integrations", icon: "github" },
  { name: "Firebase Sync", layer: "Integrations", icon: "flame" },
  { name: "PostgreSQL Bridge", layer: "Integrations", icon: "database" },
  { name: "Redis Cache", layer: "Integrations", icon: "zap" },
  { name: "AWS S3 Adapter", layer: "Integrations", icon: "cloud" },
  { name: "Slack & Discord", layer: "Integrations", icon: "message-circle" },
];

export default function ServicesHome(): ReactNode {
  return (
    <Layout
      title={translate({ id: "services.meta.title", message: "Almadar Services — Infrastructure for the Agentic Era" })}
      description={translate({ id: "services.meta.desc", message: "AI-native compute, storage, and orchestration. Built for applications that agents create and operate." })}
    >
      {/* Hero */}
      <Box as="header" className="w-full flex items-center relative overflow-hidden">
        <OrbitalHeroBackground />
        <Box className="site-container py-20 relative z-10">
          <HStack gap="xl" className="flex-col lg:flex-row items-center">
            <VStack gap="lg" align="start" className="flex-1">
              <Badge variant="primary">{translate({ id: "services.hero.tag", message: "Infrastructure" })}</Badge>
              <Typography variant="h1">{translate({ id: "services.hero.title", message: "Infrastructure for the Agentic Era" })}</Typography>
              <Typography variant="body1" color="muted">{translate({ id: "services.hero.subtitle", message: "AI-native compute, storage, and orchestration. Built for applications that agents create and operate." })}</Typography>
              <Box className="flex gap-4 flex-wrap">
                <a href="/pricing" className="no-underline">
                  <Button variant="primary" size="lg">{translate({ id: "services.hero.cta1", message: "View Pricing" })}</Button>
                </a>
                <a href="/brains" className="no-underline">
                  <Button variant="secondary" size="lg">{translate({ id: "services.hero.cta2", message: "Explore Services" })}</Button>
                </a>
              </Box>
            </VStack>
          </HStack>
        </Box>
      </Box>

      {/* Three Layers */}
      <Box className="w-full">
        <Box className="site-container py-24">
          <VStack gap="lg" align="center" className="w-full">
            <AnimatedReveal animation="fade-in">
              <VStack gap="sm" align="center">
                <Typography variant="h2">
                  <Translate id="services.layers.title">Three Layers</Translate>
                </Typography>
                <Typography variant="body" color="muted">
                  <Translate id="services.layers.subtitle">Intelligence on top, infrastructure in the middle, integrations at the edge.</Translate>
                </Typography>
              </VStack>
            </AnimatedReveal>
            <SimpleGrid cols={3} gap="md">
              {LAYERS.map((layer, i) => (
                <AnimatedReveal key={layer.title} animation="fade-up" delay={i * 100} className="h-full">
                  <Card
                    variant="interactive"
                    padding="md"
                    className="hover:border-[var(--color-primary)] p-6 h-full"
                    onClick={() => window.open(layer.href, '_blank', 'noopener,noreferrer')}
                  >
                    <VStack gap="md" align="start">
                      <Icon name={layer.icon} size="xl" className="text-[var(--color-accent,#06b6d4)]" />
                      <Typography variant="h4">{layer.title}</Typography>
                      <Typography variant="body2" color="muted">{layer.description}</Typography>
                    </VStack>
                  </Card>
                </AnimatedReveal>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </Box>

      {/* Gradient Divider */}
      <Box
        className="w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--color-primary), transparent)' }}
      />

      {/* Service Catalog */}
      <Box className="w-full bg-[var(--color-surface)]">
        <Box className="site-container py-24">
          <VStack gap="lg" align="center" className="w-full">
            <AnimatedReveal animation="fade-in">
              <VStack gap="md" align="center">
                <Typography variant="h2">
                  <Translate id="services.catalog.title">Service Catalog</Translate>
                </Typography>
                <Typography variant="body" color="muted">
                  <Translate id="services.catalog.desc">Every service communicates through the event bus. Emit, listen, and compose.</Translate>
                </Typography>
              </VStack>
            </AnimatedReveal>
            <SimpleGrid cols={4} gap="sm">
              {CATALOG.map((service, i) => (
                <AnimatedReveal key={service.name} animation="fade-up" delay={Math.floor(i / 4) * 100} className="h-full">
                  <Card variant="bordered" padding="sm" className="p-4 h-full">
                    <VStack gap="sm" align="start">
                      <Icon name={service.icon} size={18} className="text-accent" />
                      <Typography variant="body2">{service.name}</Typography>
                      <Badge size="sm">{service.layer}</Badge>
                    </VStack>
                  </Card>
                </AnimatedReveal>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </Box>

      {/* CTA Banner */}
      <Box className="w-full bg-[var(--color-surface)]">
        <Box className="site-container py-16">
          <AnimatedReveal animation="fade-in">
            <VStack gap="lg" align="center">
              <Typography variant="h2" align="center">
                {translate({ id: "services.waitlist.title", message: "Coming Soon" })}
              </Typography>
              <Typography variant="body" color="muted" align="center">
                {translate({ id: "services.waitlist.text", message: "Almadar Services is in private beta. Join the waitlist to get early access." })}
              </Typography>
              <Box className="flex gap-4">
                <a href="mailto:hello@almadar.io" className="no-underline" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg">
                    {translate({ id: "services.waitlist.cta", message: "Join Waitlist" })}
                  </Button>
                </a>
              </Box>
            </VStack>
          </AnimatedReveal>
        </Box>
      </Box>
    </Layout>
  );
}
