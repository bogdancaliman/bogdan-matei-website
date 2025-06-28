import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface ArtProjectCardProps {
  title?: string;
  year?: string;
  tag?: string;
  imageUrl?: string;
  onClick?: () => void;
}

export default function Component({
  title = "Abstract Composition",
  year = "2024",
  tag = "Digital Art",
  imageUrl = "/placeholder.svg?height=300&width=400",
  onClick,
}: ArtProjectCardProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      console.log("Art project clicked:", title);
    }
  };

  return (
    <Card
      className={`p-0 m-0 border-0 w-full max-w-lg cursor-pointer transition-all duration-200 hover:shadow-lg ${
        isPressed ? "scale-95" : "hover:scale-105"
      }`}
      onClick={handleClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      <CardContent className="p-0 relative overflow-hidden rounded-lg">
        <div className="relative">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="w-full h-64 object-cover"
          />

          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />

          {/* Title, Badge - Left top corner */}
          <div className="absolute top-4 left-4">
            <h3 className="text-white font-semibold text-lg drop-shadow-lg">
              {title}
            </h3>
            <Badge
              variant="secondary"
              className="bg-white/90 text-black hover:bg-white"
            >
              {tag}
            </Badge>
          </div>

          {/* Year - Right top corner */}
          <div className="absolute top-4 right-4">
            <span className="text-white font-medium text-sm bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
              {year}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
