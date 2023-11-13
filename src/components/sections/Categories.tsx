"use client";

import React from "react";
import CategoryCard from "../multiUse/CategoryCard";

import pageData from "../../app/pageData.json" assert { type: "json" };
import { Button } from "../ui/button";
import Link from "next/link";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Categories() {
  const categories = pageData.categories;

  const renderCards: () => any = () => {
    return categories.map(({ category, description, pages, link }) => {
      if (category != "More") {
        return (
          <CategoryCard
            key={category}
            title={category}
            description={description}
            link={link}
          >
            {pages.map(({ page, description, link }) => (
              <HoverCard>
                <HoverCardTrigger>
                  <Button key={page} variant="secondary" asChild>
                    <Link href={link}>{page}</Link>
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent>
                  <p className="text-xs font-medium">{description}</p>
                </HoverCardContent>
              </HoverCard>
            ))}
          </CategoryCard>
        );
      }
    });
  };

  console.log(renderCards());

  return <div className="grid grid-cols-1 gap-6 p-6">{renderCards()}</div>;
}
