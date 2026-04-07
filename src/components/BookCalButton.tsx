interface BookCalButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function BookCalButton({ className, children }: BookCalButtonProps) {
  return (
    <a
      href="https://api.leadconnectorhq.com/widget/booking/kpDUvRxlISqTrSqBvRvt"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children ?? "Book A Free Call →"}
    </a>
  );
}
