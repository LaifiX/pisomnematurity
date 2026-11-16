import type { TestModuleData } from '../types';
import { testModuleMs2022 } from './ms-2022';
import { testModuleMs2023 } from './ms-2023';

export const testsDataBySlug: Record<string, TestModuleData> = {
  'ms-2023': testModuleMs2023,
  'ms-2022': testModuleMs2022
};
