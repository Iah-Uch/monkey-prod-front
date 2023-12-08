import React, { useState } from "react";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { useAuth } from "../contexts/auth";

const Routes = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <HStack flex={1} justifyContent="center" alignItems="center">
        <Spinner size="lg" color="blue.500" />
      </HStack>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
