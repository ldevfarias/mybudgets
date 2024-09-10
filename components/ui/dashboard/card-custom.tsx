import { ReactElement } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../card";

export function CardCustom({
	title,
	value,
	type,
	icon,
}: {
	title: string;
	value: number | string;
	type: "invoices" | "customers" | "pending" | "collected";
	icon: ReactElement;
}) {
	// const Icon = iconMap[type];

	return (
		<Card x-chunk="dashboard-01-chunk-0">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-sm font-medium">{title}</CardTitle>
				{/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
				{icon}
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">${value}</div>
				<p className="text-xs text-muted-foreground">+20.1% from last month</p>
			</CardContent>
		</Card>
		// <Card>
		// 	<div className="flex justify-between align-middle p-2">
		// 		<h3 className="ml-2 text-sm font-medium">{title}</h3>
		// 		{icon}
		// 	</div>
		// 	<div className="flex ml-6 text-2xl font-medium">$ {value}</div>
		// 	<div className="flex ml-6 pb-6 text-gray-500 font-semibold text-xs">
		// 		+20.1% from last month
		// 	</div>
		// </Card>
	);
}
