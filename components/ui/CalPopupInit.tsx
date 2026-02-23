"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { CAL_NAMESPACE } from "@/lib/cal-config";

export default function CalPopupInit() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
          cal("ui", {"theme":"dark","cssVarsPerTheme":{"light":{"cal-brand":"#BAC095"},"dark":{"cal-brand":"#636B2F"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);
  return null;
}
