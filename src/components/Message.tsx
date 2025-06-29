export default function Message({ message, type = "info" }: { message: string; type?: "success" | "error" | "info" }) {
  const colors = {
    success: "bg-green-100 text-green-700",
    error: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
  };

  return (
    <div className={`p-3 rounded text-sm text-center ${colors[type]}`}>
      {message}
    </div>
  );
}
