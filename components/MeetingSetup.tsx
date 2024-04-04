"use client";
import {
  DeviceSettings,
  VideoPreview,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const { useMicrophoneState } = useCallStateHooks();
  const { hasBrowserPermission } = useMicrophoneState();
  const [isMicCamOn, setIsMicCamOn] = useState(false);
  const call = useCall();

  if (!call)
    throw new Error("useCall must be used within streamcall component");

  useEffect(() => {
    try {
      if (isMicCamOn) {
        call?.camera.disable();
        call?.microphone.disable();
      } else {
        call?.camera.enable();
        call?.microphone.enable();
      }
      if (hasBrowserPermission) {
        console.log("User has granted microphone permissions!");
      }
    } catch {
      throw new Error("User has denied or not granted microphone permissions!");
    }
  }, [isMicCamOn, call?.camera, call?.microphone]);
  return (
    <div className="flex h-scren w-full items-center justify-center gap-3 text-white flex-col">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamOn}
            onChange={(e) => setIsMicCamOn(e.target.checked)}
          />
          Join With Mic and Camera OFF
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-500 px-4 py-2.5"
        onClick={() => {
          call.join();
          setIsSetupComplete(true);
        }}
      >
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
