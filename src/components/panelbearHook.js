import * as Panelbear from "@panelbear/panelbear-js";
import { useEffect } from "react";

export const usePanelbear = (site, config = {}) => {

  useEffect(() => {
    Panelbear.load(site, config);
    
    // Trigger initial page view
    Panelbear.trackPageview();
  }, []);
};

