import Sidebar from "@/Components/GeneralComponents/Sidebar";

export default function MainLayout({ children }) {
    return (
        <main className="min-w-screen min-h-screen bg-[#F0F7FF]">
            <section>
                <aside>
                    <Sidebar />
                </aside>
                <section className="min-h-screen ml-[19.5rem] pr-12 py-10">
                    <article className="bg-red-500">{children}</article>
                </section>
            </section>
        </main>
    );
}
