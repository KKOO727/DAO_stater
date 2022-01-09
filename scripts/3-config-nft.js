import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x3fD12e1cec9Fd2c51eE7dD6c2771A0e6fa0ca338",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "I Love You",
        description: "This NFT will give you access to ILoveYou DAO!",
        image: readFileSync("scripts/assets/love-you-lots-i-love-you.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()