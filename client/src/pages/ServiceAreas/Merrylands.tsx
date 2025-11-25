import { ServiceAreaPage } from "@/components/ServiceAreaPage";

export default function Merrylands() {
  return (
    <ServiceAreaPage
      suburb="Merrylands"
      postcode="2160"
      description="Comprehensive window tinting services for Merrylands homes, businesses, and vehicles. From the busy Stockland shopping centre to quiet residential streets, we deliver quality solutions for every need."
      localInfo="Merrylands is a diverse, family-focused suburb with a thriving commercial centre and extensive residential areas. Stockland Merrylands and the surrounding retail precinct create strong demand for commercial window tinting, while the suburb's mix of established homes and new developments requires varied residential solutions. The area's hot western Sydney summers make heat-rejecting window films particularly valuable for comfort and energy savings."
      services={[
        "Commercial tinting for Stockland Merrylands retailers",
        "Residential window films for family homes",
        "Automotive tinting by Protekt Auto",
        "UV protection for sun-exposed rooms",
        "Window protection films for enhanced security",
        "Mobile tinting across Merrylands and Guildford",
      ]}
      featuredLinks={[
        { title: "Commercial Tinting", path: "/commercial-window-tinting", description: "Retail and office solutions" },
        { title: "Window Protection", path: "/window-protection-film", description: "Security and safety films" },
        { title: "Automotive Tinting", path: "/automotive-window-tinting", description: "Professional car tinting" },
      ]}
    />
  );
}
