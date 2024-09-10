import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import StatusRadioGroup from "@/components/ui/status-radio-group";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Plus, Search } from "lucide-react";
import Link from "next/link";

export default function Page() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
			<Card>
				<CardHeader className="flex flex-row items-center">
					<div>
						<CardTitle>Lista de despesas</CardTitle>
						<CardDescription className="hidden md:inline">
							Todas as despesas cadastradas
						</CardDescription>
					</div>
					<Sheet>
						<SheetTrigger asChild>
							<Button asChild size="sm" className="ml-auto gap-1">
								<Link href="#">
									<Plus className="h-4 w-4" />
									Nova despesa
								</Link>
							</Button>
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>Nova despesa</SheetTitle>
								<SheetDescription>Adicione a despesa</SheetDescription>
							</SheetHeader>
							<div className="grid gap-4 py-4">
								<div className="grid gap-2">
									<Label htmlFor="name">Nome</Label>
									<Input id="name" />
								</div>
								<div className="grid gap-2">
									<Label htmlFor="category">Categoria</Label>
									<Input id="category" />
								</div>
								<div className="grid gap-2">
									<Label htmlFor="total-value">Valor</Label>
									<Input id="total-value" />
								</div>
								<div className="grid gap-2">
									<Label htmlFor="status">Status</Label>
									<StatusRadioGroup />
								</div>
							</div>
							<SheetFooter>
								<SheetClose asChild>
									<Button type="submit" className="w-full">
										Cadastrar
									</Button>
								</SheetClose>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</CardHeader>
				<CardContent>
					<div>
						<form className="ml-auto flex-1 sm:flex-initial mb-5">
							<div className="relative">
								<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
								<Input
									type="search"
									placeholder="Pesquise pelo nome ou status"
									className="pl-8"
								/>
							</div>
						</form>
					</div>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Nome</TableHead>
								<TableHead className="hidden md:table-cell">
									Categoria
								</TableHead>
								<TableHead className="hidden md:table-cell">Status</TableHead>
								<TableHead className="hidden md:table-cell">Data</TableHead>
								<TableHead className="text-right">Valor</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>
									<div className="font-medium">Liam Johnson</div>
									<div className="hidden text-sm text-muted-foreground md:inline">
										liam@example.com
									</div>
								</TableCell>
								<TableCell className="hidden md:table-cell">
									Alimentacao
								</TableCell>
								<TableCell className="hidden md:table-cell">
									<Badge className="text-xs" variant="destructive">
										pendente
									</Badge>
								</TableCell>
								<TableCell className="hidden md:table-cell">
									2023-06-23
								</TableCell>
								<TableCell className="text-right">$250.00</TableCell>
							</TableRow>
							{/* <TableRow>
								<TableCell>
									<div className="font-medium">Liam Johnson</div>
									<div className="hidden text-sm text-muted-foreground md:inline">
										liam@example.com
									</div>
								</TableCell>
								<TableCell className="">Alimentacao</TableCell>
								<TableCell className="">
									<Badge className="text-xs" variant="outline">
										Approved
									</Badge>
								</TableCell>
								<TableCell className="hidden md:block">2023-06-23</TableCell>
								<TableCell className="text-right">$250.00</TableCell>
							</TableRow> */}
							{/* <TableRow>
									<TableCell>
										<div className="font-medium">Olivia Smith</div>
										<div className="hidden text-sm text-muted-foreground md:inline">
											olivia@example.com
										</div>
									</TableCell>
									<TableCell className="hidden xl:table-column">
										Refund
									</TableCell>
									<TableCell className="hidden xl:table-column">
										<Badge className="text-xs" variant="outline">
											Declined
										</Badge>
									</TableCell>
									<TableCell className="hidden md:table-cell lg:hidden xl:table-column">
										2023-06-24
									</TableCell>
									<TableCell className="text-right">$150.00</TableCell>
								</TableRow> */}
							{/* <TableRow>
									<TableCell>
										<div className="font-medium">Noah Williams</div>
										<div className="hidden text-sm text-muted-foreground md:inline">
											noah@example.com
										</div>
									</TableCell>
									<TableCell className="hidden xl:table-column">
										Subscription
									</TableCell>
									<TableCell className="hidden xl:table-column">
										<Badge className="text-xs" variant="outline">
											Approved
										</Badge>
									</TableCell>
									<TableCell className="hidden md:table-cell lg:hidden xl:table-column">
										2023-06-25
									</TableCell>
									<TableCell className="text-right">$350.00</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div className="font-medium">Emma Brown</div>
										<div className="hidden text-sm text-muted-foreground md:inline">
											emma@example.com
										</div>
									</TableCell>
									<TableCell className="hidden xl:table-column">Sale</TableCell>
									<TableCell className="hidden xl:table-column">
										<Badge className="text-xs" variant="outline">
											Approved
										</Badge>
									</TableCell>
									<TableCell className="hidden md:table-cell lg:hidden xl:table-column">
										2023-06-26
									</TableCell>
									<TableCell className="text-right">$450.00</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div className="font-medium">Liam Johnson</div>
										<div className="hidden text-sm text-muted-foreground md:inline">
											liam@example.com
										</div>
									</TableCell>
									<TableCell className="hidden xl:table-column">Sale</TableCell>
									<TableCell className="hidden xl:table-column">
										<Badge className="text-xs" variant="outline">
											Approved
										</Badge>
									</TableCell>
									<TableCell className="hidden md:table-cell lg:hidden xl:table-column">
										2023-06-27
									</TableCell>
									<TableCell className="text-right">$550.00</TableCell>
								</TableRow> */}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
}
