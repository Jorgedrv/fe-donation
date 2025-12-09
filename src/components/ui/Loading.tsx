import LoadingIcon from "./LoadingIcon";

export default function Loading() {
  return (
    <div className="w-full h-[70vh] flex flex-col items-center justify-center animate-fadeIn">
      <LoadingIcon size={80} />
      <p className="mt-6 text-gray-600 text-lg font-medium animate-pulse" />
    </div>
  );
}
