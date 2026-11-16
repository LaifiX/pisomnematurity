import type { TestModuleData } from '../types';
import { testModuleMs2022 } from './ms-2022';
import { testModuleMs2023 } from './ms-2023';
import { testModuleMs2024 } from './ms-2024';
import { testModuleMs2025 } from './ms-2025';
import { testModuleMs2026 } from './ms-2026';

export const testsDataBySlug: Record<string, TestModuleData> = {
  'ms-2026': testModuleMs2026,
  'ms-2025': testModuleMs2025,
  'ms-2024': testModuleMs2024,
  'ms-2023': testModuleMs2023,
  'ms-2022': testModuleMs2022
};
