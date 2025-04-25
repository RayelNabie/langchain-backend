import { writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { openApiDocument } from '@/api/openapi/document';

const outputPath = 'src/api/openapi.generated.json';

writeFileSync(outputPath, JSON.stringify(openApiDocument, null, 2));
console.log(`saved openAPI JSON: ${outputPath}`);

execSync(`pnpm exec openapi-typescript ${outputPath} -o src/types/openapi.d.ts`, {
  stdio: 'inherit',
});
