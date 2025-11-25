import { ServiceAreaPage } from "@/components/ServiceAreaPage";

export default function Silverwater() {
  return (
    <ServiceAreaPage
      suburb="Silverwater"
      postcode="2128"
      description="Industrial and commercial window tinting specialists in Silverwater. We serve the area's extensive business parks, warehouses, and distribution centres with professional-grade solutions."
      localInfo="Silverwater is one of Sydney's major industrial and commercial hubs, home to extensive business parks, warehouses, distribution centres, and manufacturing facilities. The area's large glass facades and skylights create significant heat gain that affects worker comfort and energy costs. Our commercial-grade films help Silverwater businesses reduce cooling expenses while improving workplace conditions. We also provide security films for high-value inventory storage facilities."
      services={[
        "Industrial window films for warehouses and factories",
        "Commercial tinting for business park offices",
        "Security films for distribution centres",
        "Heat-rejecting solutions for large glass facades",
        "Skylight tinting for temperature control",
        "After-hours installation to minimise disruption",
      ]}
      featuredLinks={[
        { title: "Commercial Tinting", path: "/commercial-window-tinting", description: "Industrial business solutions" },
        { title: "Window Protection", path: "/window-protection-film", description: "Security for warehouses" },
        { title: "Ceramic Tint", path: "/ceramic-window-tint", description: "Premium heat rejection" },
      ]}
    />
  );
}
