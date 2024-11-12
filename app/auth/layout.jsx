import Image from "next/image";

const AuthLayout = ({ children }) => {
  return (
    <div className="grid place-items-center h-screen bg-[#FAFAFA]">
      <div className="flex flex-col gap-16 py-8 px-4">
        <Image
          src="/logo.png"
          alt="Brand Logo"
          height={56}
          width={146}
          className="mx-auto"
        />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
