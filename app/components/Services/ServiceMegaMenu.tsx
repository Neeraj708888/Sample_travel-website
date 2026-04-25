// "use client";

// import Link from "next/link";
// import { services, ServiceNode } from "@/app/data/services";
// import { findNodeByPath } from "./servicesUtils";
// import GlobalServiceSearch from "../GlobalServiceSearch";
// import { useServicePathNavigation } from "@/app/hooks/useServicePathNavigation";
// import { findNodeFullPath } from "@/app/liv/utils/treeHelper";

// export default function ServicesMegaContent() {

//     const [activePath, updatePath] = useServicePathNavigation(services);
//     if (!activePath.length) return null;

//     /* =========================
//        URL BUILDER (OK)
//     ========================= */
//     function getFullPath(path: string[]) {
//         const full = findNodeFullPath(services, path);
//         if (full && full.length) {
//             return `/events/${full.map(n => n.slug).join("/")}`;
//         }
//         return `/events/${path.join("/")}`;
//     }

//     /* LEVEL 1 */
//     const parentNode: ServiceNode | undefined =
//         services.find((s) => s.slug === activePath[0]);

//     /* =========================
//        LEVEL 2 NODE (FIXED)
//     ========================= */
//     let childNode: ServiceNode | null = null;

//     if (activePath.length >= 2) {
//         const node = findNodeByPath(services, activePath.slice(0, 2));

//         // 🔥 FIX: agar leaf hai → parent ka children dikhana hai
//         if (node && !node.children?.length) {
//             const parent = findNodeByPath(services, activePath.slice(0, 1));
//             childNode = parent;
//         } else {
//             childNode = node;
//         }

//     } else if (parentNode?.children?.length) {
//         childNode = parentNode.children[0];
//     }

//     /* LEVEL 3 ITEMS */
//     const middleItems: ServiceNode[] = childNode?.children || [];

//     /* =========================
//        LEVEL 4+ (FIXED)
//     ========================= */
//     let rightParent: ServiceNode | null = null;
//     let rightParentDepth = 3;

//     if (activePath.length >= 3) {
//         for (let depth = activePath.length; depth >= 3; depth--) {

//             const node = findNodeByPath(services, activePath.slice(0, depth));

//             if (node) {

//                 if (node.children?.length) {
//                     // normal case
//                     rightParent = node;
//                     rightParentDepth = depth;
//                     break;
//                 } else {
//                     // 🔥 FIX: leaf → parent use karo
//                     const parent = findNodeByPath(services, activePath.slice(0, depth - 1));
//                     if (parent?.children?.length) {
//                         rightParent = parent;
//                         rightParentDepth = depth - 1;
//                         break;
//                     }
//                 }
//             }
//         }
//     }

//     const rightItems: ServiceNode[] = rightParent?.children || [];
//     const selectedRightSlug = activePath[rightParentDepth];

//     return (
//         <>
//             {/* TOP CATEGORY BAR */}
//             <div className="flex gap-1 overflow-x-auto pb-2 border-b">
//                 {services.map((category: ServiceNode) => (
//                     <button
//                         key={category.slug}
//                         onClick={() => updatePath(0, category.slug)}
//                         className={`whitespace-nowrap px-3 py-2 rounded-lg transition cursor-pointer
//                         ${activePath[0] === category.slug
//                                 ? "bg-amber-400 text-black"
//                                 : "bg-gray-100 hover:bg-amber-300"
//                             }`}
//                     >
//                         {category.title}
//                     </button>
//                 ))}
//             </div>

//             <GlobalServiceSearch />

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1 bg-amber-100 px-4 py-6 rounded-lg h-[300px]">

//                 {/* COL 1 */}
//                 <div className="flex flex-col gap-2 overflow-y-auto pr-3 border-r">
//                     {parentNode?.children?.map((child: ServiceNode) => (
//                         <button
//                             key={child.slug}
//                             onClick={() => updatePath(1, child.slug)}
//                             className={`text-left px-4 py-2 rounded-lg transition
//                             ${activePath[1] === child.slug
//                                     ? "bg-teal-400 text-black"
//                                     : "bg-gray-100 hover:bg-teal-200"
//                                 }`}
//                         >
//                             {child.title} ›
//                         </button>
//                     ))}
//                 </div>

//                 {/* COL 2 */}
//                 <div className="flex flex-col gap-2 overflow-y-auto pr-3 border-r">
//                     {middleItems.length > 0 ? (
//                         middleItems.map((item: ServiceNode) => {

//                             const isSelected = activePath[2] === item.slug;
//                             const hasChildren = !!item.children?.length;

//                             const cls = `text-left px-4 py-2 rounded-lg shadow transition
//                                 ${isSelected
//                                     ? "bg-amber-400 text-black"
//                                     : "bg-white hover:bg-amber-400 hover:text-black"
//                                 }`;

//                             if (hasChildren) {
//                                 return (
//                                     <button
//                                         key={item.slug}
//                                         onClick={() => updatePath(2, item.slug)}
//                                         className={cls}
//                                     >
//                                         {item.title} ›
//                                     </button>
//                                 );
//                             }

