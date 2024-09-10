import { sql } from "@vercel/postgres";
import { z } from "zod";

const FormCategorySchema = z.object({
	id: z.string(),
	name: z.string({
		invalid_type_error: "Por favor, selecione uma categoria",
	}),
});

const CreateCategory = FormCategorySchema.omit({ id: true });

export async function createCategory(form: FormData) {
	const validateField = CreateCategory.safeParse({
		name: form.get("name"),
	});

	if (!validateField.success) {
		return {
			errors: validateField.error.flatten().fieldErrors,
			message: "Missing Fields. Failed to Create category.",
		};
	}

	const { name } = validateField.data;

	try {
		await sql`
      INSERT INTO category (name)
      VALUES (${name})
    `;
	} catch (error) {
		return {
			message: "Database Error: Failed to create category",
		};
	} finally {
		// revalidatePath(invoicePath);
		// redirect(invoicePath);
	}
}
