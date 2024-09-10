import { Dashboard } from "@/components/ui/dashboard/main";

export default function Page() {
	return (
		<main>
			<Dashboard />
			{/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				<Suspense fallback={<CardSkeleton />}>
					<CardWrapper />
				</Suspense>
			</div>

			<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-7">
				<Suspense fallback={<RevenueChartSkeleton />}>
					<RevenueChart />
				</Suspense>

				<Suspense fallback={<ExpensesSkeleton />}>
					<Expenses />
				</Suspense>
			</div> */}
		</main>
	);
}
