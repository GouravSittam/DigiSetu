import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Pricing() {
  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 xl:py-40 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Pricing</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter max-w-xl text-center font-regular leading-tight">
              Prices that make sense!
            </h2>
            <p className="text-base sm:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center px-4 sm:px-0">
              Managing a small business today is already tough.
            </p>
          </div>
          <div className="grid pt-12 sm:pt-16 lg:pt-20 text-left grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 sm:gap-8">
            <Card className="w-full rounded-md">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal text-lg sm:text-xl">
                    Startup
                  </span>
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Our goal is to streamline SMB trade, making it easier and faster
                  than ever for everyone and everywhere.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6 sm:gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-lg sm:text-xl">
                    <span className="text-3xl sm:text-4xl">$10</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      / month
                    </span>
                  </p>
                  <div className="flex flex-col gap-3 sm:gap-4 justify-start">
                    <div className="flex flex-row gap-3 sm:gap-4">
                      <Check className="w-4 h-4 mt-1 sm:mt-2 text-primary flex-shrink-0" />
                      <div className="flex flex-col">
                        <p className="text-sm sm:text-base">Fast and reliable</p>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          We&apos;ve made it fast and reliable.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-3 sm:gap-4">
                      <Check className="w-4 h-4 mt-1 sm:mt-2 text-primary flex-shrink-0" />
                      <div className="flex flex-col">
                        <p className="text-sm sm:text-base">Fast and reliable</p>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          We&apos;ve made it fast and reliable.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-3 sm:gap-4">
                      <Check className="w-4 h-4 mt-1 sm:mt-2 text-primary flex-shrink-0" />
                      <div className="flex flex-col">
                        <p className="text-sm sm:text-base">Fast and reliable</p>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          We&apos;ve made it fast and reliable.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-2 sm:gap-4 text-sm sm:text-base py-2 sm:py-3">
                    Sign up today <MoveRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full shadow-2xl rounded-md">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal text-lg sm:text-xl">
                    Growth
                  </span>
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Our goal is to streamline SMB trade, making it easier and faster
                  than ever for everyone and everywhere.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative flex flex-col gap-6 sm:gap-8 justify-start">
                  <span className="absolute -top-4 right-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">
                    Most Popular
                  </span>
                  <p className="flex flex-row items-center gap-2 text-lg sm:text-xl">
                    <span className="text-3xl sm:text-4xl animate-pulse">$40</span>
                    <span className="text-sm text-muted-foreground">/ month</span>
                  </p>
                  <ul className="flex flex-col gap-3 sm:gap-4">
                    {[
                      "Unlimited transactions",
                      "Advanced analytics",
                      "Priority support",
                      "Custom webhooks",
                      "Multi-user dashboard"
                    ].map((feature, idx) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="inline-block w-5 h-5 bg-green-400 rounded-full flex items-center justify-center text-white animate-bounce">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="gap-2 sm:gap-4 text-sm sm:text-base py-2 sm:py-3 hover:scale-105 transition-transform">
                    Sign up today <MoveRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full rounded-md md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal text-lg sm:text-xl">
                    Enterprise
                  </span>
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Our goal is to streamline SMB trade, making it easier and faster
                  than ever for everyone and everywhere.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6 sm:gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-lg sm:text-xl">
                    <span className="text-3xl sm:text-4xl">$100</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      / month
                    </span>
                  </p>
                  <div className="flex flex-col gap-3 sm:gap-4 justify-start">
                    <div className="flex flex-row gap-3 sm:gap-4">
                      <Check className="w-4 h-4 mt-1 sm:mt-2 text-primary flex-shrink-0" />
                      <div className="flex flex-col">
                        <p className="text-sm sm:text-base">Fast and reliable</p>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          We&apos;ve made it fast and reliable.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-3 sm:gap-4">
                      <Check className="w-4 h-4 mt-1 sm:mt-2 text-primary flex-shrink-0" />
                      <div className="flex flex-col">
                        <p className="text-sm sm:text-base">Fast and reliable</p>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          We&apos;ve made it fast and reliable.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-3 sm:gap-4">
                      <Check className="w-4 h-4 mt-1 sm:mt-2 text-primary flex-shrink-0" />
                      <div className="flex flex-col">
                        <p className="text-sm sm:text-base">Fast and reliable</p>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          We&apos;ve made it fast and reliable.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-2 sm:gap-4 text-sm sm:text-base py-2 sm:py-3">
                    Book a meeting <PhoneCall className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing }; 