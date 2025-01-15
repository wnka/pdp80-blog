import { defineFunction } from "@aws-amplify/backend";
    
export const myFirstFunction = defineFunction({
  name: "my-first-function",
  entry: "./handler.ts"
});
