import assert from 'node:assert/strict';
import { aiGatewayDocs as docs, files } from '@x12i/ai-gateway-docs';

const books = docs.listBooks();
const useCases = docs.listUseCases();
assert(Array.isArray(books));
assert(Array.isArray(useCases));
assert(books.length + useCases.length > 0, 'The knowledge package should contain documentation');
console.log('Books:', books.map(book => ({ id: book.id, title: book.title })));
console.log('Use cases:', useCases.slice(0, 5).map(item => ({ id: item.id, title: item.title })));
if (useCases.length > 0) {
  // v1.0.0 indexes use-cases/ paths differently from the SDK manifest lookup.
  // The package also publicly exports the files map, which preserves the guide.
  const markdown = docs.getUseCaseMarkdown(useCases[0].id) ?? files[`use-cases/${useCases[0].id}.md`];
  assert.equal(typeof markdown, 'string');
  assert(markdown.length > 0);
  console.log('\nFirst use-case guide:\n' + markdown.slice(0, 1200));
}
