import { ServiceAreaPage } from "@/components/ServiceAreaPage";

export default function Rydalmere() {
  return (
    <ServiceAreaPage
      suburb="Rydalmere"
      postcode="2116"
      description="Professional window tinting in Rydalmere, serving the university precinct, industrial areas, and residential community with tailored solutions for every property type."
      localInfo="Rydalmere features a unique mix of Western Sydney University's Parramatta campus, industrial facilities, and established residential areas along the Parramatta River. The university buildings and nearby businesses benefit from commercial-grade films that reduce heat and glare for students and workers. Residential areas feature older homes with large windows that respond well to heat-rejecting films, while the industrial precinct uses our commercial solutions."
      services={[
        "Commercial films for university and educational facilities",
        "Industrial window solutions for warehouses",
        "Residential tinting for riverfront homes",
        "Glare reduction for offices and study spaces",
        "UV protection for classroom environments",
        "Mobile service throughout Rydalmere and Dundas Valley",
      ]}
      featuredLinks={[
        { title: "Commercial Tinting", path: "/commercial-window-tinting", description: "Educational and office solutions" },
        { title: "UV Blocking Film", path: "/uv-blocking-film", description: "Classroom UV protection" },
        { title: "Mobile Service", path: "/mobile-window-tinting", description: "Convenient on-site installation" },
      ]}
    />
  );
}
