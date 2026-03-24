import React from "react";
import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import { translate } from "@docusaurus/Translate";
import { HeroSection, PricingGrid, ContentSection, Box } from "@almadar/ui/marketing";
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
      <HeroSection
        title={translate({ id: "svc-pricing.hero.title", message: "Services Pricing" })}
        subtitle={translate({ id: "svc-pricing.hero.subtitle", message: "Open source forever. Cloud hosting when you need it." })}
        className="!overflow-visible"
        backgroundElement={
          <Box className="absolute right-8 top-[10%] w-full max-w-[320px] pointer-events-none hidden lg:flex items-start">
            <ThemedImage
              alt="Pricing Data Page"
              sources={{
                light: useBaseUrl('/img/illustrations/Page-light.svg'),
                dark: useBaseUrl('/img/illustrations/Page-dark.svg'),
              }}
              className="w-full opacity-90 drop-shadow-lg "
            />
          </Box>
        }
      />
      <ContentSection>
        <PricingGrid plans={PLANS} />
      </ContentSection>
    </Layout>
  );
}
