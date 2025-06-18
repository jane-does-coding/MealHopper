"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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

const formSchema = z.object({
	username: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
});

export default function BMIcalc() {
	const form = useForm();
	const onSubmit = (e: any) => {
		console.log(e);
	};
	// ...

	return (
		<div className="">
			<h2 className="lilita-one text-[1.25rem] xl:text-[1.5rem] mb-2">
				Bmi Calculator
			</h2>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					{["weight", "height", "gender"].map((item) => (
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

					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</div>
	);
}
