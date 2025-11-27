import { ServiceAreaPage } from "@/components/ServiceAreaPage";

export default function Ermington() {
  return (
    <ServiceAreaPage
      suburb="Ermington"
      postcode="2115"
      description="Professional window tinting for Ermington's leafy residential streets and local businesses. We enhance home comfort, reduce energy costs, and protect your interiors from the harsh Australian sun."
      localInfo="Ermington is a peaceful residential suburb along the Parramatta River, featuring established family homes, tree-lined streets, and a strong community atmosphere. The area's older homes often have large windows that can benefit significantly from modern heat-rejecting films. Families in Ermington particularly appreciate our UV blocking solutions to protect children and preserve hardwood floors and furniture from sun damage."
      services={[
        "Residential window tinting for family homes",
        "UV blocking films to protect timber floors and furniture",
        "Privacy solutions for street-facing windows",
        "Heat reduction for older homes with large windows",
        "Ceramic films for energy-efficient living",
        "On-site service across Ermington and Rydalmere",
      ]}
      featuredLinks={[
        { title: "UV Blocking Film", path: "/uv-blocking-film", description: "Protect floors and furnishings" },
        { title: "Residential Tinting", path: "/residential-window-tinting", description: "Complete home solutions" },
        { title: "Ceramic Tint", path: "/ceramic-window-tint", description: "Premium solar energy rejection" },
      ]}
    />
  );
}
