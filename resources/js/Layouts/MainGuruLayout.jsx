import SidebarGuru from "@/Components/GeneralComponents/SidebarGuru";

export default function MainGuruLayout({ children }) {
    return (
        <main className="min-w-screen min-h-screen bg-[#F0F7FF]">
            <section>
                <aside>
                    <SidebarGuru />
                </aside>
                <section className="min-h-screen ml-[16.5rem] pr-12 py-10">
                    <article>{children}</article>
                </section>
            </section>
        </main>
    );
}
