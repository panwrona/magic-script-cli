# MagicScript Command Line Toolkit

[![codecov](https://codecov.io/gh/magic-script/magic-script-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/magic-script/magic-script-cli)
[![CI](https://github.com/magic-script/magic-script-cli/workflows/CI/badge.svg)](https://github.com/magic-script/magic-script-cli/actions)
[![npm version](https://badge.fury.io/js/magic-script-cli.svg)](https://badge.fury.io/js/magic-script-cli)
[![npm downloads](https://img.shields.io/npm/dt/magic-script-cli.svg)](https://www.npmjs.com/package/magic-script-cli)
[![License](https://img.shields.io/:license-Apache%202.0-blue.svg)](LICENSE)

This repository is the command line toolkit for generating, compiling, and running MagicScript applications.

## Installation

Installation is easy assuming you have [Node.js](https://nodejs.org/) already installed.

```bash
npm install -g magic-script-cli
```

You can now access the toolkit as `magic-script` in your system path.

## Usage

See https://magicscript.org/ for more documentation.

## Developing for Multiplatform (MagicLeap, Android, iOS)

If you plan to develop for Android and/or iOS, follow instructions below:

### Tooling for iOS and Android

The detailed information on necessary tooling and setup for ReactNative you can find here: https://facebook.github.io/react-native/docs/getting-started
Verify your versions of tools with the minimum below:

**Common**:

| Tool   |      Version  |
|----------|:-------------:|
| NodeJS     |  >=12.10      |
| NPM | should be installed with NodeJS |

**Android**:

To develop on Android platform, your device must support ARCore. To ensure your device supports ARCore visit: https://developers.google.com/ar/discover/supported-devices

| Tool   |      Version  |
|----------|:-------------:|
| Android SDK     |  >=28.0.3     |
| Gradle |    >=3.4.1  |
| Android Device OS | >=24 |
| JDK | >=8 |

**iOS**:
To develop on iOS platform, your device must support ARKit. To ensure your device supports ARKit visit and scroll to the bottom: https://www.apple.com/ios/augmented-reality/
Please be aware, that it is recommended to use the latest stable versions of below tools:

| Tool   |      Version  |
|----------|:-------------:|
| iOS device OS     |  >=12    |
| xCode | >=10  |
| CocoaPods | >=24 |

### First steps

**Creating a project**

1. Open terminal window, navigate to directory where you want to create the project and type `magic-script init`. You will be asked few questions regarding the configuration of the project you want to choose:
1. **What is the name of your application?** The name displayed on Magic Leap Launcher (60 character limit).
1. **What is the app ID of your application?** The unique, lower-case, alpha-numeric ID for your app. No spaces or special characters. Suggested format: **com.&lt;yourcompany>.&lt;appname>**
1. **In which folder do you want to save this project?** Specifies the name for the new folder created in your current directory. This folder contains the project's files
1. **Do you want to create Components app?** Options for the prompt are Y (Yes) or N (No). You can choose between Components project type (built on top of vanilla MagicScript, React & React Native) and vanilla MagicScript project type.
1. **What app type do you want?** You can choose between Landscape and Immersive. It is related only to the Lumin platform. For more information check below or at [Magic Script Explained](https://www.magicscript.org/docs/magic-script-explained)
1. **What platform do you want develop on?** This prompt is only for the Components app type. Multiple options can be selected. Options are Lumin, iOS, and Android. Using arrows and space bar, choose which platform you want to develop for.
1. **Use TypeScript?** [TypeScript](https://www.typescriptlang.org/index.html) is a strict syntactical superset of JavaScript that adds optional static typing to the language. Options for the prompt are Y (Yes) or N (No)

**Possible configurations:**
Components:
- Yes:
  - Landscape:
    - Lumin || Android || iOS
  - Immersive:
    - Lumin || Android || iOS
- No:
  - Landscape:
    - vanilla MagicScript
  - Immersive:
    - vanilla MagicScript

**Lumin** - The OS which is running on MagicLeap device, more info at [Magic Script Explained](https://www.magicscript.org/docs/magic-script-explained)
**Landscape** - Only available on Lumin, uses vanilla MagicScript to develop apps, more info at [Magic Script Explained](https://www.magicscript.org/docs/magic-script-explained)
**Immersive** - Only available on Lumin, uses vanilla MagicScript to develop apps, more info at [Magic Script Explained](https://www.magicscript.org/docs/magic-script-explained)
**Components** - Built on top of MagicScript, React & ReactNative; UI framework that simplifies developing 3D apps. When choosing `Components` app type during initialization, you can choose which platform the project is going to be built on. You can choose any combination of those three platforms: Lumin, Android & iOS.

**Building & running the project**

1. Navigate to the root directory of your project
2. Type `magic-script build android` or `magic-script build ios`. If you have device connected, the project will be built & installed on your device. That's it!
3. Type `magic-script build lumin` to build project for MagicLeap device. Type `magic-script build lumin -i` if you want to build & install the app on MagicLeap. That's it!

### Troubleshooting (for iOS and Android)

**Creating the project**
- If you have information that Android SDK environment variable doesn't exist, it means that local.properties file wasn't created under `<project>/reactnative/android`. 
a. If you have Android Studio installed, open `<project>/reactnative/android` as an Android project. The local.properties file should be created automatically
b. If not, create `local.properties` file in `<project>/reactnative/android` with one line: `sdk.dir=<Location of your Android SDK>`
- If you have information that CLI couldn't create symlink for assets directory and you want to use assets on Android or iOS (like images, video, sounds, 3D model), you have to create a directory symlink in `<project>/reactnative/` pointing to `<project>/assets`. 
a. If you're Windows user, you can find more information here: https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/mklink
b. If you're MacOS or Linux user, you can use `ln` tool for that
- If you have information that the project couldn't be renamed to the specified by the user, the project will be called `Template` and package id will be set to `com.magicscript.template`. If you want to change the name of the project and package id:
a. For Android use Android Studio to change the project name and package id
b. For iOS use XCode to change the project name and package id

**Building and installing the project**
- If you have problem with building & running the project, please check with informations below:
a. Check if you're executing your command in the root directory of the project.
b. There are differences between MagicScript project types (more information in the section Architecture).

**Problems during runtime**
- When you're developing on multiple platforms at once, and you're often changing the deployment target (f.e. you're installing the app on MagicLeap device, next on iOS device, and after that on Android device) there can be a problem with caching intermediates from different targets. Run below commands to clean up the cache:

#### **IMPORTANT: Be extra cautious in which directory you are currently - below scripts are using `rm` and `del` tools, which can lead to irreparable situations!! If you are not familiar with those tools, we recommend execute commands between `&` and `&&` one after another!**

#### **Execute the scripts from root directory of your project!!**
* Navigate to `reactnative` directory from root directory of your project
  * General React Native cleanup:
    * Windows users: `del %appdata%\Temp\react-native-* & del node_modules/ & npm cache clean --force & npm install & npm start -- --reset-cache`
    * MacOS users: `watchman watch-del-all && rm -rf $TMPDIR/react-native-packager-cache-* && rm -rf $TMPDIR/metro-bundler-cache-* && rm -rf node_modules/ && npm cache clean && npm install && npm start -- --reset-cache`
  * For Android builds:
    * Windows users: `cd android && gradlew clean && cd ..`
    * MacOS users: `cd android & gradlew clean & cd ..`
  * For iOS builds:
    * Delete the DerivedData of the app
    * On Windows: `cd ios & del Pods & del Podfile.lock & del *.xcworkspace & cd ..`
    * On MacOS: `cd ios && rm -rf Pods && rm -rf Podfile.lock && rm -rf *.xcworkspace && cd ..`

### Architecture of multiplatform MagicScript Components

The architecture of the multiplatform MagicScript Components project template is based on the architecture of the MagicScript Components ecosystem itself. Look below on the diagram:

![Components Architecture](./img/componentsarchitecture.png)

As you can see, there is a hard separation between Magic Script Components library, which is just an interface/definition of the Components, and platform specific libraries, which are engines that are in charge of compiling, building and rendering the app on desired platform. This short explanation leads us to the main idea behind the 'monorepo' type project structure. If you choose to develop on all three platforms (MagicLeap, iOS and Android), your newly created project will have structure like this:

- lumin
- reactnative
- assets
- src
- package.json

**reactnative/common** - This directory has the config files for reactnative library. They're needed to write one source code that will run on all three platforms  
**lumin** - This directory has all of the configuration files needed to compile, build and deploy the app to the MagicLeap device  
**reactnative** - This directory has all of the configuration files needed to compile, build and deploy the app to the iOS and Android device  
**assets** - This directory should be used if you want to add assets to your project, like 3D model, image, video or audio.  
**src** - This is where you should put your source code of the application  
**package.json** - It contains only `magic-script-components` library, which is (like described above), a definition of the Components. If you want to add some other dependencies to your app, you should place it in this package.json  

#### How does it work under the hood?

Building iOS & Android project:

1. The Metro Bundler is configured to grab the code from the `src` directory, resolve dependencies and bundle all of the source code files into single file that will be understood by the machine.
2. The `reactnative` directory has its own package.json with the dependencies needed by the engine to render the app on the device. That's where the `magic-script-components-react-native` library is
3. After successful compilation the app is deployed to the device

Building MagicLeap project:

1. The MagicLeap device uses the Lumin Runtime platform for rendering. In the `lumin` directory you can see that the Rollup Bundler is used to bundle the source code. It is configured the same way as the Metro Bundler. It grabs the code from `src` directory, resolves dependencies and bundles the files.
2. The `lumin` directory (like mentioned above) has all of the configuration files and dependencies that are used to properly render the code on the device. This is where the `magic-script-components-lumin` library is set.
3. After successful compilation, the MagicScript CLI is executing few another steps to install and run the app on the MagicLeap device.

### Adding assets to multiplatform project

If you want to add assets like [Lomino Font](https://github.com/magic-script/lomino-font) or [Lumin System Icons](https://github.com/magic-script/system-icons) you need to follow the steps below:

Check if the `assets` directory already exists in the root of the project. If so, please check if you have symlink created for `reactnative/assets` directory. If everything is set properly, put your assets in `assets` directory in the root of the project. Otherwise, follow the steps below:

1. Create `assets` directory in root directory of the project
2. Add dependencies to the package.json in the root directory:  
a) For Lomino Font add `"lomino-font": "git+https://github.com/magic-script/lomino-font"`  
b) For Lumin System Icons add `"lumin-system-icons": "git+https://github.com/magic-script/system-icons"`  
3. Type `npm install` in the root directory of the project to install dependencies. Each library has functionality that copies files to the `assets` directory
4. Create symlink for `assets` in `reactnative` directory:  
a) On MacOS/Linux type in the root directory `ln -s ../assets reactnative/assets`  
b) On Windows, by using `cmd`, type in the root directory `mklink /D "../assets" "reactnative/assets"`  
5. For React Native builds, add line `path.resolve(__dirname, '../assets')` in `watchFolders` configuration in `metro.config.js` file:
<pre>
watchFolders: [
    path.resolve(__dirname, '../common'),
    path.resolve(__dirname, '../src'),
    path.resolve(__dirname, 'node_modules'),
    path.resolve(__dirname, '../node_modules'),
    <b>path.resolve(__dirname, '../assets')</b>
  ],
  </pre>
  6. For Lumin builds, add line `"../assets/" : "assets/"` in `app.package` file:
  <pre>
  DATAS = "digest.sha512.signed" : "." \
        "bin/" : "bin/"\
        <b>"../assets/" : "assets/"</b>
  OPTIONS = package/minApiLevel/2
  </pre>

### Working on local dependencies

When you are working on local dependencies in multiplatform project, you can use symlinks in your `node_modules` to get instance updates in your dependency:
1. Put `<dependency-path>` to your dependency in `package.json` in `lumin`, `reactnative` or root directory
2. If you haven't done it yet, create symlink for `<dependency>` in `node_modules` directory (example shows symlink for lumin platform, you can do exactly the same for react native). Dependency path should be the same as the one from `package.json`:
a) On MacOS/Linux type in the root directory `ln -s <dependency_path> lumin/node_modules/<dependency-name>`  
b) On Windows, by using `cmd`, type in the root directory `mklink /D "<dependency_path>" "lumin/node_modules/<dependency-name>"`
3. If you created symlink for `lumin`, add this line to `rollup.config.js` file in `lumin` directory:
<pre>
  export default [
  // Build for MagicScript on LuminOS
  {
    ...common,
    external: ['uv', 'lumin', 'ssl', 'jpeg', 'png', 'gl'],
    input: 'src/main.js',
    preserveModules: true,
    <b>preserveSymlinks: true,</b>
    output: {
      dir: 'bin',
      ...
  </pre>
## License

This project is licensed under the Apache License, Version 2.0 - see the [LICENSE](LICENSE) file for details
