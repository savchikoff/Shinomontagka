import { lazy } from "react";

export const AppLayout = lazy(() => import("../components/AppLayout/AppLayout"));

export const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
export const AboutPage = lazy(() => import("../pages/AboutPage/AboutPage"));
export const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
export const FAQPage = lazy(() => import("../pages/FAQPage/FAQPage"));
export const GalleryPage = lazy(() => import("../pages/GalleryPage/GalleryPage"));
export const PricesPage = lazy(() => import("../pages/PricesPage/PricesPage"));
export const ServicesPage = lazy(() => import("../pages/ServicesPage/ServicesPage"));

