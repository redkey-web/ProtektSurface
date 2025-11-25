import { ServiceAreaPage } from "@/components/ServiceAreaPage";

export default function Penrith() {
  return (
    <ServiceAreaPage
      suburb="Penrith"
      postcode="2750"
      description="Comprehensive window tinting services for Penrith and the Blue Mountains foothills. Serving families, businesses, and car owners throughout Western Sydney's fastest-growing region."
      localInfo="Penrith sits at the foot of the Blue Mountains and regularly records Sydney's highest summer temperatures. This makes quality heat-rejecting window films essential for local homes and businesses. The area's mix of established family suburbs, new housing estates like Jordan Springs, and the busy Penrith CBD creates diverse tinting needs. Our mobile service covers all of Penrith, from High Street businesses to residential areas near the Panthers precinct."
      services={[
        "Residential window tinting for established and new homes",
        "Commercial films for Westfield Penrith and local businesses",
        "Automotive tinting for Penrith's car enthusiast community",
        "UV blocking films to protect furnishings from intense sun",
        "Energy-efficient ceramic films for maximum heat rejection",
        "Mobile service across Penrith, St Marys, and surrounds",
      ]}
      featuredLinks={[
        { title: "UV Blocking Film", path: "/uv-blocking-film", description: "Essential protection from intense sun" },
        { title: "Automotive Tinting", path: "/automotive-window-tinting", description: "Premium car window solutions" },
        { title: "Ceramic Tint", path: "/ceramic-window-tint", description: "Maximum heat rejection technology" },
      ]}
    />
  );
}
