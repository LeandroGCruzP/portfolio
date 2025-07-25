"use client";
import { Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  onClose: () => void;
  toggle: () => void;
}

const Modal = ({ onClose, toggle }: ModalProps) => {
  return createPortal(
    <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
      <div
        className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px]
            py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8
            "
      >
        <p className="font-light">Do you like to play the background music?</p>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={toggle}
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded"
          >
            No
          </button>
        </div>
      </div>
    </div>,

    document.getElementById("my-modal")
  );
};

const Sound = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFirstUserInteraction = useCallback(() => {
    const musicConsent = localStorage.getItem("musicConsent");
    if (musicConsent === "true" && !isPlaying && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }

    ["click", "keydown", "touchstart"].forEach((event) =>
      document.removeEventListener(event, handleFirstUserInteraction)
    );
  }, [isPlaying]);

  useEffect(() => {
    const consent = localStorage.getItem("musicConsent");
    const consentTime = localStorage.getItem("consentTime");

    if (
      consent &&
      consentTime &&
      new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 > new Date().getTime()
    ) {
      setIsPlaying(consent === "true");

      if (consent === "true") {
        ["click", "keydown", "touchstart"].forEach((event) =>
          document.addEventListener(event, handleFirstUserInteraction)
        );
      }
    } else {
      setShowModal(true);
    }
  }, [handleFirstUserInteraction]);

  const toggle = () => {
    const newState = !isPlaying;
    setIsPlaying(!isPlaying);
    if (audioRef.current) {
      newState ? audioRef.current.play() : audioRef.current.pause();
    }
    localStorage.setItem("musicConsent", String(newState));
    localStorage.setItem("consentTime", new Date().toISOString());
    setShowModal(false);
  };
  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      {showModal && (
        <Modal onClose={() => setShowModal(false)} toggle={toggle} />
      )}

      <audio ref={audioRef} loop>
        <source src={"/audio/birds39-forest-20772.mp3"} type="audio/mpeg" />
        your browser does not support the audio element.
      </audio>
      <div
        style={{
          transform: `scale(${showModal ? 0 : 1})`,
          transition: 'transform 0.3s ease',
        }}
        className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg"
      >
        <button
          onClick={toggle}
          aria-label="Sound control button"
          className="w-full h-full flex items-center justify-center bg-transparent border-none"
        >
          {isPlaying ? (
            <Volume2
              className="w-full h-full text-foreground group-hover:text-accent"
              strokeWidth={1.5}
            />
          ) : (
            <VolumeX
              className="w-full h-full text-foreground group-hover:text-accent"
              strokeWidth={1.5}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Sound;
