"use client";

import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Button } from "./ui/button";
import {
  FaMicrophone,
  FaMicrophoneSlash,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";
import { useState } from "react";

const BottomMenuBar = () => {
  const [mic, setMic] = useState(true);
  const [speaker, setSpeaker] = useState(true);
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-top p-3">
      <div className="flex justify-between items-center px-4 py-2">
        <ToggleGroup variant="outline" type="multiple">
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle Mic"
            onClick={() => {
              setMic(!mic);
            }}
          >
            {mic ? <FaMicrophone /> : <FaMicrophoneSlash />}
          </ToggleGroupItem>
          <ToggleGroupItem
            value="italic"
            aria-label="Toggle Speaker"
            onClick={() => {
              setSpeaker(!speaker);
            }}
          >
            {speaker ? <FaVolumeUp /> : <FaVolumeMute />}
          </ToggleGroupItem>
        </ToggleGroup>
        <Button variant="destructive">
          <span className="text-xs">Leave Room</span>
        </Button>
      </div>
    </div>
  );
};
export default BottomMenuBar;