import React from "react";
import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import {
  Box,
  VStack,
  HStack,
  Typography,
  Badge,
  Button,
  Card,
  SimpleGrid,
} from "@almadar/ui/marketing";
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
      {/* Hero */}
      <Box as="header" className="w-full flex items-center relative overflow-hidden">
        <Box className="site-container py-20 relative z-10">
          <HStack gap="xl" className="flex-col lg:flex-row items-center">
            <VStack gap="lg" align="start" className="flex-1">
              <Badge variant="primary">{translate({ id: "metal.hero.tag", message: "Infrastructure Layer" })}</Badge>
              <Typography variant="h1">{translate({ id: "metal.hero.title", message: "Metal" })}</Typography>
              <Typography variant="body1" color="muted">{translate({ id: "metal.hero.subtitle", message: "The infrastructure layer. Event-driven compute, persistent storage, and platform services." })}</Typography>
            </VStack>
            <Box className="flex-1 max-w-[300px]">
              <ThemedImage
                alt="Metal Infrastructure Application Topology"
                sources={{
                  light: useBaseUrl('/img/illustrations/Application-light.svg'),
                  dark: useBaseUrl('/img/illustrations/Application-dark.svg'),
                }}
                className="w-full drop-shadow-2xl"
              />
            </Box>
          </HStack>
        </Box>
      </Box>

      {/* Gradient Divider */}
      <Box
        className="w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--color-primary), transparent)' }}
      />

      {/* Split: Title + Feature Grid */}
      <Box className="w-full">
        <Box className="site-container py-24">
          <Box className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <Box className="flex-1 min-w-0 lg:min-w-[45%]">
              <VStack gap="md">
                <Typography variant="h2">{translate({ id: "metal.services.title", message: "Compute Services" })}</Typography>
              </VStack>
            </Box>
            <Box className="flex-1 min-w-0 lg:max-w-[50%]">
              <SimpleGrid cols={2} gap="sm">
                {SERVICES.map((service) => (
                  <Card key={service.title} variant="bordered" padding="md" className="p-6">
                    <VStack gap="sm" align="start">
                      <Typography variant="h4">{service.title}</Typography>
                      <Typography variant="body2" color="muted">{service.description}</Typography>
                    </VStack>
                  </Card>
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* CTA Banner */}
      <Box className="w-full bg-[var(--color-surface)]">
        <Box className="site-container py-16">
          <VStack gap="lg" align="center">
            <Typography variant="h2" align="center">
              {translate({ id: "metal.cta.title", message: "Explore Other Layers" })}
            </Typography>
            <Box className="flex gap-4">
              <a href="/brains" className="no-underline" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg">
                  {translate({ id: "metal.cta.brains", message: "AI Services" })}
                </Button>
              </a>
              <a href="/integrations" className="no-underline" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg">
                  {translate({ id: "metal.cta.integrations", message: "Integrations" })}
                </Button>
              </a>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Layout>
  );
}
