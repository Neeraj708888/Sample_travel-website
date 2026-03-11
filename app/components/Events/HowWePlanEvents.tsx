// "use client";

// import {
//   MessageCircle,
//   ClipboardList,
//   Palette,
//   Rocket,
//   BarChart3,
// } from "lucide-react";

// const steps = [
//   {
//     title: "Consultation",
//     desc: "We understand your event goals and expectations.",
//     icon: MessageCircle,
//   },
//   {
//     title: "Planning",
//     desc: "Strategic planning including logistics and vendors.",
//     icon: ClipboardList,
//   },
//   {
//     title: "Design",
//     desc: "Creative theme, decor and visual styling.",
//     icon: Palette,
//   },
//   {
//     title: "Execution",
//     desc: "Flawless event management on the big day.",
//     icon: Rocket,
//   },
//   {
//     title: "Review",
//     desc: "Post event feedback and performance review.",
//     icon: BarChart3,
//   },
// ];

// export default function HowWePlanEvents() {
//   return (
//     <section className="py-24 bg-neutral-950 text-white">

//       <div className="max-w-7xl mx-auto px-6 text-center">

//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold mb-20 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
//           How We Plan Your Event
//         </h2>

//         {/* Circle Layout */}
//         <div className="relative w-[500px] h-[500px] mx-auto">

//           {/* Center */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-40 h-40 rounded-full bg-yellow-500 text-black flex items-center justify-center text-center font-semibold">
//               Your <br /> Perfect <br /> Event
//             </div>
//           </div>

//           {steps.map((step, index) => {
//             const Icon = step.icon;

//             const angle = (index / steps.length) * 360;
//             const radius = 200;

//             const x = radius * Math.cos((angle * Math.PI) / 180);
//             const y = radius * Math.sin((angle * Math.PI) / 180);

//             return (
//               <div
//                 key={index}
//                 className="absolute w-40 text-center"
//                 style={{
//                   top: `calc(50% + ${y}px)`,
//                   left: `calc(50% + ${x}px)`,
//                   transform: "translate(-50%, -50%)",
//                 }}
//               >
//                 <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur hover:border-yellow-500 transition">

//                   <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center bg-yellow-500 rounded-full text-black">
//                     <Icon size={18} />
//                   </div>

//                   <h4 className="text-sm font-semibold text-yellow-400">
//                     {step.title}
//                   </h4>

//                   <p className="text-xs text-gray-400 mt-1">
//                     {step.desc}
//                   </p>

//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Trust Section */}
//         <p className="mt-20 text-gray-300 max-w-2xl mx-auto">
//           Our experienced event specialists ensure every step of the process
//           is handled with precision, creativity and attention to detail.
//         </p>

//       </div>

//     </section>
//   );
// }

// "use client";

// import {
//     MessageCircle,
//     ClipboardList,
//     Palette,
//     Rocket,
//     BarChart3,
// } from "lucide-react";

// const steps = [
//     {
//         title: "Consultation",
//         desc: "We understand your event goals and expectations.",
//         icon: MessageCircle,
//     },
//     {
//         title: "Planning",
//         desc: "Strategic planning including logistics and vendors.",
//         icon: ClipboardList,
//     },
//     {
//         title: "Design",
//         desc: "Creative theme, decor and visual styling.",
//         icon: Palette,
//     },
//     {
//         title: "Execution",
//         desc: "Flawless event management on the big day.",
//         icon: Rocket,
//     },
//     {
//         title: "Review",
//         desc: "Post event feedback and performance review.",
//         icon: BarChart3,
//     },
// ];

// export default function HowWePlanEvents() {
//     return (
//         <section className="py-24 bg-neutral-950 text-white">

//             <div className="max-w-7xl mx-auto px-6 text-center">

//                 {/* Heading */}
//                 <h2 className="text-4xl md:text-5xl font-bold mb-20 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
//                     How We Plan Your Event
//                 </h2>

//                 {/* Circle Layout */}
//                 <div className="relative w-[500px] h-[500px] mx-auto">

//                     {/* Center */}
//                     <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="w-40 h-40 rounded-full bg-yellow-500 text-black flex items-center justify-center text-center font-semibold">
//                             Your <br /> Perfect <br /> Event
//                         </div>
//                     </div>

