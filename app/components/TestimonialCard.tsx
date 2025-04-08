import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const TestimonialCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Card className="w-full lg:max-w-[375px] rounded-none">
      <CardHeader className="flex flex-col ">
        <CardTitle className="capitalize text-lg mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm max-w-2xl md:max-w-3xl md:text-base  text-gray-600">
        &quot;{description}&quot;
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
