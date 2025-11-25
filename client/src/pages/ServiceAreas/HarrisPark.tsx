import { ServiceAreaPage } from "@/components/ServiceAreaPage";

export default function HarrisPark() {
  return (
    <ServiceAreaPage
      suburb="Harris Park"
      postcode="2150"
      description="Expert window tinting in Harris Park, serving the vibrant community near Parramatta CBD. We provide solutions for apartments, commercial properties, and residential homes throughout this diverse suburb."
      localInfo="Harris Park is a bustling multicultural suburb adjacent to Parramatta CBD, known for its vibrant restaurant scene and mix of apartment complexes and older homes. The area's dense urban environment creates demand for privacy films, while its proximity to busy roads makes noise and heat reduction valuable. Local businesses along Wigram Street and Marion Street benefit from our commercial window tinting for shopfront privacy and energy efficiency."
      services={[
        "Apartment window tinting for privacy and heat reduction",
        "Commercial films for restaurants and retail shops",
        "Privacy solutions for ground-floor residences",
        "Heat-rejecting films for west-facing apartments",
        "Decorative frosted films for shopfronts",
        "After-hours installation for businesses",
      ]}
      featuredLinks={[
        { title: "Privacy Film", path: "/privacy-window-film", description: "Solutions for apartments and shops" },
        { title: "Commercial Tinting", path: "/commercial-window-tinting", description: "Restaurant and retail solutions" },
        { title: "Frosted Film", path: "/frosted-decorative-window-film", description: "Decorative shopfront privacy" },
      ]}
    />
  );
}
