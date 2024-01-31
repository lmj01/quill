import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import rawsvg from 'rollup-plugin-rawsvg';
import postcss from 'rollup-plugin-postcss';
const version = 2.1;
export default [
    {
        input: 'quill.ts',
        output: {            
            file: 'dist/quill.js',
            format: 'esm',
            assetFileNames: ((assetInfo) => {
                console.log(assetInfo)
            }),
            banner: `/* my-library version ${version} */`,
            footer: '/* follow me on Twitter */',
        },
        plugins: [            
            commonjs(),
            rawsvg(),
            typescript({
                outputToFilesystem: true,
                sourceMap: true,
                outDir: 'dist',
            }),
            nodeResolve({
                // preferBuiltins:false,
            }),
            replace({
                preventAssignment: true,
                'process.env.NODE_ENV': JSON.stringify('production'),
            })
        ],
    },
    {
        input: 'assets/core.styl',
        output: {            
            file: 'dist/quill.core.css',
            assetFileNames: ((assetInfo) => {
                console.log(assetInfo)
                return '';
            }),
        },
        plugins: [
            postcss({
                extract: true,
                autoModules: false,
                use: ['stylus'],
                sourceMap: false,
            }),
        ],
    },
    {
        input: 'assets/bubble.styl',
        output: {            
            file: 'dist/quill.bubble.css',
        },
        plugins: [
            postcss({
                extract: true,
                autoModules: false,
                use: ['stylus'],
                sourceMap: false,
            }),
        ],
    },
    {
        input: 'assets/snow.styl',
        output: {            
            file: 'dist/quill.snow.css',
        },
        plugins: [
            postcss({
                extract: true,
                autoModules: false,
                use: ['stylus'],
                sourceMap: false,
            }),
        ],
    },
];