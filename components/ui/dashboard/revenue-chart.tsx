import { generateYAxis } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../card";

export default async function RevenueChart() {
	// const revenue = await fetchRevenue();
	const revenue = [
		{
			month: "Feb",
			revenue: 1800,
		},
		{
			month: "Mar",
			revenue: 2200,
		},
		{
			month: "Apr",
			revenue: 2500,
		},
		{
			month: "May",
			revenue: 2300,
		},
		{
			month: "Jun",
			revenue: 3200,
		},
		{
			month: "Jul",
			revenue: 3500,
		},
		{
			month: "Aug",
			revenue: 3700,
		},
		{
			month: "Sep",
			revenue: 2500,
		},
		{
			month: "Oct",
			revenue: 2800,
		},
		{
			month: "Nov",
			revenue: 3000,
		},
		{
			month: "Dec",
			revenue: 4800,
		},
	];

	const chartHeight = 350;

	const { yAxisLabels, topLabel } = generateYAxis(revenue);

	if (!revenue || revenue.length === 0) {
		return <p className="mt-4 text-gray-400">No data available.</p>;
	}

	return (
		<Card className="w-full md:col-span-4">
			<CardHeader>
				<CardTitle>Volume de despesas</CardTitle>
				<CardDescription>
					Visualize o valor total de despesas mensais
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end p-4 md:gap-2">
					<div
						className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
						style={{ height: `${chartHeight}px` }}
					>
						{yAxisLabels.map((label) => (
							<p key={label}>{label}</p>
						))}
					</div>

					{revenue.map((month) => (
						<div key={month.month} className="flex flex-col items-center gap-1">
							<div
								className="w-full rounded-md bg-blue-300"
								style={{
									height: `${(chartHeight / topLabel) * month.revenue}px`,
								}}
							></div>
							<p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
								{month.month}
							</p>
						</div>
					))}
				</div>
				<div className="flex items-center pb-2 pt-6">
					<CalendarIcon className="h-5 w-5 text-gray-500" />
					<h3 className="ml-2 text-sm text-gray-500 ">Last 12 months</h3>
				</div>
			</CardContent>
		</Card>
	);
}
