interface FAQsProps {
    form: any;
    setForm: React.Dispatch<React.SetStateAction<any>>;
}

export default function FAQs({
    form,
    setForm,
}: FAQsProps) {
    return (
        <div className="space-y-4">
            {form.faqs.map((faq: any, index: number) => (
                <div
                    key={index}
                    className="rounded-2xl border p-4 bg-gray-800 space-y-4"
                >
                    <input
                        type="text"
                        value={faq.question}
                        placeholder="Question"
                        onChange={(e) => {
                            const updated = [...form.faqs];
                            updated[index].question =
                                e.target.value;

                            setForm((prev: any) => ({
                                ...prev,
                                faqs: updated,
                            }));
                        }}
                        className="w-full rounded-xl border px-4 py-2"
                    />

                    <textarea
                        rows={4}
                        value={faq.answer}
                        placeholder="Answer"
                        onChange={(e) => {
                            const updated = [...form.faqs];
                            updated[index].answer =
                                e.target.value;

                            setForm((prev: any) => ({
                                ...prev,
                                faqs: updated,
                            }));
                        }}
                        className="w-full rounded-xl border px-4 py-3"
                    />

                    <button
                        onClick={() => {
                            setForm((prev: any) => ({
                                ...prev,
                                faqs: prev.faqs.filter(
                                    (_: any, i: number) =>
                                        i !== index
                                ),
                            }));
                        }}
                        className="text-red-500"
                    >
                        Remove
                    </button>
                </div>
            ))}

            <button
                onClick={() => {
                    setForm((prev: any) => ({
                        ...prev,
                        faqs: [
                            ...prev.faqs,
                            {
                                question: "",
                                answer: "",
                            },
                        ],
                    }));
                }}
                className="border-dashed border rounded-xl px-5 py-2"
            >
                + Add FAQ
            </button>
        </div>
    );
}