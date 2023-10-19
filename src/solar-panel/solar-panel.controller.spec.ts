import { Test, TestingModule } from '@nestjs/testing';
import { SolarPanelController } from './solar-panel.controller';
import { SolarPanelService } from './solar-panel.service';

describe('SolarPanelController', () => {
  let controller: SolarPanelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolarPanelController],
      providers: [SolarPanelService],
    }).compile();

    controller = module.get<SolarPanelController>(SolarPanelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
