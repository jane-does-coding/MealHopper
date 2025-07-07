"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
/* 
const formSchema = z.object({
	username: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
});
 */
export default function PersonalInfo() {
	const form = useForm();
	const onSubmit = (e: any) => {
		console.log(e);
	};
	// ...

	return (
		<div className="">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="grid gap-6 grid-cols-2"
				>
					{["name", "email", "username", "password"].map((item) => (
						<FormField
							control={form.control}
							name={item}
							key={item}
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
				</form>
				<Button type="submit" className="mt-6 w-full">
					Update
				</Button>
			</Form>
		</div>
	);
}
