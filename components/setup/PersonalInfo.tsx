"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// 1. Define schema
const formSchema = z.object({
	name: z.string().min(1, { message: "Name is required" }),
	email: z.string().email({ message: "Invalid email" }),
	username: z
		.string()
		.min(2, { message: "Username must be at least 2 characters." }),
	password: z
		.string()
		.min(6, { message: "Password must be at least 6 characters." }),
});

// 2. Infer types from schema
type FormValues = z.infer<typeof formSchema>;

export default function PersonalInfo() {
	// 3. Use typed useForm with resolver
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
	});

	// 4. Typed submit handler
	const onSubmit = (data: FormValues) => {
		console.log(data);
	};

	return (
		<div className="">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="grid gap-6 grid-cols-2"
				>
					{Object.keys(formSchema.shape).map((item) => (
						<FormField
							key={item}
							control={form.control}
							name={item as keyof FormValues}
							render={({ field }) => (
								<FormItem>
									<FormLabel className="capitalize">{item}</FormLabel>
									<FormControl>
										<Input placeholder={item} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					))}
					<Button type="submit" className="col-span-2 mt-6 w-full">
						Update
					</Button>
				</form>
			</Form>
		</div>
	);
}
