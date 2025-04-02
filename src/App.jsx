import React, { useState } from "react";
import joerImage from "./assets/jober-profile.png";
import itsMatchImg from "./assets/its-a-match.png";
import sadEmoji from "./assets/sad-emoji.png";
import { supabase } from "./supabaseClient";

export default function App() {
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [showMatchImg, setShowMatchImg] = useState(false);
  const [showSadEmoji, setShowSadEmoji] = useState(false);

  const handleSwipe = async (direction) => {
    setSwipeDirection(direction);

    if (direction === "right") {
      setShowMatchImg(true);
    } else if (direction === "left") {
      setShowSadEmoji(true);
    }

    // 🔐 Enregistre le swipe de manière invisible
    await supabase.from("swipes").insert([
      {
        type: direction,
        created_at: new Date().toISOString(),
      },
    ]);

    // Animation sortie
    setTimeout(() => {
      setIsVisible(false);
    }, 800);

    // Reset des effets visuels
    setTimeout(() => {
      setShowMatchImg(false);
      setShowSadEmoji(false);
    }, 2500);
  };

  const swipeAnimation =
    swipeDirection === "left"
      ? "translate-x-[-200px] opacity-0"
      : swipeDirection === "right"
      ? "translate-x-[200px] opacity-0"
      : "";

  return (
    <div className="flex items-center justify-center min-h-screen bg-black relative overflow-hidden">
      {/* Carte Joé */}
      {isVisible && (
        <img
          src={joerImage}
          alt="Joé"
          className={`max-w-xs w-full rounded-xl shadow-xl transition-all duration-700 ease-in-out ${swipeAnimation}`}
        />
      )}

      {/* Boutons */}
      {isVisible && (
        <div
          className="absolute left-1/2 flex gap-12"
          style={{
            bottom: "90px",
            transform: "translateX(-50%)",
          }}
        >
          <button
            onClick={() => handleSwipe("left")}
            className="text-red-500 text-4xl hover:scale-110 transition"
            style={{ transform: "translateX(-11px)" }}
          >
            ❌
          </button>

          <button
            onClick={() => handleSwipe("right")}
            className="text-green-500 text-4xl hover:scale-110 transition"
            style={{ transform: "translateX(11px)" }}
          >
            ✅
          </button>
        </div>
      )}

      {/* Animations d’images (visuelles mais temporaires) */}
      {showMatchImg && (
        <img
          src={itsMatchImg}
          alt="It's a match!"
          className="absolute top-1/2 left-1/2 w-[70%] max-w-lg transform -translate-x-1/2 -translate-y-1/2 animate-slide-in-right"
        />
      )}

      {showSadEmoji && (
        <img
          src={sadEmoji}
          alt="Sad emoji"
          className="absolute top-1/2 left-1/2 w-[70%] max-w-xs transform -translate-x-1/2 -translate-y-1/2 animate-slide-in-left"
        />
      )}
    </div>
  );
}
