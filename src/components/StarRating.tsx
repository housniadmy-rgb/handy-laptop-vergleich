import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
}

export default function StarRating({ rating, maxRating = 5, size = "md" }: StarRatingProps) {
  const sizeClasses = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: maxRating }).map((_, i) => {
        const filled = i < Math.floor(rating);
        const half = !filled && i < rating;
        return (
          <Star
            key={i}
            className={`${sizeClasses[size]} ${filled || half ? "text-amber-400 fill-amber-400" : "text-gray-300 fill-gray-300"}`}
          />
        );
      })}
      <span className="ml-1 text-sm font-semibold text-gray-700">{rating.toFixed(1)}</span>
    </div>
  );
}
