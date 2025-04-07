import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

type ServiceCardProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
};

export function ServiceCard({
  icon = <GraduationCap size={32} />,
  title,
  description,
}: ServiceCardProps) {
  return (
    <Card className="md:max-w-[350px] border-none shadow-none p-0">
      <CardHeader className="flex flex-col p-0">
        <span>{icon}</span>
        <CardTitle className="capitalize text-lg lg:text-xl mt-2">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="max-w-xl text-base lg:text-lg text-gray-600 p-0">
        {description}
      </CardContent>
    </Card>
  );
}
