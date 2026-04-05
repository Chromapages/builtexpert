import * as React from "react";
import { TrendingUp, Users, DollarSign, Calculator } from "lucide-react";
import { INDUSTRIAL } from "@/lib/industrialStyle";

export function ROICalculator() {
  const [ticketValue, setTicketValue] = React.useState(5000);
  const [closingRate, setClosingRate] = React.useState(20);
  const [newLeads, setNewLeads] = React.useState(15);

  const monthlyRevenue = (newLeads * (closingRate / 100)) * ticketValue;
  const yearlyRevenue = monthlyRevenue * 12;
  const retainerCost = 1500;
  const monthlyProfit = monthlyRevenue - retainerCost;
  const roi = (monthlyProfit / retainerCost) * 100;

  return (
    <div
      className="overflow-hidden rounded-2xl bg-white shadow-xl"
      style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
    >
      <div className="bg-zinc-50 p-6 md:p-8" style={{ borderBottom: `0.5px solid ${INDUSTRIAL.outline}` }}>
        <div className="flex items-center gap-3">
          <Calculator className="size-5 text-md3-primary" />
          <h3 className="font-headline text-xl font-bold text-zinc-800">BuiltExpert ROI Calculator</h3>
        </div>
        <p className="mt-1 text-xs font-light text-zinc-500">Calculate the potential impact of a high-performance growth retainer.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-8 p-8 md:p-10" style={{ borderRight: `0.5px solid ${INDUSTRIAL.outline}` }}>
          <div>
            <div className="mb-4 flex items-center justify-between">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Avg Ticket Value</label>
              <span className="font-headline text-lg font-bold text-zinc-800">${ticketValue.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="500"
              max="20000"
              step="500"
              value={ticketValue}
              onChange={(e) => setTicketValue(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200 accent-md3-primary"
            />
            <div className="mt-2 flex justify-between text-[9px] font-medium text-zinc-400">
              <span>$500</span>
              <span>$20,000</span>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Closing Rate (%)</label>
              <span className="font-headline text-lg font-bold text-zinc-800">{closingRate}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="60"
              step="1"
              value={closingRate}
              onChange={(e) => setClosingRate(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200 accent-md3-primary"
            />
            <div className="mt-2 flex justify-between text-[9px] font-medium text-zinc-400">
              <span>5%</span>
              <span>60%</span>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Monthly Target Leads</label>
              <span className="font-headline text-lg font-bold text-zinc-800">{newLeads} leads</span>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              step="5"
              value={newLeads}
              onChange={(e) => setNewLeads(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200 accent-md3-primary"
            />
            <div className="mt-2 flex justify-between text-[9px] font-medium text-zinc-400">
              <span>5</span>
              <span>100</span>
            </div>
          </div>

          <div className="rounded-lg bg-teal-50 p-4">
            <p className="text-[10px] font-light leading-relaxed text-teal-800">
              <strong>Retainer Cost:</strong> $1,500/mo <br />
              Includes SEO, content, lead tracking, and website optimization.
            </p>
          </div>
        </div>

        {/* Outputs */}
        <div className="flex flex-col justify-center space-y-8 bg-zinc-50/50 p-8 md:p-10">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-white p-3 shadow-sm ring-1 ring-zinc-200">
                <DollarSign className="size-6 text-md3-primary" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Est. Monthly Revenue</p>
                <h4 className="font-headline text-3xl font-bold tracking-tight text-zinc-800">
                  ${monthlyRevenue.toLocaleString()}
                </h4>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-white p-3 shadow-sm ring-1 ring-zinc-200">
                <Users className="size-6 text-md3-primary" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Est. New Customers</p>
                <h4 className="font-headline text-3xl font-bold tracking-tight text-zinc-800">
                  {(newLeads * (closingRate / 100)).toFixed(1)}
                </h4>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-white p-3 shadow-sm ring-1 ring-zinc-200">
                <TrendingUp className="size-6 text-md3-primary" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Monthly ROI</p>
                <h4 className="font-headline text-3xl font-bold tracking-tight text-md3-primary">
                  {roi.toFixed(0)}%
                </h4>
              </div>
            </div>
          </div>

          <div className="pt-8" style={{ borderTop: `0.5px solid ${INDUSTRIAL.outline}` }}>
              <div className="flex items-center justify-between">
                <div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Est. Yearly Impact</p>
                   <p className="font-headline text-2xl font-bold text-zinc-800">${yearlyRevenue.toLocaleString()}</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Payback Period</p>
                   <p className="font-headline text-2xl font-bold text-zinc-800">High Potential</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
