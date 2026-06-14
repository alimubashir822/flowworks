import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center space-x-2 text-xs font-mono text-gray-500 uppercase tracking-wider mb-6"
    >
      <ol
        className="flex items-center space-x-2 flex-wrap list-none p-0 m-0"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="flex items-center"
        >
          <Link
            href="/"
            itemProp="item"
            className="hover:text-[#00D2FF] transition-colors flex items-center gap-1 cursor-none"
          >
            <Home className="w-3.5 h-3.5" />
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const position = (index + 2).toString();
          // Force canonical-like absolute url for schema microdata item field if it's absolute, otherwise prepend host
          const absoluteUrl = item.item.startsWith("http") ? item.item : `https://flowworks.ai${item.item}`;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3 h-3 text-gray-600 shrink-0 mx-2" />
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className="flex items-center"
              >
                {isLast ? (
                  <>
                    <span itemProp="name" className="text-gray-400 truncate max-w-[200px] sm:max-w-xs">
                      {item.name}
                    </span>
                    <meta itemProp="item" content={absoluteUrl} />
                  </>
                ) : (
                  <Link
                    href={item.item}
                    itemProp="item"
                    className="hover:text-[#00D2FF] transition-colors cursor-none"
                  >
                    <span itemProp="name">{item.name}</span>
                  </Link>
                )}
                <meta itemProp="position" content={position} />
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

