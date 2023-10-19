import { Module } from '@nestjs/common';
import { SolarPanelService } from './solar-panel.service';
import { SolarPanelController } from './solar-panel.controller';

@Module({
  controllers: [SolarPanelController],
  providers: [SolarPanelService],
})
export class SolarPanelModule {}
