import "../global.css";
import React from "react";

import { Redirect } from "expo-router";
import { View, Text } from "react-native";
import { useAuth } from "@clerk/clerk-expo";

const Page = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/home"} />;
  }
  return <Redirect href="/(auth)/welcome" />;
};
export default Page;
