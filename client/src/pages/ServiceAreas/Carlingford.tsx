import { ServiceAreaPage } from "@/components/ServiceAreaPage";

export default function Carlingford() {
  return (
    <ServiceAreaPage
      suburb="Carlingford"
      postcode="2118"
      description="Premium window tinting services for Carlingford's established family homes and modern developments. We specialise in residential solutions that enhance comfort, privacy, and energy efficiency."
      localInfo="Carlingford is a sought-after family suburb known for its excellent schools, leafy streets, and quality homes. Many properties feature large windows that benefit from heat-rejecting and UV-blocking films. The suburb's mix of established brick homes and newer builds creates demand for various window tinting solutions. Families particularly value our UV protection films to safeguard children and protect valuable furniture from sun damage."
      services={[
        "Residential window tinting for family homes",
        "UV blocking films to protect children and interiors",
        "Privacy films for bathrooms and bedrooms",
        "Ceramic tint for living areas with large windows",
        "Decorative frosted films for elegant privacy",
        "Mobile service for convenient home installation",
      ]}
      featuredLinks={[
        { title: "Residential Tinting", path: "/residential-window-tinting", description: "Complete home protection solutions" },
        { title: "UV Blocking Film", path: "/uv-blocking-film", description: "Protect your family and furnishings" },
        { title: "Frosted Film", path: "/frosted-decorative-window-film", description: "Elegant decorative privacy" },
      ]}
    />
  );
}
