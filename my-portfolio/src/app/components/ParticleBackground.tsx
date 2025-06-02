// "use client";

// // import { Engine } from "@tsparticles/engine";
// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from 'tsparticles';
//  import type { Engine } from "tsparticles-engine";


// export default function ParticleBackground() {
//   const particlesInit = useCallback(async (engine: Engine) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: {
//           enable: true,
//           zIndex: -1, // So it stays behind your content
//         },
//         background: {
//           color: {
//             value: "#E6DBE9", // matches your global background
//           },
//         },
//         particles: {
//           color: {
//             value: ["#a855f7", "#9333ea", "#7e22ce"], // Purple shades
//           },
//           links: {
//             enable: true,
//             color: "#761180",
//             distance: 150,
//             opacity: 0.3,
//             width: 1,
//           },
//           move: {
//             enable: true,
//             speed: 1,
//             direction: "none",
//             random: true,
//             straight: false,
//             outMode: "bounce",
//           },
//           size: {
//             value: 3,
//           },
//           opacity: {
//             value: 0.5,
//           },
//           number: {
//             value: 50,
//             density: {
//               enable: true,
//               area: 800,
//             },
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//   );
// }
