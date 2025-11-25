import { ServiceAreaPage } from "@/components/ServiceAreaPage";

export default function NorthParramatta() {
  return (
    <ServiceAreaPage
      suburb="North Parramatta"
      postcode="2151"
      description="Quality window tinting in North Parramatta for heritage properties, modern homes, and healthcare facilities. We understand the unique needs of this historic suburb with its blend of old and new."
      localInfo="North Parramatta is a suburb of historical significance, home to heritage sites, Cumberland Hospital, and established residential areas. The area's mix of heritage buildings requiring sensitive treatment and modern developments creates diverse window tinting needs. Healthcare facilities in the area particularly benefit from UV-blocking films to protect patients and staff, while heritage homes require careful film selection to maintain their character."
      services={[
        "Heritage-sensitive window film installation",
        "Healthcare facility UV protection solutions",
        "Residential tinting for period and modern homes",
        "Privacy films for medical consulting rooms",
        "Heat reduction without changing heritage appearance",
        "Mobile service throughout North Parramatta",
      ]}
      featuredLinks={[
        { title: "UV Blocking Film", path: "/uv-blocking-film", description: "Healthcare UV protection" },
        { title: "Privacy Film", path: "/privacy-window-film", description: "Medical room privacy solutions" },
        { title: "Residential Tinting", path: "/residential-window-tinting", description: "Heritage and modern homes" },
      ]}
    />
  );
}
