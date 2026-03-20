import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { ContentSection, VStack, Typography, Button } from "@almadar/ui/marketing";

export default function NotFound(): React.ReactNode {
  return (
    <Layout title="Page not found">
      <ContentSection padding="lg">
        <VStack gap="md" align="center" className="min-h-[60vh] justify-center">
          <Typography variant="caption" className="uppercase tracking-widest">Status</Typography>
          <Typography variant="h1">404</Typography>
          <Typography variant="body" color="danger" className="font-mono">SERVICE_NOT_PROVISIONED</Typography>
          <Typography variant="body" color="muted" className="max-w-[480px] text-center">
            This service endpoint hasn't been provisioned. The resource
            you requested doesn't exist or has been decommissioned.
          </Typography>
          <Link to="/">
            <Button variant="primary" size="lg">Back to Services</Button>
          </Link>
        </VStack>
      </ContentSection>
    </Layout>
  );
}
