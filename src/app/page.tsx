"use client";
import dynamic from "next/dynamic";

// Dynamically import the Page component and disable SSR
const ClientPage = dynamic(() => import("@/components/Page"), { ssr: false });

export default function PageWrapper() {
  return <ClientPage />;
}
