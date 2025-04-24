import { writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { openApiDocument } from '@/api/openapi/document';

const outputPath = 'src/docs/openapi.generated.json';
writeFileSync(outputPath, JSON.stringify(openApiDocument, null, 2));
console.log(`✅ OpenAPI JSON opgeslagen naar ${outputPath}`);

execSync(`pnpm exec openapi-typescript ${outputPath} -o src/types/openapi.d.ts`, {
  stdio: 'inherit',
});
