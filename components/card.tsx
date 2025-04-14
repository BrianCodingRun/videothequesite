import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function card() {
  return (
    <Card className="relative w-[300px] bg-transparent border-none">
      <CardHeader>
        <img
          src="https://images.justwatch.com/poster/307575554/s718/avengers-4.jpg"
          alt="Card image cap"
        />
      </CardHeader>
      <CardContent className="flex flex-col">
        <CardTitle className="text-xl font-semibold">
          Avengers: Endgame
        </CardTitle>
        <CardDescription>
          Avengers: Endgame is an American superhero film series developed by
          Marvel Studios. The films are the sequel to Avengers: Infinity War
          (2018) and Avengers: Age of Ultron (2015)...
        </CardDescription>
      </CardContent>
    </Card>
  );
}
