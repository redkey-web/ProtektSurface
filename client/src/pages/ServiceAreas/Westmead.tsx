import { ServiceAreaPage } from "@/components/ServiceAreaPage";

export default function Westmead() {
  return (
    <ServiceAreaPage
      suburb="Westmead"
      postcode="2145"
      description="Specialised window tinting services for Westmead's healthcare precinct and residential community. We serve hospitals, medical facilities, apartments, and family homes with professional solutions."
      localInfo="Westmead is home to one of Australia's largest healthcare precincts, including Westmead Hospital, The Children's Hospital, and numerous medical research facilities. The area also features growing residential developments and established family homes. Healthcare facilities require specialised UV-blocking films to protect patients, staff, and sensitive equipment, while nearby apartments and homes benefit from privacy and heat reduction solutions. Our team understands the unique requirements of medical environments."
      services={[
        "Healthcare facility window films for UV protection",
        "Medical office privacy solutions",
        "Apartment tinting for new developments",
        "Residential films for family homes",
        "Marble protection for luxury medical fit-outs",
        "After-hours installation for healthcare facilities",
      ]}
      featuredLinks={[
        { title: "UV Blocking Film", path: "/uv-blocking-film", description: "Healthcare UV protection" },
        { title: "Marble Protection", path: "/marble-protection-film", description: "Luxury surface protection" },
        { title: "Privacy Film", path: "/privacy-window-film", description: "Medical room privacy" },
      ]}
    />
  );
}
