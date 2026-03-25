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
      {/* Hero */}
      <Box as="header" className="w-full flex items-center relative overflow-hidden">
        <Box className="site-container py-20 relative z-10">
          <HStack gap="xl" className="flex-col lg:flex-row items-center">
            <VStack gap="lg" align="start" className="flex-1">
              <Badge variant="primary">{translate({ id: "integrations.hero.tag", message: "Connectors" })}</Badge>
              <Typography variant="h1">{translate({ id: "integrations.hero.title", message: "Integrations" })}</Typography>
              <Typography variant="body1" color="muted">{translate({ id: "integrations.hero.subtitle", message: "Pre-built connectors for the services your applications need. No glue code required." })}</Typography>
            </VStack>
            <Box className="flex-1 max-w-[300px]">
              <ThemedImage
                alt="Services Integrations Array"
                sources={{
                  light: useBaseUrl('/img/illustrations/Transition-light.svg'),
                  dark: useBaseUrl('/img/illustrations/Transition-dark.svg'),
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
                <Typography variant="h2">{translate({ id: "integrations.catalog.title", message: "Integration Catalog" })}</Typography>
              </VStack>
            </Box>
            <Box className="flex-1 min-w-0 lg:max-w-[50%]">
              <SimpleGrid cols={2} gap="sm">
                {INTEGRATIONS.map((integration) => (
                  <Card key={integration.title} variant="bordered" padding="md" className="p-6">
                    <VStack gap="sm" align="start">
                      <Typography variant="h4">{integration.title}</Typography>
                      <Typography variant="body2" color="muted">{integration.description}</Typography>
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
              {translate({ id: "integrations.cta.title", message: "Explore Other Layers" })}
            </Typography>
            <Box className="flex gap-4">
              <a href="/brains" className="no-underline" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg">
                  {translate({ id: "integrations.cta.brains", message: "AI Services" })}
                </Button>
              </a>
              <a href="/metal" className="no-underline" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg">
                  {translate({ id: "integrations.cta.metal", message: "Metal Services" })}
                </Button>
              </a>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Layout>
  );
}
