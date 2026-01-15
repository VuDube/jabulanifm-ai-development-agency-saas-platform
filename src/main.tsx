import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { PageWrapper } from '@/components/layout/PageWrapper';
// Pages
import { HomePage } from '@/pages/HomePage';
import { SolutionsPage } from '@/pages/SolutionsPage';
import { PricingPage } from '@/pages/PricingPage';
import { AboutPage } from '@/pages/AboutPage';
import { CaseStudiesPage } from '@/pages/CaseStudiesPage';
import { ContactPage } from '@/pages/ContactPage';
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageWrapper><HomePage /></PageWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/solutions",
    element: <PageWrapper><SolutionsPage /></PageWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/pricing",
    element: <PageWrapper><PricingPage /></PageWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/about",
    element: <PageWrapper><AboutPage /></PageWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/case-studies",
    element: <PageWrapper><CaseStudiesPage /></PageWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/contact",
    element: <PageWrapper><ContactPage /></PageWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>,
)