import { ServiceAreaPage } from "@/components/ServiceAreaPage";

export default function Camellia() {
  return (
    <ServiceAreaPage
      suburb="Camellia"
      postcode="2142"
      description="Specialised window tinting services for Camellia's industrial and commercial properties. We provide solutions for warehouses, offices, and the emerging residential developments in this transforming precinct."
      localInfo="Camellia is undergoing significant transformation from an industrial hub to a mixed-use precinct with new residential and commercial developments. The area's large industrial buildings, warehouses, and manufacturing facilities benefit from commercial-grade window films that reduce heat, glare, and energy costs. As new apartments and townhouses emerge, we're also serving residential clients seeking privacy and comfort solutions."
      services={[
        "Industrial and warehouse window film solutions",
        "Commercial tinting for offices and manufacturing facilities",
        "Window protection films for enhanced security",
        "Heat-rejecting films for large glass facades",
        "Privacy solutions for new residential developments",
        "After-hours installation for minimal business disruption",
      ]}
      featuredLinks={[
        { title: "Commercial Tinting", path: "/commercial-window-tinting", description: "Industrial and office solutions" },
        { title: "Window Protection", path: "/window-protection-film", description: "Enhanced security for warehouses" },
        { title: "Privacy Film", path: "/privacy-window-film", description: "Solutions for new developments" },
      ]}
    />
  );
}
