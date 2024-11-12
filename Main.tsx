import type { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Main: FC<Props> = ({ children }) => {
    return (
        <main className="flex flex-1 flex-col p-7 pb-20 gap-10 md:w-2/3 md:self-center">
            {children}
        </main>
    )
};

export default Main;
