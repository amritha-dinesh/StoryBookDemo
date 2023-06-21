import { AppRegistry } from "react-native";
import { getStorybookUI } from "@storybook/react-native";
import { name as appName } from "../app.json";
import "./storybook.requires";

const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent(appName, () => StorybookUIRoot);