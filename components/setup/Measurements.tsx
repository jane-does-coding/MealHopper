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
	age: z.string(),
	weight: z.string(),
	height: z.string(),
	gender: z.string(),
	"activity level": z.string(),
	waist: z.string(),
	hip: z.string(),
	neck: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Measurements() {
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = (values: FormValues) => {
		console.log(values);
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
							control={form.control}
							name={item as keyof FormValues}
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
					<Button type="submit" className="col-span-2">
						Update
					</Button>
				</form>
			</Form>
		</div>
	);
}
