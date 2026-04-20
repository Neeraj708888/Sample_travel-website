// "use client";

// import Image from "next/image";
// import Link from "next/link";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// export function PopularEvent() {

//     const events = [
//         {
//             title: "Luxury Destination Wedding",
//             location: "Jaipur, Rajasthan",
//             image: "https://images.unsplash.com/photo-1519741497674-611481863552",
//         },
//         {
//             title: "Corporate Product Launch",
//             location: "New Delhi",
//             image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
//         },
//         {
//             title: "Private Anniversary Celebration",
//             location: "Goa",
//             image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
//         },
//         {
//             title: "Music Festival Night",
//             location: "Mumbai",
//             image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
//         },
//     ];

//     return (
//         <section className="py-24 text-white">

//             <div className="max-w-7xl mx-auto px-6">

//                 {/* Title */}
//                 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
//                     Our Popular Events
//                 </h2>

//                 <Swiper
//                     modules={[Autoplay]}
//                     loop={true}

//                     slidesPerView={"auto"}
//                     spaceBetween={30}

//                     speed={5000}

//                     autoplay={{
//                         delay: 0,
//                         disableOnInteraction: false,
//                         pauseOnMouseEnter: true,
//                     }}
//                 >

//                     {events.concat(events).map((event, index) => (

//                         <SwiperSlide
//                             key={index}
//                             className="!w-[320px]"
//                         >

//                             <div className="group relative h-80 rounded-3xl overflow-hidden border border-white/10 shadow-xl hover:shadow-yellow-500/20 transition-all duration-500">

//                                 <Image
//                                     src={`${event.image}?auto=format&fit=crop&w=800&q=80`}
//                                     alt={event.title}
//                                     fill
//                                     className="object-cover group-hover:scale-110 transition-transform duration-700"
//                                 />

//                                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>

//                                 <div className="absolute bottom-0 p-6 z-10">

//                                     <h3 className="text-xl font-semibold text-yellow-400 mb-2">
//                                         {event.title}
//                                     </h3>

//                                     <p className="text-gray-300 text-sm mb-4">
//                                         {event.location}
//                                     </p>

//                                     <Link
//                                         href="/portfolio"
//                                         className="inline-block px-5 py-2 bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-semibold rounded-full transition"
//                                     >
//                                         View Details
//                                     </Link>

//                                 </div>

//                             </div>

//                         </SwiperSlide>

//                     ))}

//                 </Swiper>

//             </div>

//         </section>
//     );
// }