//                             return (
//                                 <Link
//                                     key={item.slug}
//                                     href={getFullPath([...activePath.slice(0, 2), item.slug])}
//                                     onClick={() => updatePath(2, item.slug)}
//                                     className={cls}
//                                 >
//                                     {item.title}
//                                 </Link>
//                             );
//                         })
//                     ) : (
//                         <p className="text-gray-400 text-sm">No options available</p>
//                     )}
//                 </div>

//                 {/* COL 3 */}
//                 <div className="flex flex-col gap-2 overflow-y-auto pr-3">
//                     {rightItems.length > 0 ? (
//                         rightItems.map((item: ServiceNode) => {

//                             const isSelected = selectedRightSlug === item.slug;
//                             const hasChildren = !!item.children?.length;
//                             const fullPath = [...activePath.slice(0, rightParentDepth), item.slug];

//                             const cls = `text-left px-4 py-2 rounded-lg shadow transition
//                                 ${isSelected
//                                     ? "bg-amber-400 text-black"
//                                     : "bg-white hover:bg-amber-400 hover:text-black"
//                                 }`;

//                             if (hasChildren) {
//                                 return (
//                                     <button
//                                         key={item.slug}
//                                         onClick={() => updatePath(rightParentDepth, item.slug)}
//                                         className={cls}
//                                     >
//                                         {item.title} ›
//                                     </button>
//                                 );
//                             }

//                             return (
//                                 <Link
//                                     key={item.slug}
//                                     href={getFullPath(fullPath)}
//                                     onClick={() => updatePath(rightParentDepth, item.slug)}
//                                     className={cls}
//                                 >
//                                     {item.title}
//                                 </Link>
//                             );
//                         })
//                     ) : (
//                         <p className="text-gray-400 text-sm">
//                             {activePath.length >= 3 ? "No options available" : "← Select an option"}
//                         </p>
//                     )}
//                 </div>

//             </div>
//         </>
//     );
// }

"use client";

import Link from "next/link";
import { services, ServiceNode } from "@/app/data/services";
import GlobalServiceSearch from "../GlobalServiceSearch";
import { useServicePathNavigation } from "@/app/hooks/useServicePathNavigation";
import { findNodeFullPath } from "@/app/liv/utils/treeHelper";
import { findNodeByPath } from "./servicesUtils";


export default function ServicesMegaContent() {

    const [activePath, updatePath] = useServicePathNavigation(services);
    if (!activePath.length) return null;

    /* =========================
       URL BUILDER
    ========================= */
    function getFullPath(path: string[]) {
        const full = findNodeFullPath(services, path);
        return `/events/${full?.map(n => n.slug).join("/") || path.join("/")}`;
    }

    /* =========================
       🔥 AUTO COLUMN LEVELS
    ========================= */
    const levels: number[] = [];

    for (let i = 1; i <= activePath.length; i++) {
        const path = activePath.slice(0, i);
        const node = findNodeByPath(services, path);

        if (node?.children?.length) {
            levels.push(i);
        } else {
            break; // stop at leaf
        }
    }

    return (
        <>
            {/* TOP CATEGORY BAR */}
            <div className="flex gap-1 overflow-x-auto pb-2 border-b">
                {services.map((category: ServiceNode) => (
                    <button
                        key={category.slug}
                        onClick={() => updatePath(0, category.slug)}
                        className={`whitespace-nowrap px-3 py-2 rounded-lg transition
                        ${activePath[0] === category.slug
                                ? "bg-amber-400 text-black"
                                : "bg-gray-100 hover:bg-amber-300"
                            }`}
                    >
                        {category.title}
                    </button>
                ))}
            </div>

            <GlobalServiceSearch />

            {/* =========================
                DYNAMIC GRID
            ========================= */}
            <div
                className={`grid gap-4 mt-1 bg-amber-100 px-4 py-6 rounded-lg h-[300px]
                grid-cols-1 md:grid-cols-${levels.length || 1}`}
            >

                {levels.map((level) => {

                    const path = activePath.slice(0, level);
                    const node = findNodeByPath(services, path);

                    const items: ServiceNode[] = node?.children || [];

                    return (
                        <div
                            key={level}
                            className="flex flex-col gap-2 overflow-y-auto pr-3 border-r"
                        >
                            {items.map((item: ServiceNode) => {

                                const isActive = activePath[level] === item.slug;
                                const hasChildren = !!item.children?.length;

                                const cls = `text-left px-4 py-2 rounded-lg shadow transition
                                ${isActive
                                        ? level === 1
                                            ? "bg-teal-400 text-black"
                                            : "bg-amber-400 text-black"
                                        : "bg-white hover:bg-amber-400 hover:text-black"
                                    }`;

                                /* HAS CHILDREN */
                                if (hasChildren) {
                                    return (
                                        <button
                                            key={item.slug}
                                            onClick={() => updatePath(level, item.slug)}
                                            className={cls}
                                        >
                                            {item.title} ›
                                        </button>
                                    );
                                }

                                /* LEAF NODE */
                                const fullPath = [...activePath.slice(0, level), item.slug];

                                return (
                                    <Link
                                        key={item.slug}
                                        href={getFullPath(fullPath)}
                                        onClick={() => updatePath(level, item.slug)}
                                        className={cls}
                                    >
                                        {item.title}
                                    </Link>
                                );
                            })}
                        </div>
                    );
                })}

            </div>
        </>
    );
}