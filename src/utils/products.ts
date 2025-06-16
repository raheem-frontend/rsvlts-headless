export function getRecentlyViewedProducts(): string[] {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
  }