import { ServiceAreaPage } from "@/components/ServiceAreaPage";

export default function Telopea() {
  return (
    <ServiceAreaPage
      suburb="Telopea"
      postcode="2117"
      description="Trusted window tinting services for Telopea's residential community. We help families enhance home comfort, reduce energy bills, and protect their interiors from sun damage."
      localInfo="Telopea is a quiet residential suburb with a family-friendly atmosphere, featuring established homes on generous blocks and excellent access to surrounding amenities. Many properties have large windows that can make rooms uncomfortably hot in summer. Our residential window films help Telopea families reduce cooling costs while protecting furniture, floors, and artwork from UV damage. The suburb's proximity to Carlingford and Dundas ensures convenient access to our services."
      services={[
        "Residential window tinting for family homes",
        "UV blocking films to protect furniture and floors",
        "Privacy films for bedrooms and bathrooms",
        "Ceramic tint for maximum solar energy rejection",
        "Decorative frosted films for stylish privacy",
        "On-site installation at your Telopea home",
      ]}
      featuredLinks={[
        { title: "Residential Tinting", path: "/residential-window-tinting", description: "Complete home solutions" },
        { title: "Frosted Film", path: "/frosted-decorative-window-film", description: "Stylish privacy options" },
        { title: "UV Blocking Film", path: "/uv-blocking-film", description: "Protect your interiors" },
      ]}
    />
  );
}
