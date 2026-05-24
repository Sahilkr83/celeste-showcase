import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { motion } from "framer-motion";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      {
        name: "description",
        content:
          "Aura Portfolio is a modern, responsive creative portfolio website built with React.",
      },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      {
        property: "og:description",
        content:
          "Aura Portfolio is a modern, responsive creative portfolio website built with React.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lovable App" },
      {
        name: "twitter:description",
        content:
          "Aura Portfolio is a modern, responsive creative portfolio website built with React.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/af5b84d1-b90f-47a5-a4b8-c19f86a192ac/id-preview-9add97ab--7e9382fb-58d5-4c47-a309-9b44c279b32f.lovable.app-1778926599309.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/af5b84d1-b90f-47a5-a4b8-c19f86a192ac/id-preview-9add97ab--7e9382fb-58d5-4c47-a309-9b44c279b32f.lovable.app-1778926599309.png",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}",
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundShapes } from "@/components/BackgroundShapes";
import SplashCursor from "@/components/SplashCursor";
import { useEffect, useMemo, useState } from "react";
import { TransitionProvider, useTransitionLoader } from "@/context/transition-context";
import { IntroTransition } from "@/components/IntroTransition";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [isMounted, setIsMounted] = useState(false);
  const particlePositions = useMemo(
    () =>
      Array.from({ length: 25 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      })),
    [],
  );
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TransitionProvider>
        <AppShell isMounted={isMounted} particlePositions={particlePositions} />
      </TransitionProvider>
    </QueryClientProvider>
  );
}

type ParticlePosition = {
  top: string;
  left: string;
};

function AppShell({
  isMounted,
  particlePositions,
}: {
  isMounted: boolean;
  particlePositions: ParticlePosition[];
}) {
  const { isRedirecting } = useTransitionLoader();

  return (
    <div className="relative flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#050816] text-foreground antialiased">
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={8}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE
        COLOR="#A855F7"
      />
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {isMounted &&
              particlePositions.map((position, i) => (
                <motion.span
                  key={i}
                  initial={{
                    opacity: 0.2,
                    y: 0,
                  }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    y: [-20, 20, -20],
                  }}
                  transition={{
                    duration: 4 + i * 0.2,
                    repeat: Infinity,
                  }}
                  className="absolute h-1 w-1 rounded-full bg-blue-400"
                  style={position}
                />
              ))}
          </div>

          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
