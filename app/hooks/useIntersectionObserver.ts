"use client";
import { useState, useEffect, useRef, RefObject } from "react";

export function useIntersectionObserver<T extends Element>(
  options?: IntersectionObserverInit
): [RefObject<T | null>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
}
