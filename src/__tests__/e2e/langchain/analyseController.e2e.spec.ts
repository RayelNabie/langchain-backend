import { describe, it, expect } from 'vitest';
import { analyzeController } from '@/controllers/analyseController';

describe('analyzeController (E2E)', () => {
  it('should analyze a prompt and return a valid structured JSON', async () => {
    const prompt = 'Hoe kan ik AI gebruiken om mijn productiviteit te verbeteren?';

    const result = await analyzeController(prompt);

    expect(result).toHaveProperty('prompt');
    expect(result).toHaveProperty('score');
    expect(result).toHaveProperty('suggestion');
    expect(result).toHaveProperty('reasoning');

    expect(typeof result.prompt).toBe('string');
    expect(typeof result.suggestion).toBe('string');
    expect(typeof result.reasoning).toBe('string');

    expect(result.score).toEqual(
      expect.objectContaining({
        clarity: expect.any(Number),
        brevity: expect.any(Number),
        specificity: expect.any(Number),
      })
    );
  }, 20000);
});
