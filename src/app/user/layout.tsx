import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2 className="text-center text-4xl mt-8 text-red-500">
        From User layout
      </h2>
      {children}
    </>
  );
}
