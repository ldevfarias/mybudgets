"use client";
import { useState } from "react";

export default function StatusRadioGroup() {
	const [selectedStatus, setSelectedStatus] = useState("pendente");

	return (
		<div className="flex space-x-4">
			{/* Opção Pendente */}
			<label className="flex items-center space-x-2">
				<input
					type="radio"
					name="status"
					value="pendente"
					checked={selectedStatus === "pendente"}
					onChange={(e) => setSelectedStatus(e.target.value)}
					className="form-radio h-5 w-5 text-black"
				/>
				<span>Pendente</span>
			</label>

			{/* Opção Pago */}
			<label className="flex items-center space-x-2">
				<input
					type="radio"
					name="status"
					value="pago"
					checked={selectedStatus === "pago"}
					onChange={(e) => setSelectedStatus(e.target.value)}
					className="form-radio h-5 w-5 text-black"
				/>
				<span>Pago</span>
			</label>
		</div>
	);
}
