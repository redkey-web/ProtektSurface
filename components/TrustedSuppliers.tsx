'use client';

export function TrustedSuppliers() {
  const suppliers = [
    { name: "XPEL Certified Installer", logo: "/images/suppliers/xpel-certified.png" },
    { name: "Vision Window Film", logo: "/images/suppliers/vision-logo.webp" },
    { name: "Duraflex", logo: "/images/suppliers/duraflex.png" },
    { name: "XPEL Ultimate", logo: "/images/suppliers/xpel-ultimate.png" },
  ];

  return (
    <section className="relative bg-stone-500 py-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(/images/marble-tile.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <h3 className="text-center text-lg font-semibold text-white mb-8">
          We Only Use Trusted Suppliers
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          {suppliers.map((supplier) => {
            const isLarge = supplier.name === "XPEL Ultimate" || supplier.name === "Vision Window Film";
            const isUltimate = supplier.name === "XPEL Ultimate";
            return (
              <div
                key={supplier.name}
                className={`flex items-center justify-center ${isLarge ? "-my-4 sm:-my-6" : ""} ${isUltimate ? "ml-4 sm:ml-6" : ""}`}
                data-testid={`supplier-logo-${supplier.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={supplier.logo}
                  alt={supplier.name}
                  className={isLarge ? "h-20 sm:h-28 w-auto object-contain" : "h-12 sm:h-16 w-auto object-contain"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
