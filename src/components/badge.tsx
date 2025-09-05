import React from "react";
import Text from "./text";
import { cva, cx, type VariantProps } from "class-variance-authority";
import Skeleton from "./skeleton";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        none: "",
        primary: "bg-pink-200",
        secondary: "bg-green-200",
      },
      size: {
        sm: "py-0.5 px-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

export const badgeTextVariants = cva("", {
  variants: {
    variant: {
      none: "",
      primary: "text-pink-900",
      secondary: "text-green-900",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface BadgeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {
  loading?: boolean;
}

export const BadgeSkeletonVariants = cva("", {
  variants: {
    size: {
      sm: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export default function Badge({
  variant,
  size,
  className,
  children,
  loading,
  ...props
}: BadgeProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="full"
        className={cx(
          badgeVariants({ variant: "none" }),
          BadgeSkeletonVariants({ size }),
          className
        )}
      />
    );
  }
  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text variant="body-sm-bold" className={badgeTextVariants({ variant })}>
        {children}
      </Text>
    </div>
  );
}
