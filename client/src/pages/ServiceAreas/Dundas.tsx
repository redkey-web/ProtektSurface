import { ServiceAreaPage } from "@/components/ServiceAreaPage";

export default function Dundas() {
  return (
    <ServiceAreaPage
      suburb="Dundas"
      postcode="2117"
      description="Quality window tinting services for Dundas residents and businesses. From cosy family homes to local shops and automotive applications, we deliver expert solutions with lasting results."
      localInfo="Dundas is a quiet, family-oriented suburb with a village atmosphere and convenient access to Parramatta. The area features a mix of well-maintained family homes, units, and a small local shopping strip. Residents value privacy and comfort, making our residential window films particularly popular. The suburb's proximity to Parramatta Road also brings automotive tinting clients looking for quality car window solutions."
      services={[
        "Residential window tinting for homes and units",
        "Privacy films for street-facing windows",
        "Heat reduction for west-facing rooms",
        "Automotive window tinting by Protekt Auto",
        "UV protection for furniture and flooring",
        "On-site flat glass installation for your Dundas home",
      ]}
      featuredLinks={[
        { title: "Privacy Film", path: "/privacy-window-film", description: "Elegant solutions for home privacy" },
        { title: "Automotive Tinting", path: "/automotive-window-tinting", description: "Professional car tinting" },
        { title: "Residential Tinting", path: "/residential-window-tinting", description: "Home window solutions" },
      ]}
    />
  );
}
