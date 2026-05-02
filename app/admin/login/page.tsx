'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setLoading(true)
        setError('')

        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })

            const data = await res.json()

            if (data.success) {
                router.push('/admin')
            } else {
                setError(data.message || 'Login failed')
            }
        } catch (err) {
            setError('Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="relative mt-11 h-[calc(100vh-44px)] overflow-hidden text-white flex items-center">

            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
                    className="w-full h-full object-cover opacity-40"
                    alt="bg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40" />
            </div>

            {/* Floating Shape */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-20 left-10 w-40 h-40 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20"
            />

            {/* Main Wrapper */}
            <div className="relative z-10 w-full flex justify-center px-4 md:px-8">

                <div className="grid md:grid-cols-2 items-center w-full max-w-6xl gap-10 py-8">

                    {/* Left Side */}
                    <div className="flex items-center justify-center md:justify-start">
                        <div className="max-w-xl space-y-6">

                            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
                                Ananta Hospitality Admin Access
                            </span>

                            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                                Control Everything From One Powerful Dashboard
                            </h1>

                            <p className="text-gray-300 text-lg">
                                Manage users, leads, blog posts, analytics and settings
                                with a futuristic admin experience.
                            </p>

                            <div className="rounded-3xl bg-white/10 border border-white/20 p-5 backdrop-blur-xl max-w-md">
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                                    className="rounded-2xl h-52 w-full object-cover"
                                    alt="card"
                                />
                            </div>

                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center justify-center">

                        <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 p-8 shadow-2xl">

                            <h2 className="text-3xl font-bold mb-2">
                                Admin Login
                            </h2>

                            <p className="text-gray-300 mb-6">
                                Secure sign in to continue
                            </p>

                            {error && (
                                <div className="mb-4 rounded-xl bg-red-500/20 border border-red-400/30 p-3 text-sm text-red-200">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleLogin} className="space-y-4">

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full p-3 rounded-xl bg-white/10 border border-white/20 outline-none placeholder:text-gray-300"
                                />

                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full p-3 rounded-xl bg-white/10 border border-white/20 outline-none placeholder:text-gray-300"
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition duration-300 disabled:opacity-70"
                                >
                                    {loading ? 'Please wait...' : 'Login Now'}
                                </button>

                                <div className="text-sm text-gray-300 text-center cursor-pointer hover:text-white transition">
                                    Forgot password?
                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}