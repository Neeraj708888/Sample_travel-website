"use client";

import TextareaField from "./TextAreaField";
import TextInput from "./TextInput";



interface Props {
    title: string;
    sectionKey: string;
    form: any;
    setForm: any;
}

export default function DynamicCardsEditor({
    title,
    sectionKey,
    form,
    setForm,
}: Props) {

    const section = form.content[sectionKey];

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">

            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">

                <h3 className="text-sm font-semibold text-gray-700">
                    {title}
                </h3>

                <button
                    type="button"
                    onClick={() => {
                        setForm((prev: any) => ({
                            ...prev,
                            content: {
                                ...prev.content,
                                [sectionKey]: {
                                    ...prev.content[sectionKey],
                                    cards: [
                                        ...prev.content[sectionKey].cards,
                                        {
                                            title: "",
                                            slug: "",
                                            desc: "",
                                            cardType: "service",
                                        },
                                    ],
                                },
                            },
                        }));
                    }}
                    className="h-10 px-4 rounded-xl border border-dashed border-gray-300 text-sm hover:border-[#c9a96e] hover:text-[#c9a96e]"
                >
                    + Add Card
                </button>
            </div>

            {/* Section Title */}
            <TextInput
                label="Section Title"
                value={section.title}
                onChange={(v) => {
                    setForm((prev: any) => ({
                        ...prev,
                        content: {
                            ...prev.content,
                            [sectionKey]: {
                                ...prev.content[sectionKey],
                                title: v,
                            },
                        },
                    }));
                }}
            />

            {/* Section Desc */}
            <TextareaField
                label="Section Description"
                rows={3}
                value={section.shortDesc}
                onChange={(v) => {
                    setForm((prev: any) => ({
                        ...prev,
                        content: {
                            ...prev.content,
                            [sectionKey]: {
                                ...prev.content[sectionKey],
                                shortDesc: v,
                            },
                        },
                    }));
                }}
            />

            {/* Cards */}
            <div className="space-y-5">

                {section.cards.map((card: any, index: number) => (

                    <div
                        key={index}
                        className="rounded-2xl border border-gray-200 bg-gray-50 p-5 space-y-4"
                    >

                        <div className="flex items-center justify-between">

                            <h4 className="text-sm font-semibold text-gray-700">
                                Card #{index + 1}
                            </h4>

                            <button
                                type="button"
                                onClick={() => {

                                    const updated = section.cards.filter(
                                        (_: any, i: number) => i !== index
                                    );

                                    setForm((prev: any) => ({
                                        ...prev,
                                        content: {
                                            ...prev.content,
                                            [sectionKey]: {
                                                ...prev.content[sectionKey],
                                                cards: updated,
                                            },
                                        },
                                    }));
                                }}
                                className="text-red-500 text-sm"
                            >
                                Delete
                            </button>
                        </div>

                        <TextInput
                            label="Card Title"
                            value={card.title}
                            onChange={(v) => {

                                const updated = [...section.cards];
                                updated[index].title = v;

                                setForm((prev: any) => ({
                                    ...prev,
                                    content: {
                                        ...prev.content,
                                        [sectionKey]: {
                                            ...prev.content[sectionKey],
                                            cards: updated,
                                        },
                                    },
                                }));
                            }}
                        />

                        <TextInput
                            label="Card Slug"
                            value={card.slug}
                            onChange={(v) => {

                                const updated = [...section.cards];
                                updated[index].slug = v;

                                setForm((prev: any) => ({
                                    ...prev,
                                    content: {
                                        ...prev.content,
                                        [sectionKey]: {
                                            ...prev.content[sectionKey],
                                            cards: updated,
                                        },
                                    },
                                }));
                            }}
                        />

                        <TextareaField
                            label="Card Description"
                            rows={4}
                            value={card.desc}
                            onChange={(v) => {

                                const updated = [...section.cards];
                                updated[index].desc = v;

                                setForm((prev: any) => ({
                                    ...prev,
                                    content: {
                                        ...prev.content,
                                        [sectionKey]: {
                                            ...prev.content[sectionKey],
                                            cards: updated,
                                        },
                                    },
                                }));
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}