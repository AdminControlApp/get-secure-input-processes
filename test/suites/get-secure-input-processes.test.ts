import { test, expect } from 'vitest';
import { getSecureInputProcesses } from '~/index.js';

test('get secure input processes', () => {
	expect(() => getSecureInputProcesses()).not.toThrow();
});
