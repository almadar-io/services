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
  Icon,
  SimpleGrid,
} from "@almadar/ui/marketing";

const SERVICES = [
  {
    icon: "brain" as const,
    title: "LLM Service",
    description: "Unified API for multiple LLM providers. Automatic model selection based on task complexity. Token-level cost tracking.",
  },
  {
    icon: "database" as const,
    title: "Memory Manager",
    description: "Persistent conversation memory with semantic retrieval. Agents remember context across sessions and projects.",
  },
  {
    icon: "timer" as const,
    title: "Session Manager",
    description: "Manages agent sessions with state persistence, timeout handling, and multi-user isolation.",
  },
  {
    icon: "wand-2" as const,
    title: "Skill Agent",
    description: "Specialized agents for specific tasks: code generation, data modeling, UI design, testing. Composable into workflows.",
  },
  {
    icon: "bot" as const,
    title: "DeepAgent",
    description: "The orchestration agent. Breaks complex requests into skill chains, manages execution, and assembles results into coherent output.",
  },
  {
    icon: "wrench" as const,
    title: "Agent Builder",
    description: "Create custom agents with specific skills, prompts, and memory configurations. Deploy them as API endpoints.",
  },
  {
    icon: "layout" as const,
    title: "UI Builder",
    description: "AI-powered interface generation. Describe a screen, get a production-quality component using the Almadar design system.",
  },
];

export default function Brains(): ReactNode {
  return (
    <Layout
      title={translate({ id: "brains.meta.title", message: "Brains — AI Services" })}
      description={translate({ id: "brains.meta.desc", message: "LLM orchestration, memory management, session handling, skill agents, and the DeepAgent." })}
    >
      {/* Hero */}
      <Box as="header" className="w-full flex items-center relative overflow-hidden">
        <Box className="site-container py-20 relative z-10">
          <HStack gap="xl" className="flex-col lg:flex-row items-center">
            <VStack gap="lg" align="start" className="flex-1">
              <Badge variant="primary">{translate({ id: "brains.hero.tag", message: "AI Layer" })}</Badge>
              <Typography variant="h1">{translate({ id: "brains.hero.title", message: "Brains" })}</Typography>
              <Typography variant="body1" color="muted">{translate({ id: "brains.hero.subtitle", message: "The intelligence layer. LLM orchestration, memory, sessions, and autonomous agents." })}</Typography>
            </VStack>
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
                <Typography variant="h2">{translate({ id: "brains.services.title", message: "AI Services" })}</Typography>
              </VStack>
            </Box>
            <Box className="flex-1 min-w-0 lg:max-w-[50%]">
              <SimpleGrid cols={2} gap="sm">
                {SERVICES.map((service) => (
                  <Card key={service.title} variant="bordered" padding="md" className="p-6">
                    <VStack gap="sm" align="start">
                      <Icon name={service.icon} size={24} className="text-[var(--color-accent)]" />
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
              {translate({ id: "brains.cta.title", message: "Explore Other Layers" })}
            </Typography>
            <Box className="flex gap-4">
              <a href="/metal" className="no-underline" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg">
                  {translate({ id: "brains.cta.metal", message: "Metal Services" })}
                </Button>
              </a>
              <a href="/integrations" className="no-underline" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg">
                  {translate({ id: "brains.cta.integrations", message: "Integrations" })}
                </Button>
              </a>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Layout>
  );
}
