import { HomePage, AboutPage, ContactsPage, FAQPage, GalleryPage, PricesPage, ServicesPage, AppLayout } from "./pages";

export const NAVIGATION = [
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/faq",
                element: <FAQPage />
            },
            {
                path: "/gallery",
                element: <GalleryPage />
            },
            {
                path: "/prices",
                element: <PricesPage />
            },
            {
                path: "/services",
                element: <ServicesPage />
            },
            {
                path: "/contacts",
                element: <ContactsPage />
            }
        ]
    }
]