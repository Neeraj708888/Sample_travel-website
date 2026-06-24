// import { redirect } from 'next/navigation'
// import Link from 'next/link'

// export default function AdminLayout({ children }: { children: React.ReactNode }) {
//     const loggedIn = true // replace with cookie/session check
//     if (!loggedIn) redirect('/admin/login')

//     return (
//         <div className="flex min-h-screen">
//             <main className="flex-1 p-6">{children}</main>
//         </div>
//     )
// }

// app/admin/layout.tsx
// app/admin/(protected)/layout.tsx
// app/admin/(protected)/layout.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { AdminShell } from "./AdminShell";
import { verifyToken } from "@/src/utils/jwt";

export default async function ProtectedAdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    if (!token) redirect("/admin/login");

    // jsonwebtoken se verify — server side only
    const payload = verifyToken(token);
    if (!payload) redirect("/admin/login");

    // Supabase se name fetch karo (token mein name nahi hai)
    // Agar token mein naam store karna ho toh generateToken mein add karo
    const name = payload.email.split("@")[0]; // fallback — email se naam

    return (
        <AdminShell
            adminName={name}
            adminEmail={payload.email}
            adminRole={payload.role}
        >
            {children}
        </AdminShell>
    );
}
//  -----------------  1st Approach ------------------
// 'use client'

// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <div className="flex min-h-screen">

//       {/* Sidebar */}
//       <aside className="w-64 bg-black text-white p-5">
//         Sidebar
//       </aside>

//       <div className="flex-1 flex flex-col">

//         {/* Header */}
//         <header className="h-16 border-b px-6 flex items-center">
//           Admin Header
//         </header>

//         {/* Content */}
//         <main className="flex-1 p-6">
//           {children}
//         </main>

//         {/* Footer */}
//         <footer className="h-14 border-t px-6 flex items-center">
//           Admin Footer
//         </footer>

//       </div>
//     </div>
//   )
// }

// --------------  2nd Approach --------------  //

// 'use client'
// import { useState } from 'react'
// import Link from 'next/link'
// import { Menu, X, Home, Users, Settings, ChevronLeft, ChevronRight } from 'lucide-react'

// export default function AdminLayout({ children }) {
//     const [open, setOpen] = useState(true)
//     const [mobileOpen, setMobileOpen] = useState(false)

//     const SidebarContent = () => (
//         <div className="h-full flex flex-col">
//             <div className="flex items-center justify-between p-4 border-b border-white/10">
//                 <h2 className="font-bold text-xl">Admin</h2>
//                 <button onClick={() => setOpen(!open)} className="hidden md:block">
//                     {open ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
//                 </button>
//             </div>
//             <nav className="p-3 space-y-2 flex-1">
//                 <Link href="/admin" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10"><Home size={18} /> {open && 'Dashboard'}</Link>
//                 <Link href="/admin/users" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10"><Users size={18} /> {open && 'Users'}</Link>
//                 <Link href="/admin/settings" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10"><Settings size={18} /> {open && 'Settings'}</Link>
//             </nav>
//             <div className="p-4 border-t border-white/10 text-sm text-gray-300">© 2026 Admin</div>
//         </div>
//     )

//     return (
//         <div className="min-h-screen flex bg-gray-100">
//             <aside className={`${open ? 'w-64' : 'w-20'} hidden md:block transition-all duration-300 bg-black text-white`}>
//                 <SidebarContent />
//             </aside>

//             {mobileOpen && (
//                 <div className="fixed inset-0 z-50 flex md:hidden">
//                     <div className="w-72 bg-black text-white">
//                         <SidebarContent />
//                     </div>
//                     <div className="flex-1 bg-black/50" onClick={() => setMobileOpen(false)} />
//                 </div>
//             )}

//             <div className="flex-1 flex flex-col transition-all duration-300">
//                 <header className="h-16 bg-white border-b px-4 md:px-6 flex items-center justify-between sticky top-0 z-30">
//                     <div className="flex items-center gap-3">
//                         <button className="md:hidden" onClick={() => setMobileOpen(true)}><Menu /></button>
//                         <h1 className="font-bold text-lg md:text-xl">Admin Dashboard</h1>
//                     </div>
//                     <button className="px-4 py-2 rounded-xl bg-black text-white">Logout</button>
//                 </header>

//                 <main className="flex-1 p-4 md:p-6 overflow-auto">
//                     <div className="rounded-2xl bg-white p-6 shadow-sm min-h-[calc(100vh-140px)]">
//                         {children || <div>
//                             <h2 className="text-2xl font-bold mb-3">Welcome Back</h2>
//                             <p className="text-gray-600">Your content area stretches automatically when sidebar collapses.</p>
//                         </div>}
//                     </div>
//                 </main>

//                 <footer className="h-14 bg-white border-t px-6 flex items-center text-sm text-gray-500">
//                     © 2026 Admin Panel • Fully Responsive Layout
//                 </footer>
//             </div>
//         </div>
//     )
// }
