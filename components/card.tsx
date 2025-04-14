import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function card({
  poster,
  title,
  description,
}: {
  poster: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="relative w-[300px] bg-transparent border-none">
      <CardHeader>
        <img src={poster} alt="Card image cap" />
      </CardHeader>
      <CardContent className="flex flex-col">
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription>
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
