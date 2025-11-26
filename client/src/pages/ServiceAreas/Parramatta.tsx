import { ServiceAreaPage } from "@/components/ServiceAreaPage";

export default function Parramatta() {
  return (
    <ServiceAreaPage
      suburb="Parramatta"
      postcode="2150"
      description="Parramatta's trusted window tinting specialists serving Sydney's second CBD. From high-rise offices to heritage homes and modern apartments, we deliver premium solutions for every property."
      localInfo="As Western Sydney's commercial heart, Parramatta features a dynamic mix of corporate towers, government buildings, retail centres, and diverse residential neighbourhoods. The suburb's rapid growth and hot summers create strong demand for energy-efficient window solutions. Our commercial-grade films help businesses in Parramatta Square and Church Street reduce cooling costs while our residential services protect homes in nearby streets from heat and UV damage."
      services={[
        "Commercial window tinting for Parramatta CBD offices and retail",
        "High-rise apartment window film installation",
        "Ceramic window tint for maximum solar energy rejection",
        "Privacy films for ground-floor offices and shopfronts",
        "UV protection for heritage homes and modern builds",
        "After-hours installation available for commercial clients",
      ]}
      featuredLinks={[
        { title: "Commercial Tinting", path: "/commercial-window-tinting", description: "Solutions for offices and retail spaces" },
        { title: "Ceramic Window Tint", path: "/ceramic-window-tint", description: "Premium solar energy rejection" },
        { title: "Privacy Film", path: "/privacy-window-film", description: "Professional privacy solutions" },
      ]}
    />
  );
}
