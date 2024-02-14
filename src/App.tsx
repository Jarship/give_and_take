import { Header } from "@/components/header";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
	return (
		<ThemeProvider defaultTheme="dark">
			<div className="flex flex-col p-5">
				<Header />
				<Separator className="my-2" />
			</div>
		</ThemeProvider>
	);
}

export default App;
