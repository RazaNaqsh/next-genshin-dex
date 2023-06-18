"use client";

import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function Providers({ children }: React.PropsWithChildren) {
	const [client] = useState(
		new QueryClient({ defaultOptions: { queries: { staleTime: 500 } } })
	);
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
export default Providers;
