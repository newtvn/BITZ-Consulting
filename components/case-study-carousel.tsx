'use client';

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { motion } from "framer-motion"

interface CaseStudyImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface CaseStudyCarouselProps {
  images: CaseStudyImage[];
}

export function CaseStudyCarousel({ images }: CaseStudyCarouselProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-1"
            >
              <Card className="border-0 shadow-ios rounded-xl overflow-hidden hover:shadow-ios-lg transition-all duration-300">
                <div className="aspect-video relative bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-500">{image.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-white/20 hover:bg-white/30 text-white border-none" />
      <CarouselNext className="bg-white/20 hover:bg-white/30 text-white border-none" />
    </Carousel>
  );
} 