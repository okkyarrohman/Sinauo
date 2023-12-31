export default function SoalLayout({ children }) {
    return (
        <main className="min-w-screen min-h-screen bg-[#F0F7FF]">
            <section>
                <article className="py-10 px-20">{children}</article>
            </section>
        </main>
    );
}
