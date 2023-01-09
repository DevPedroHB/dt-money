import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { useSummary } from "../../hooks/useSummary";
import { priceFormatter } from "../../utils/formatter";
import { SummaryCard, SummaryContainer, SummaryContent } from "./styles";

export function Summary() {
  const slider = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const summary = useSummary();

  useEffect(() => {
    setWidth(slider.current?.offsetWidth! - slider.current?.scrollWidth!);
  }, []);

  return (
    <SummaryContainer whileTap={{ cursor: "grabbing" }}>
      <SummaryContent
        ref={slider}
        drag="x"
        dragConstraints={{ right: 0, left: width }}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SummaryCard>
          <header>
            <span>Entradas</span>
            <ArrowCircleUp size={32} color="#00b37e" />
          </header>
          <strong>{priceFormatter.format(summary.income)}</strong>
        </SummaryCard>
        <SummaryCard>
          <header>
            <span>Saídas</span>
            <ArrowCircleDown size={32} color="#f75a68" />
          </header>
          <strong>{priceFormatter.format(summary.outcome)}</strong>
        </SummaryCard>
        <SummaryCard variant="green">
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} color="#fff" />
          </header>
          <strong>{priceFormatter.format(summary.total)}</strong>
        </SummaryCard>
      </SummaryContent>
    </SummaryContainer>
  );
}
