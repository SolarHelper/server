import { Injectable } from '@nestjs/common';
import { CreateSolarPanelDto } from './dto/create-solar-panel.dto';
import { UpdateSolarPanelDto } from './dto/update-solar-panel.dto';

@Injectable()
export class SolarPanelService {
  create(createSolarPanelDto: CreateSolarPanelDto) {
    return 'This action adds a new solarPanel';
  }

  findAll() {
    return `This action returns all solarPanel`;
  }

  findOne(id: string) {
    return `This action returns a #${id} solarPanel`;
  }

  update(id: string, updateSolarPanelDto: UpdateSolarPanelDto) {
    return `This action updates a #${id} solarPanel`;
  }

  remove(id: string) {
    return `This action removes a #${id} solarPanel`;
  }
}
