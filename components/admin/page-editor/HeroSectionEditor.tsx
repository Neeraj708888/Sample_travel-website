"use client";

import TextareaField from "./TextAreaField";
import TextInput from "./TextInput";


export default function HeroSectionEditor({
    form,
    setForm,
}: any) {

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">

            <h3 className="text-sm font-semibold text-gray-700 border-b border-gray-100 pb-4">
                Hero Section
            </h3>

            <TextInput
                label="Hero H1"
                value={form.content.hero.h1}
                onChange={(v) => {
                    setForm((prev: any) => ({
                        ...prev,
                        content: {
                            ...prev.content,
                            hero: {
                                ...prev.content.hero,
                                h1: v,
                            },
                        },
                    }));
                }}
            />

            <TextInput
                label="Hero H2"
                value={form.content.hero.h2}
                onChange={(v) => {
                    setForm((prev: any) => ({
                        ...prev,
                        content: {
                            ...prev.content,
                            hero: {
                                ...prev.content.hero,
                                h2: v,
                            },
                        },
                    }));
                }}
            />

            <TextInput
                label="Hero Image"
                value={form.content.hero.image}
                onChange={(v) => {
                    setForm((prev: any) => ({
                        ...prev,
                        content: {
                            ...prev.content,
                            hero: {
                                ...prev.content.hero,
                                image: v,
                            },
                        },
                    }));
                }}
            />

            <TextareaField
                label="Hero Description"
                rows={4}
                value={form.content.hero.shortDesc}
                onChange={(v) => {
                    setForm((prev: any) => ({
                        ...prev,
                        content: {
                            ...prev.content,
                            hero: {
                                ...prev.content.hero,
                                shortDesc: v,
                            },
                        },
                    }));
                }}
            />
        </div>
    );
}