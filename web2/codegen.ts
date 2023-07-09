import { CodegenConfig } from '@graphql-codegen/cli';
import { configDotenv } from "dotenv";

configDotenv();

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_API_URL,
  documents: ['**/*.{gql,graphql}'],
  generates: {
    'src/packages/graphql/generated/index.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
  },
};

export default config;
