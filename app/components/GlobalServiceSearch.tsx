// "use client";

// import { useRef, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Search } from "lucide-react";
// import { useGlobalServiceSearch } from "@/app/hooks/useGlobalServiceSearch";

// export default function GlobalServiceSearch() {
//     const router = useRouter();
//     const dropdownRef = useRef<HTMLDivElement>(null);

//     const {
//         query,
//         setQuery,
//         filtered,
//         showDropdown,
//         setShowDropdown,
//         selectService,
//     } = useGlobalServiceSearch();

//     /* Close on outside click */
//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (
//                 dropdownRef.current &&
//                 !dropdownRef.current.contains(event.target as Node)
//             ) {
//                 setShowDropdown(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () =>
//             document.removeEventListener(
//                 "mousedown",
//                 handleClickOutside
//             );
//     }, [setShowDropdown]);

//     const handleSubmit = () => {
//         if (!filtered.length) return;

//         const path = selectService(filtered[0]);
//         router.push(`/events/${path.join("/")}`);
//     };

//     const handleSelect = (service: any) => {
//         const path = selectService(service);
//         router.push(`/events/${path.join("/")}`);
//     };

//     return (
//         <div
//             ref={dropdownRef}
//             className="relative w-full sm:px-6 md:px-0 max-w-2xl mx-auto">
//             {/* Search Bar */}
//             <div className="flex items-center mt-1 px-2 py-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-1 sm:px-4 sm:py-3 shadow-2xl transition-all duration-300">

//                 {/* Input */}
//                 <input
//                     type="text"
//                     placeholder="Search events..."
//                     value={query}
//                     onChange={(e) => {
//                         setQuery(e.target.value);
//                         setShowDropdown(true);
//                     }}
//                     onKeyDown={(e) =>
//                         e.key === "Enter" && handleSubmit()
//                     }
//                     className="flex-1 bg-transparent px-2 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-green-400  placeholder-gray-400 focus:outline-none" />

//                 {/* Search Button */}
//                 <button
//                     onClick={handleSubmit}
//                     className="ml-2 px-3 py-3 sm:px-6 sm:py-3 text-sm sm:text-base bg-yellow-500 hover:bg-yellow-400 active:scale-95 text-black rounded-full font-medium transition-all duration-200 flex items-center gap-2">
//                     <Search size={18} className="hidden sm:block" />
//                     <span className="sm:inline hidden">Search</span>
//                     <Search size={18} className="sm:hidden block" />
//                 </button>
//             </div>

//             {/* Dropdown */}
//             {showDropdown && filtered.length > 0 && (
//                 <ul className="absolute left-0 right-0 mt-2 w-full bg-black border border-white/10 rounded-2xl shadow-2xl max-h-60 overflow-y-auto z-50 text-start">
//                     {filtered.map((service) => (
//                         <li
//                             key={service.fullPath.join("/")}
//                             onClick={() => handleSelect(service)}
//                             className="px-4 sm:px-6 py-3 text-sm sm:text-base text-gray-400 hover:bg-yellow-500/10 hover:text-yellow-400 cursor-pointer transition">
//                             {service.title}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }



"use client";

import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { useGlobalServiceSearch } from "@/app/hooks/useGlobalServiceSearch";

export default function GlobalServiceSearch() {
    const router = useRouter();
    const dropdownRef = useRef<HTMLDivElement>(null);

    const {
        query,
        setQuery,
        filtered,
        showDropdown,
        setShowDropdown,
        selectService,
    } = useGlobalServiceSearch();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [setShowDropdown]);

    const handleSubmit = () => {
        if (!filtered.length) return;
        const { path, prefix } = selectService(filtered[0]);
        router.push(`/${prefix}/${path.join("/")}`);
    };

    const handleSelect = (service: any) => {
        const { path, prefix } = selectService(service);
        router.push(`/${prefix}/${path.join("/")}`);
    };

    // ✅ Deduplicate filtered list before rendering
    //    Root cause: hook se duplicate entries aa rahi hain same fullPath ke saath
    //    prefix undefined hone se keys clash karti thi — ab guaranteed unique key
    const dedupedFiltered = filtered.filter(
        (service, index, self) =>
            index ===
            self.findIndex(
                (s) =>
                    s.fullPath.join("/") === service.fullPath.join("/") &&
                    (s.prefix || "events") === (service.prefix || "events")
            )
    );

    return (
        <div
            ref={dropdownRef}
            className="relative w-full sm:px-6 md:px-0 max-w-2xl mx-auto">

            {/* Search Bar */}
            <div className="flex items-center mt-1 px-2 py-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-1 sm:px-4 sm:py-3 shadow-2xl transition-all duration-300">
                <input
                    type="text"
                    placeholder="Search events..."
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setShowDropdown(true);
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    className="flex-1 bg-transparent px-2 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-green-400 placeholder-gray-400 focus:outline-none"
                />
                <button
                    onClick={handleSubmit}
                    className="ml-2 px-3 py-3 sm:px-6 sm:py-3 text-sm sm:text-base bg-yellow-500 hover:bg-yellow-400 active:scale-95 text-black rounded-full font-medium transition-all duration-200 flex items-center gap-2">
                    <Search size={18} className="hidden sm:block" />
                    <span className="sm:inline hidden">Search</span>
                    <Search size={18} className="sm:hidden block" />
                </button>
            </div>

            {/* Dropdown */}
            {showDropdown && dedupedFiltered.length > 0 && (
                <ul className="absolute left-0 right-0 mt-2 w-full bg-black border border-white/10 rounded-2xl shadow-2xl max-h-60 overflow-y-auto z-50 text-start">
                    {dedupedFiltered.map((service, index) => {
                        // ✅ prefix fallback — undefined hone pe "events" use karo
                        const prefix = service.prefix || "events"
                        const fullPath = service.fullPath?.join("/") || ""

                        // ✅ index as tiebreaker — even if two items somehow identical
                        const uniqueKey = `${prefix}-${fullPath}-${index}`

                        return (
                            <li
                                key={uniqueKey}
                                onClick={() => handleSelect(service)}
                                className="px-4 sm:px-6 py-3 text-sm sm:text-base text-gray-400 hover:bg-yellow-500/10 hover:text-yellow-400 cursor-pointer transition flex items-center justify-between">
                                <span>{service.title}</span>
                                <span className={`text-xs px-2 py-0.5 rounded-full ml-2 ${prefix === "solutions"
                                    ? "bg-blue-500/20 text-blue-400"
                                    : "bg-yellow-500/20 text-yellow-400"
                                    }`}>
                                    {prefix === "solutions" ? "Solution" : "Event"}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    );
}