import assert from 'node:assert/strict';
import { normalizeInvokeModelAtIngress } from '@x12i/ai-gateway';
const routing = normalizeInvokeModelAtIngress('openrouter', 'openai/gpt-4.1-mini', { preferOpenRouter: true });
assert.equal(routing.provider, 'openrouter');
assert.equal(routing.model, 'openai/gpt-4.1-mini');
const repeated = normalizeInvokeModelAtIngress(routing.provider, routing.model, { preferOpenRouter: true });
assert.equal(repeated.changed, false);
console.log(routing);
// Wire normalization does not call the model or prove current model availability.
