"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these companies",
  logos = [
    {
      id: "logo-1",
      description: "OpenAI",
      image: "/assets/chat-gpt.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Nike",
      image: "/assets/atom.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "GitHub",
      image: "/assets/g.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "Microsoft",
      image: "/assets/huawei.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "Uber",
      image: "/assets/u.png",
      className: "h-7 w-auto",
    },
    {
        id: "logo-6",
        description: "Logo 6",
        image: "/assets/ibm.png",
        className: "h-7 w-auto",
    },
    {
        id: "logo-7",
        description: "Logo 7",
        image: "/assets/u.png",
        className: "h-4 w-auto",
    },
    {
        id: "logo-8",
        description: "Logo 8",
        image: "/assets/g.png",
        className: "h-7 w-auto",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          {heading}
        </h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 }; 