import React from "react";
import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import { translate } from "@docusaurus/Translate";
import { Check } from "lucide-react";
import {
  Box,
  VStack,
  HStack,
  Typography,
  Button,
  Badge,
  Card,
  Icon,
  Divider,
  Spacer,
  SimpleGrid,
} from "@almadar/ui/marketing";
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

const PLANS = [
  {
    name: translate({ id: "svc-pricing.oss.name", message: "OSS" }),
    price: translate({ id: "svc-pricing.oss.price", message: "Free" }),
    description: translate({ id: "svc-pricing.oss.desc", message: "Self-host everything. The full platform is open source." }),
    features: ["All services included", "Self-hosted infrastructure", "Community support", "No usage limits"],
    action: {
      label: translate({ id: "svc-pricing.oss.cta", message: "View on GitHub" }),
      href: "https://github.com/almadar-io/almadar",
    },
    highlighted: false,
  },
  {
    name: translate({ id: "svc-pricing.cloud.name", message: "Cloud" }),
    price: translate({ id: "svc-pricing.cloud.price", message: "Coming Soon" }),
    description: translate({ id: "svc-pricing.cloud.desc", message: "Managed hosting with usage-based billing. No upfront costs." }),
    features: ["Managed infrastructure", "Automatic scaling", "99.9% SLA", "Email support"],
    action: {
      label: translate({ id: "svc-pricing.cloud.cta", message: "Join Waitlist" }),
      href: "mailto:hello@almadar.io",
    },
    highlighted: true,
    badge: "Coming Soon",
  },
  {
    name: translate({ id: "svc-pricing.enterprise.name", message: "Enterprise" }),
    price: translate({ id: "svc-pricing.enterprise.price", message: "Coming Soon" }),
    description: translate({ id: "svc-pricing.enterprise.desc", message: "Dedicated infrastructure, custom SLAs, and priority support." }),
    features: ["Dedicated cluster", "Custom AI models", "On-premise option", "24/7 support", "Custom SLA"],
    action: {
      label: translate({ id: "svc-pricing.enterprise.cta", message: "Contact Us" }),
      href: "mailto:hello@almadar.io",
    },
    highlighted: false,
    badge: "Coming Soon",
  },
];

export default function ServicesPricing(): ReactNode {
  return (
    <Layout
      title={translate({ id: "svc-pricing.meta.title", message: "Pricing — Almadar Services" })}
      description={translate({ id: "svc-pricing.meta.desc", message: "OSS free forever. Cloud pay-per-use coming soon. Enterprise with custom pricing." })}
    >
      {/* Hero */}
      <Box as="header" className="w-full flex items-center relative overflow-hidden">
        <Box className="site-container py-20 relative z-10">
          <HStack gap="xl" className="flex-col lg:flex-row items-center">
            <VStack gap="lg" align="start" className="flex-1">
              <Typography variant="h1">
                {translate({ id: "svc-pricing.hero.title", message: "Services Pricing" })}
              </Typography>
              <Typography variant="body1" color="muted">
                {translate({ id: "svc-pricing.hero.subtitle", message: "Open source forever. Cloud hosting when you need it." })}
              </Typography>
            </VStack>
            <Box className="flex-1 max-w-[300px]">
              <ThemedImage
                alt="Pricing Data Page"
                sources={{
                  light: useBaseUrl('/img/illustrations/Page-light.svg'),
                  dark: useBaseUrl('/img/illustrations/Page-dark.svg'),
                }}
                className="w-full opacity-90 drop-shadow-lg"
              />
            </Box>
          </HStack>
        </Box>
      </Box>

      {/* Pricing Cards */}
      <Box className="w-full">
        <Box className="site-container py-24">
          <SimpleGrid cols={3} gap="lg" className="items-stretch">
            {PLANS.map((plan) => (
              <Card
                key={plan.name}
                variant={plan.highlighted ? "elevated" : "bordered"}
                padding="lg"
                className={[
                  "flex flex-col h-full hover:-translate-y-1 transition-all p-6",
                  plan.highlighted && "border-[length:2px] border-[var(--color-primary)] shadow-[var(--shadow-lg)] scale-[1.05] ring-2 ring-[var(--color-primary)]",
                ].filter(Boolean).join(" ")}
              >
                <VStack gap="md" className="flex-1">
                  {plan.badge && <Badge variant="primary" size="sm">{plan.badge}</Badge>}
                  <Typography variant="h3">{plan.name}</Typography>
                  <Typography variant="h2" className="text-[var(--color-primary)] font-bold">{plan.price}</Typography>
                  {plan.description && <Typography variant="body2" color="muted">{plan.description}</Typography>}
                  <Divider />
                  <VStack gap="sm">
                    {plan.features.map((feature) => (
                      <HStack key={feature} gap="sm" align="center">
                        <Icon icon={Check} size="sm" className="flex-shrink-0 text-[var(--color-success)]" />
                        <Typography variant="body2">{feature}</Typography>
                      </HStack>
                    ))}
                  </VStack>
                </VStack>
                <Box className="mt-auto pt-6">
                  <a href={plan.action.href} className="no-underline w-full" target="_blank" rel="noopener noreferrer">
                    <Button variant={plan.highlighted ? "primary" : "secondary"} size="lg" className="w-full">
                      {plan.action.label}
                    </Button>
                  </a>
                </Box>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Layout>
  );
}
