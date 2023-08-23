# 실행

[공식사이트 참고](https://reactnative.dev/docs/environment-setup)

## 설치

```
npx react-native@latest init AwesomeProject
```

- ios : xcode로 에뮬레이터 실행
- aos : 단말기로 실행후 터미널에 adb reverse tcp:8081 tcp:8081 후에 리로드

# 셋팅

## 1. src 폴더 생성, assets도 가급적이면 src 안에 포함

## 2. metro.config.js

```
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {

    const {
        resolver: { sourceExts, assetExts }
    } = await getDefaultConfig();
    return {
        transformer: {
            babelTransformerPath: require.resolve("react-native-svg-transformer")
        },
        resolver: {
            assetExts: assetExts.filter(ext => ext !== "svg"),
            sourceExts: [...sourceExts, "svg"]
        }
    };
})();

```

## 3. tsconfig , alias 셋팅

```
{
  "extends": "@tsconfig/react-native/tsconfig.json",
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */
    /* Completeness */
    "esModuleInterop": true,
    "noImplicitAny": false,
    "skipLibCheck": true, /* Skip type checking all .d.ts files. */
    "baseUrl": ".",
    "types": [
      "react-native",
      "jest",
      "styled-components-react-native"
    ],
    "paths": {
      "@screen/*": [
        "src/screens/*"
      ],
      "@/*": [
        "src/*"
      ],
    },
    "typeRoots": [
      "node_modules/@types",
      "./src/types"
    ]
  },
  "include": [
    "src/**/*",
    "."
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}
```

## 4. babel.config.js

```
npm i babel-plugin-module-resolver babel-plugin-styled-components
```

```
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    "babel-plugin-styled-components",
    [
      'module-resolver',
      {
        alias: {
          '@screen': './src/screen',
          '@': './src'
        },
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['.']
      },
    ],
  ],
};

```

## navigation

npm i @react-navigation/bottom-tabs @react-navigation/native @react-navigation/native-stack @types/react-native react-native-screens react-native-safe-area-context

## react-native-config

[github](https://github.com/luggit/react-native-config)
npm i react-native-config

## ios 셋팅

- appdelegate.mm

```

```

- info.plist

```

```

- Podfile

```

```

## android setting

build.gradle, app/build.gradle  
