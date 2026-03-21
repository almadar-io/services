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
import { AvlStateMachine } from "@almadar/ui/illustrations";

const SERVICES = [
  {
    title: "LLM Service",
    description: "Unified API for multiple LLM providers. Automatic model selection based on task complexity. Token-level cost tracking.",
  },
  {
    title: "Memory Manager",
    description: "Persistent conversation memory with semantic retrieval. Agents remember context across sessions and projects.",
  },
  {
    title: "Session Manager",
    description: "Manages agent sessions with state persistence, timeout handling, and multi-user isolation.",
  },
  {
    title: "Skill Agent",
    description: "Specialized agents for specific tasks: code generation, data modeling, UI design, testing. Composable into workflows.",
  },
  {
    title: "DeepAgent",
    description: "The orchestration agent. Breaks complex requests into skill chains, manages execution, and assembles results into coherent output.",
  },
  {
    title: "Agent Builder",
    description: "Create custom agents with specific skills, prompts, and memory configurations. Deploy them as API endpoints.",
  },
  {
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
      <HeroSection
        tag={translate({ id: "brains.hero.tag", message: "AI Layer" })}
        title={translate({ id: "brains.hero.title", message: "Brains" })}
        subtitle={translate({ id: "brains.hero.subtitle", message: "The intelligence layer. LLM orchestration, memory, sessions, and autonomous agents." })}
        className="min-h-[50vh]"
      />

      <GradientDivider />

      <ContentSection>
        <SplitSection
          title={translate({ id: "brains.services.title", message: "AI Services" })}
          description=""
          image={{ src: "/img/brains-orchestration.webp", alt: "Agent orchestration" }}
          imagePosition="right"
        >
          <FeatureGrid items={SERVICES} columns={2} gap="sm" />
        </SplitSection>
      </ContentSection>

      <ContentSection background="alt">
        <Box className="w-full max-w-4xl mx-auto py-6">
          <AvlStateMachine
            className="w-full"
            states={[
              { name: "Idle", isInitial: true },
              { name: "Planning" },
              { name: "Executing" },
              { name: "Verifying" },
              { name: "Done", isTerminal: true },
            ]}
            transitions={[
              { from: "Idle", to: "Planning", event: "REQUEST" },
              { from: "Planning", to: "Executing", effects: ["call-service"] },
              { from: "Executing", to: "Verifying", guard: "check" },
              { from: "Verifying", to: "Done", effects: ["render-ui"] },
              { from: "Verifying", to: "Planning", event: "RETRY" },
            ]}
          />
        </Box>
      </ContentSection>

      <CTABanner
        title={translate({ id: "brains.cta.title", message: "Explore Other Layers" })}
        primaryAction={{ label: translate({ id: "brains.cta.metal", message: "Metal Services" }), href: "/metal" }}
        secondaryAction={{ label: translate({ id: "brains.cta.integrations", message: "Integrations" }), href: "/integrations" }}
        background="dark"
      />
    </Layout>
  );
}
