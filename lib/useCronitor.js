import * as Cronitor from "@cronitorio/cronitor-rum-js";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useCronitor = (site, config = {}) => {
  const router = useRouter();

  useEffect(() => {
    Cronitor.load(site, config);

    // Trigger initial page view
    Cronitor.track("Pageview");

    // Add on route change handler for client-side navigation
    const handleRouteChange = () => Cronitor.track("Pageview");
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
};

