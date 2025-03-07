import Image from "next/image";

export const Loading = () => {
  return (
    <div className="loading">
      <Image
        src="/assets/loading.gif"
        alt="Loading..."
        width={300} 
        height={200} 
      />
    </div>
  );
};
