import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { Plus, Search } from "lucide-react";
import Link from "next/link";

export default function Page() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
			<Card>
				<CardHeader className="flex flex-row items-center">
					<div>
						<CardTitle>Lista de categorias</CardTitle>
						<CardDescription className="hidden md:inline">
							Todas as categorias cadastradas
						</CardDescription>
					</div>
					<Sheet>
						<SheetTrigger asChild>
							<Button asChild size="sm" className="ml-auto gap-1">
								<Link href="#">
									<Plus className="h-4 w-4" />
									Nova categoria
								</Link>
							</Button>
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>Nova despesa</SheetTitle>
								<SheetDescription>Adicione a categoria</SheetDescription>
							</SheetHeader>
							<div className="grid gap-4 py-4">
								<div className="grid gap-2">
									<Label htmlFor="name">Nome</Label>
									<Input id="name" />
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
									placeholder="Ex: Alimentação"
									className="pl-8"
								/>
							</div>
						</form>
					</div>

					<div className="flex items-center gap-4">
						<Avatar className="hidden h-9 w-9 sm:flex">
							{/* <AvatarImage src="/avatars/01.png" alt="Avatar" /> */}
							<AvatarFallback>OM</AvatarFallback>
						</Avatar>
						<div className="grid gap-1">
							<p className="text-sm font-medium leading-none">Olivia Martin</p>
							<p className="text-sm text-muted-foreground">
								olivia.martin@email.com
							</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
