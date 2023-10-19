import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { SolarPanelService } from './solar-panel.service';
import { CreateSolarPanelDto } from './dto/create-solar-panel.dto';
import { UpdateSolarPanelDto } from './dto/update-solar-panel.dto';

@Controller('solar-panel')
export class SolarPanelController {
  constructor(private readonly solarPanelService: SolarPanelService) {}

  @Post()
  create(@Body() createSolarPanelDto: CreateSolarPanelDto) {
    return this.solarPanelService.create(createSolarPanelDto);
  }

  @Get()
  findAll() {
    return this.solarPanelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.solarPanelService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateSolarPanelDto: UpdateSolarPanelDto) {
    return this.solarPanelService.update(id, updateSolarPanelDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.solarPanelService.remove(id);
  }
}
