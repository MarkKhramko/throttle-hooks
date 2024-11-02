import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json' assert { type: 'json' }

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [typescript({
    tsconfig: './tsconfig.json',
    useTsconfigDeclarationDir: true, // Ensures .d.ts files are generated
  })],
  external: ['react', 'react-dom']
}
