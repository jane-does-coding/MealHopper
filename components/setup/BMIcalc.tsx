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

const formSchema = z.object({
	weight: z.string().min(1, { message: "Weight is required" }),
	height: z.string().min(1, { message: "Height is required" }),
	gender: z.string().min(1, { message: "Gender is required" }),
});

type FormData = z.infer<typeof formSchema>;

export default function BMIcalc() {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			weight: "",
			height: "",
			gender: "",
		},
	});

	const onSubmit = (data: FormData) => {
		console.log(data);
	};

	return (
		<div>
			<h2 className="lilita-one text-[1.25rem] xl:text-[1.5rem] mb-2">
				Bmi Calculator
			</h2>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					{["weight", "height", "gender"].map((item) => (
						<FormField
							control={form.control}
							name={item as keyof FormData}
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
