import "../global.css";
import React from "react";

import { Redirect } from "expo-router";
import { View, Text } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import "react-native-get-random-values";
import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://ad51c2499247882f57b5ab882a41e08c:976b173fad0bf2f616ab598813bd00f5@o4508245874442240.ingest.de.sentry.io/4508246724378704",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const Page = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/home"} />;
  }
  return <Redirect href="/(auth)/welcome" />;
};
export default Sentry.wrap(Page);
