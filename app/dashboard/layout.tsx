import Navbar from "@/components/ui/navbar/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen w-full flex-col">
			<Navbar />
			<div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
				{children}
			</div>
		</div>
	);
}
