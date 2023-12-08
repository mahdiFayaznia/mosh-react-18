import { useEffect } from "react";

const connect = () => {
  console.log("Connecting...");
};
const disconnect = () => {
  console.log("Disconnecting...");
};

const EffectCleanUp = () => {
  useEffect(() => {
    connect();

    // Clean-up function  -->  stop/undo whatever effect doing
    return () => disconnect();
  }, []);

  return <h1>Effect Clean-Up</h1>;
};

export default EffectCleanUp;
