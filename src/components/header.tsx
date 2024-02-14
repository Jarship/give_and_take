import { ThemeToggle } from "@/components/theme-toggle";
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
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { zodResolver } from "@hookform/resolvers/zod";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { UserCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	email: z
		.string()
		.min(2, {
			message: "Email must be at least 2 characters.",
		})
		.max(50),
});

export function Header() {
	const loginForm = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}
	return (
		<header className="flex">
			<div className="p-2 border-2 rounded w-fit hover:bg-accent hover:cursor-pointer mr-3">
				<p className="uppercase font-black text-sm">H W</p>
			</div>
			<NavigationMenu className="items-start">
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink>
							<a href="/" className={navigationMenuTriggerStyle()}>
								Home
							</a>
						</NavigationMenuLink>
						{/* <NavigationMenuTrigger>Home</NavigationMenuTrigger> */}
						{/* <NavigationMenuContent></NavigationMenuContent> */}
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<div className="flex-1" />
			<NavigationMenuPrimitive.Root className="relative z-10 flex max-w-max flex-1 justify-center items-start">
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>
							<UserCircle className="h-[1.2rem] w-[1.2rem] mr-2" />
							Login
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<div className="p-5 w-[300px] md:w-[400px]">
								<Form {...loginForm}>
									<form
										className="space-y-8"
										onSubmit={loginForm.handleSubmit(onSubmit)}
									>
										<FormField
											control={loginForm.control}
											name="email"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Email</FormLabel>
													<FormControl>
														<Input
															placeholder="john@example.org"
															{...field}
															type="email"
														/>
													</FormControl>
													<FormDescription>
														We'll send you an email and take it from there.
													</FormDescription>
													<FormMessage />
												</FormItem>
											)}
										/>
										<Button type="submit">Submit</Button>
									</form>
								</Form>
							</div>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
				<NavigationMenuViewport className="left-[-135px] md:left-[-225px] xl:left-[-125px]" />
			</NavigationMenuPrimitive.Root>
			<ThemeToggle />
		</header>
	);
}
