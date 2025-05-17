// // TypingText.jsx
// import React from "react";
// import { Typewriter } from "react-simple-typewriter";

// export default function TypingText() {
//   return (
//     <div className="text-center mt-20">
//       <h1 className="text-3xl font-bold text-gray-800">
//         <Typewriter
//           words={['Hi, I\'m Mohammad 👋']}
//           loop={1}
//           cursor
//           cursorStyle="|"
//           typeSpeed={70}
//           deleteSpeed={50}
//           delaySpeed={1500}
//         />
//       </h1>
//     </div>
//   );
// }






// TypingIntro.jsx
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import './wave.css'; // 👈 We'll define this next

export default function TypingIntro() {
  const [showHand, setShowHand] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <h1 className="text-4xl font-bold text-gray-800 flex items-center">
        <Typewriter
          words={[`Hi, I'm Mohammad`]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={0}
          delaySpeed={1000}
          onLoopDone={() => setShowHand(true)} // only runs once
          onType={() => setShowHand(false)}
        />
        {showHand && <span className="wave-hand ml-2">👋</span>}
      </h1>
    </div>
  );
}
