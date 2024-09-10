import { categories } from "@/lib/mock-data";
import { db } from "@vercel/postgres";

const client = await db.connect();

async function seedCategories() {
	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
	await client.sql`
    CREATE TABLE IF NOT EXISTS categories (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE
    );
  `;

	const insertedCategories = await Promise.all(
		categories.map(async (category) => {
			return client.sql`
        INSERT INTO categories (name)
        VALUES (${category.name})
        ON CONFLICT (id) DO NOTHING;
      `;
		}),
	);

	return insertedCategories;
}

export async function GET() {
	try {
		await client.sql`BEGIN`;
		await seedCategories();
		await client.sql`COMMIT`;

		return Response.json({ message: "Database seeded successfully" });
	} catch (error) {
		await client.sql`ROLLBACK`;
		return Response.json({ error }, { status: 500 });
	}
}
