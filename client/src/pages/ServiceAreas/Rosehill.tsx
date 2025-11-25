import { ServiceAreaPage } from "@/components/ServiceAreaPage";

export default function Rosehill() {
  return (
    <ServiceAreaPage
      suburb="Rosehill"
      postcode="2142"
      description="Specialised window tinting for Rosehill's unique mix of industrial facilities, commercial properties, and the famous Rosehill Gardens racecourse precinct."
      localInfo="Rosehill is known for its industrial estates, Rosehill Gardens Racecourse, and the surrounding commercial areas. The suburb's large industrial buildings and warehouses benefit from commercial-grade window films that reduce heat, glare, and energy costs. Businesses in the area appreciate our after-hours installation service to minimise operational disruption. The Rosehill Gardens precinct and nearby hospitality venues also use our films for guest comfort."
      services={[
        "Industrial window films for warehouses and factories",
        "Commercial tinting for offices and showrooms",
        "Large-scale glass facade solutions",
        "Heat-rejecting films for hospitality venues",
        "Security window films for industrial properties",
        "After-hours installation available",
      ]}
      featuredLinks={[
        { title: "Commercial Tinting", path: "/commercial-window-tinting", description: "Industrial and office solutions" },
        { title: "Window Protection", path: "/window-protection-film", description: "Security for commercial properties" },
        { title: "Ceramic Tint", path: "/ceramic-window-tint", description: "Maximum heat rejection" },
      ]}
    />
  );
}