//                     {steps.map((step, index) => {
//                         const Icon = step.icon;

//                         const angle = (index / steps.length) * 360;
//                         const radius = 200;

//                         const x = radius * Math.cos((angle * Math.PI) / 180);
//                         const y = radius * Math.sin((angle * Math.PI) / 180);

//                         return (
//                             <div
//                                 key={index}
//                                 className="absolute w-40 text-center"
//                                 style={{
//                                     top: `calc(50% + ${y}px)`,
//                                     left: `calc(50% + ${x}px)`,
//                                     transform: "translate(-50%, -50%)",
//                                 }}
//                             >
//                                 <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur hover:border-yellow-500 transition">

//                                     <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center bg-yellow-500 rounded-full text-black">
//                                         <Icon size={18} />
//                                     </div>

//                                     <h4 className="text-sm font-semibold text-yellow-400">
//                                         {step.title}
//                                     </h4>

//                                     <p className="text-xs text-gray-400 mt-1">
//                                         {step.desc}
//                                     </p>

//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 {/* Trust Section */}
//                 <p className="mt-20 text-gray-300 max-w-2xl mx-auto">
//                     Our experienced event specialists ensure every step of the process
//                     is handled with precision, creativity and attention to detail.
//                 </p>

//             </div>

//         </section>
//     );
// }

"use client";

import {
    MessageCircle,
    ClipboardList,
    Palette,
    Rocket,
    BarChart3,
} from "lucide-react";

const steps = [
    {
        title: "Consultation",
        desc: "We understand your event goals and expectations.",
        icon: MessageCircle,
    },
    {
        title: "Planning",
        desc: "Strategic planning including logistics and vendors.",
        icon: ClipboardList,
    },
    {
        title: "Design",
        desc: "Creative theme, decor and visual styling.",
        icon: Palette,
    },
    {
        title: "Execution",
        desc: "Flawless event management on the big day.",
        icon: Rocket,
    },
    {
        title: "Review",
        desc: "Post event feedback and performance review.",
        icon: BarChart3,
    },
];

export default function HowWePlanEvents() {
    return (
        <section className="py-16 bg-neutral-950 text-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    How We Plan Your Event
                </h2>

                {/* Circle Layout */}
                <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[500px] md:h-[500px] mx-auto">

                    {/* Center */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-40 md:h-40 rounded-full bg-yellow-500 text-black flex items-center justify-center text-center text-[10px] sm:text-xs md:text-base font-semibold shadow-xl">
                            Your <br /> Perfect <br /> Event
                        </div>
                    </div>

                    {/* Rotating container */}
                    <div className="absolute inset-0 animate-[spin_25s_linear_infinite]">

                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            const angle = (index / steps.length) * 360;

                            const radius = 0.38; // percentage of container

                            const x = Math.cos((angle * Math.PI) / 180) * radius * 100;
                            const y = Math.sin((angle * Math.PI) / 180) * radius * 100;

                            return (
                                <div
                                    key={index}
                                    className="absolute w-24 sm:w-28 md:w-40 text-center"
                                    style={{
                                        top: `calc(50% + ${y}%)`,
                                        left: `calc(50% + ${x}%)`,
                                        transform: "translate(-50%, -50%)",
                                    }}
                                >

                                    <div className="bg-white/5 border border-white/10 rounded-xl p-2 md:p-4 backdrop-blur hover:border-yellow-500 transition">

                                        <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 mx-auto mb-2 flex items-center justify-center bg-yellow-500 rounded-full text-black">
                                            <Icon size={14} />
                                        </div>

                                        <h4 className="text-[10px] sm:text-xs md:text-sm font-semibold text-yellow-400">
                                            {step.title}
                                        </h4>

                                        <p className="hidden sm:block text-[10px] md:text-xs text-gray-400 mt-1">
                                            {step.desc}
                                        </p>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>

                {/* Trust Section */}
                <p className="mt-16 text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
                    Our experienced event specialists ensure every step of the process
                    is handled with precision, creativity and attention to detail.
                </p>

            </div>

        </section>
    );
}