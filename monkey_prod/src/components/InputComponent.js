import React from "react";
import { Input as NativeBaseInput, FormControl } from "native-base";

export function Input({ errorMessage = null, isInvalid, style, ...rest }) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid}>
      <FormControl.ErrorMessage mx={"5"}>
        {errorMessage}
      </FormControl.ErrorMessage>
      <NativeBaseInput
        style={style}
        isInvalid={invalid}
        borderWidth={0}
        marginBottom={3}
        color={"white"}
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500",
        }}
        _focus={{
          borderWidth: 1,
          borderColor: "green.500",
        }}
        {...rest}
      />
    </FormControl>
  );
}
