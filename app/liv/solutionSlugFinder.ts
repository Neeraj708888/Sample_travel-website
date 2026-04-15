import { solutions } from "../data/solution";
import { findNodePath } from "./findNodePath";


export function findSolutionPath(slugPath: string[]) {

    return findNodePath(solutions, slugPath);
}


// let currentList = solutions
// let current = null

// for (const slug of slugPath) {
//     current = currentList.find(item => item.slug === slug)

//     if (!current) return null
//     currentList = current.children || []
// }

// // Debug line
// console.log("Solution Slug is comming from Solution Slug Finder: ", current);
// return { current }