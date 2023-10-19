import { IsDecimal, IsInt, IsString, IsUUID } from "class-validator";

export class SolarPanel {
  @IsUUID()
  id: string

  @IsString()
  brand: string

  @IsString()
  model: string

  @IsString()
  type: string

  @IsInt()
  nominal_power_watt: number

  @IsDecimal()
  nominal_tok_amper: number

  @IsDecimal()
  nominal_voltage: number

  @IsInt()
  efficiency: number

  @IsString()
  ip_class: string

  @IsInt()
  number_of_photocells_in_module: number

  @IsInt()
  number_of_panels_in_set: number

  @IsDecimal()
  height: number

  @IsDecimal()
  width: number

  @IsDecimal()
  depth_mm: number

  @IsDecimal()
  weight_kg: number

  @IsString()
  country_of_registration_of_brand: string

  @IsString()
  additional: string

  @IsString()
  photo: string

  @IsDecimal()
  price: number
}
