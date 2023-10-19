import { PartialType } from '@nestjs/mapped-types';
import { CreateSolarPanelDto } from './create-solar-panel.dto';

export class UpdateSolarPanelDto extends PartialType(CreateSolarPanelDto) {}
