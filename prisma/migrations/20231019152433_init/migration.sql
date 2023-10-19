-- CreateTable
CREATE TABLE "SolarPanel" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "nominal_power_watt" INTEGER NOT NULL,
    "nominal_tok_amper" DECIMAL(65,30) NOT NULL,
    "nominal_voltage" DECIMAL(65,30) NOT NULL,
    "efficiency" INTEGER NOT NULL,
    "ip_class" TEXT NOT NULL,
    "number_of_photocells_in_module" INTEGER NOT NULL,
    "number_of_panels_in_set" INTEGER NOT NULL,
    "height" DECIMAL(65,30) NOT NULL,
    "width" DECIMAL(65,30) NOT NULL,
    "depth_mm" DECIMAL(65,30) NOT NULL,
    "weight_kg" DECIMAL(65,30) NOT NULL,
    "country_of_registration_of_brand" TEXT NOT NULL,
    "additional" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "SolarPanel_pkey" PRIMARY KEY ("id")
);
