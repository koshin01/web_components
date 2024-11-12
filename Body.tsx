import type { ReactNode } from "react"

const Body = ({children}: {children: ReactNode}) => {
    return (
        <body className="flex flex-col min-h-screen max-w-full prose lg:prose-lg">
            {children}
        </body>
    )
}

export default Body;