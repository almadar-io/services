import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { Box, VStack, Typography, Button } from "@almadar/ui/marketing";

export default function NotFound(): React.ReactNode {
  return (
    <Layout title="Page not found">
      <Box className="w-full">
        <Box className="site-container py-24">
          <VStack gap="md" align="center" className="min-h-[60vh] justify-center">
            <Typography variant="caption" className="uppercase tracking-widest">Page not found</Typography>
            <Typography variant="h1">404</Typography>
            <Typography variant="body" color="muted" className="font-mono">Page not found</Typography>
            <Typography variant="body" color="muted" className="text-center">
              The page you are looking for does not exist or has been moved.
              Try heading back to the homepage.
            </Typography>
            <Link to="/">
              <Button variant="primary" size="lg">Back to Services</Button>
            </Link>
          </VStack>
        </Box>
      </Box>
    </Layout>
  );
}
