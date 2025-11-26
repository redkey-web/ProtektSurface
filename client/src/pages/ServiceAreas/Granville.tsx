import { ServiceAreaPage } from "@/components/ServiceAreaPage";

export default function Granville() {
  return (
    <ServiceAreaPage
      suburb="Granville"
      postcode="2142"
      description="Expert window tinting services for Granville's diverse mix of heritage homes, modern apartments, and thriving commercial precincts. Our team understands the unique architectural character of this historic suburb."
      localInfo="Granville is a vibrant suburb with a rich multicultural heritage and a mix of residential and commercial properties. From the beautiful Victorian-era homes along South Street to the busy retail strips and modern apartment complexes, we provide tailored window tinting solutions for every property type. The hot western Sydney summers make heat-rejecting window films particularly valuable for Granville residents and business owners looking to reduce cooling costs."
      services={[
        "Residential window tinting for heritage and modern homes",
        "UV blocking films to protect furniture and flooring from sun damage",
        "Commercial shopfront tinting for retail businesses on Parramatta Road",
        "Privacy window films for apartments and townhouses",
        "On-site flat glass installation at your Granville location",
        "Ceramic window tint for maximum heat rejection",
      ]}
      featuredLinks={[
        { title: "UV Blocking Film", path: "/uv-blocking-film", description: "Protect your interiors from harsh UV rays" },
        { title: "Privacy Window Film", path: "/privacy-window-film", description: "Elegant privacy solutions for apartments" },
        { title: "Commercial Tinting", path: "/commercial-window-tinting", description: "Solutions for retail and office spaces" },
      ]}
    />
  );
}
