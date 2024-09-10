import clsx from "clsx";
import { PlusCircle, RefreshCcwIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../card";

export default async function Expenses() {
	// const latestInvoices = await fetchLatestInvoices();
	const latestInvoices = [
		{
			amount: "$2,222.00",
			name: "Balazs Orban",
			image_url: "/customers/balazs-orban.png",
			email: "balazs@orban.com",
			id: "378536f4-85ee-4ed2-b53d-ff985d641920",
		},
		{
			amount: "$448.00",
			name: "Michael Novotny",
			image_url: "/customers/michael-novotny.png",
			email: "michael@novotny.com",
			id: "7a3521cb-85d8-49b4-8c63-e30fc80f0530",
		},
		{
			amount: "$448.00",
			name: "Michael Novotny",
			image_url: "/customers/michael-novotny.png",
			email: "michael@novotny.com",
			id: "66836015-1404-46da-95ea-af352d11f3ea",
		},
		{
			amount: "$448.00",
			name: "Michael Novotny",
			image_url: "/customers/michael-novotny.png",
			email: "michael@novotny.com",
			id: "79933b5c-c1b6-4f77-b0cc-1b6dbac0bc02",
		},
		{
			amount: "$448.00",
			name: "Michael Novotny",
			image_url: "/customers/michael-novotny.png",
			email: "michael@novotny.com",
			id: "b2016f79-885d-4392-a4d2-47cba7debd3a",
		},
	];

	return (
		<Card className="flex w-full flex-col md:col-span-3">
			<CardHeader>
				<div className="flex justify-between items-center">
					<div>
						<CardTitle>Despesas</CardTitle>
						<CardDescription>Ultimas despesas de Setembro</CardDescription>
					</div>
					<div>
						<Button variant="outline">
							<PlusCircle size={20} className="mr-2" />
							<span>Nova despesa</span>
						</Button>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<div className="flex grow flex-col justify-between">
					<div className="bg-white px-6">
						{latestInvoices.map((invoice, i) => {
							return (
								<div
									key={invoice.id}
									className={clsx(
										"flex flex-row items-center justify-between py-4",
										{
											"border-t": i !== 0,
										},
									)}
								>
									<div className="flex items-center">
										<Image
											src={invoice.image_url}
											alt={`${invoice.name}'s profile picture`}
											className="mr-4 rounded-full"
											width={32}
											height={32}
										/>
										<div className="min-w-0">
											<p className="truncate text-sm font-semibold md:text-base">
												{invoice.name}
											</p>
											<p className="hidden text-sm text-gray-500 sm:block">
												{invoice.email}
											</p>
										</div>
									</div>
									<p className={`truncate text-sm font-medium md:text-base`}>
										{invoice.amount}
									</p>
								</div>
							);
						})}
					</div>
					<div className="flex items-center pb-2 pt-6">
						<RefreshCcwIcon className="h-5 w-5 text-gray-500" />
						<h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
