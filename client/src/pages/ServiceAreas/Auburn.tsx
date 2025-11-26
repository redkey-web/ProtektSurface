import { ServiceAreaPage } from "@/components/ServiceAreaPage";

export default function Auburn() {
  return (
    <ServiceAreaPage
      suburb="Auburn"
      postcode="2144"
      description="Professional window tinting services for Auburn's growing community of families, businesses, and automotive enthusiasts. We serve residential properties, commercial centres, and provide expert car tinting."
      localInfo="Auburn is a diverse and rapidly developing suburb with excellent transport links and a strong community feel. The area's mix of family homes, new apartment developments around Auburn Central, and busy commercial areas creates diverse window tinting needs. With its location in Sydney's hot western corridor, Auburn residents benefit significantly from heat-rejecting window films that can reduce energy costs by up to 30%."
      services={[
        "Residential window tinting for family homes and apartments",
        "Commercial window films for Auburn Central businesses",
        "Automotive window tinting by Protekt Auto",
        "Frosted decorative films for bathroom and office privacy",
        "Window protection films for ground-floor security",
        "On-site flat glass installation throughout Auburn and surrounds",
      ]}
      featuredLinks={[
        { title: "Automotive Tinting", path: "/automotive-window-tinting", description: "Professional car tinting by Protekt Auto" },
        { title: "Frosted Film", path: "/frosted-decorative-window-film", description: "Decorative privacy for any space" },
        { title: "Window Protection", path: "/window-protection-film", description: "Enhanced security for your property" },
      ]}
    />
  );
}
