import { viteMockServe } from 'vite-plugin-mock';

export function configMockPlugin(command: 'serve' | 'build') {
  const mockPlugin = viteMockServe({
    mockPath: 'mock',
    localEnabled: command === 'serve'
  });
  return mockPlugin;
}
