import { ServiceAreaPage } from "@/components/ServiceAreaPage";

export default function Liverpool() {
  return (
    <ServiceAreaPage
      suburb="Liverpool"
      postcode="2170"
      description="Expert window tinting services in Liverpool, South Western Sydney's major hub. We serve homes, businesses, healthcare facilities, and provide premium automotive tinting for car enthusiasts."
      localInfo="Liverpool is a thriving regional centre with Liverpool Hospital, Westfield Liverpool, and a growing residential population. The area experiences some of Sydney's hottest summer temperatures, making quality window tinting essential for comfort and energy efficiency. From the busy commercial precinct to family homes in surrounding streets, we provide tailored solutions. Liverpool's strong car culture also drives demand for our Protekt Auto automotive tinting services."
      services={[
        "Residential tinting for Liverpool homes and apartments",
        "Commercial solutions for Westfield Liverpool retailers",
        "Healthcare facility window films for privacy and UV protection",
        "Automotive window tinting with ceramic and carbon options",
        "Mobile window tinting across Liverpool and surrounds",
        "Marble protection films for luxury home surfaces",
      ]}
      featuredLinks={[
        { title: "Mobile Tinting", path: "/mobile-window-tinting", description: "We come to your Liverpool location" },
        { title: "Marble Protection", path: "/marble-protection-film", description: "Protect luxury stone surfaces" },
        { title: "Residential Tinting", path: "/residential-window-tinting", description: "Home comfort and efficiency" },
      ]}
    />
  );
}
