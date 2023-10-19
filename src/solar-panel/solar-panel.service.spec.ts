import { Test, TestingModule } from '@nestjs/testing';
import { SolarPanelService } from './solar-panel.service';

describe('SolarPanelService', () => {
  let service: SolarPanelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolarPanelService],
    }).compile();

    service = module.get<SolarPanelService>(SolarPanelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
