import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

type Msg = { role: "bot" | "user"; text: string };

type Step = {
  key: string;
  question: string;
  options?: string[];
};

const steps: Step[] = [
  { key: "service", question: "Lovely! Which service are you interested in?", options: ["Bridal Gown Fitting", "Custom Design Consultation", "Bridesmaid Styling", "Pre-Wedding Makeover"] },
  { key: "date", question: "When would you like to visit us? (e.g. May 24, 2026)" },
  { key: "time", question: "What time works best for you?", options: ["10:00 AM", "12:30 PM", "3:00 PM", "5:30 PM"] },
  { key: "name", question: "May I have your full name?" },
  { key: "phone", question: "And a phone number to confirm your booking?" },
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Hi, I'm Élise 🌸 — your Aurélie Bridal concierge. I'd love to help you book an appointment." },
    { role: "bot", text: steps[0].question },
  ]);
  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [input, setInput] = useState("");
  const [done, setDone] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const submit = (value: string) => {
    if (!value.trim() || done) return;
    const current = steps[stepIdx];
    const newAnswers = { ...answers, [current.key]: value };
    const newMessages: Msg[] = [...messages, { role: "user", text: value }];

    if (stepIdx + 1 < steps.length) {
      newMessages.push({ role: "bot", text: steps[stepIdx + 1].question });
      setStepIdx(stepIdx + 1);
    } else {
      newMessages.push({
        role: "bot",
        text: `Thank you, ${newAnswers.name}! ✨`,
      });
      newMessages.push({
        role: "bot",
        text: `Your appointment for ${newAnswers.service} on ${newAnswers.date} at ${newAnswers.time} has been booked successfully. We'll send a confirmation to ${newAnswers.phone}. We can't wait to meet you!`,
      });
      setDone(true);
    }
    setAnswers(newAnswers);
    setMessages(newMessages);
    setInput("");
  };

  const current = steps[stepIdx];

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl shadow-primary/30 transition-transform hover:scale-105"
        aria-label="Open chat"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[560px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          <div className="flex items-center gap-3 border-b border-border bg-primary px-5 py-4 text-primary-foreground">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Sparkles size={16} />
            </div>
            <div>
              <p className="font-serif text-lg leading-tight">Élise</p>
              <p className="text-xs opacity-80">Booking Concierge · Online</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-secondary/20 px-4 py-5">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-sm bg-primary text-primary-foreground"
                      : "rounded-bl-sm bg-card text-card-foreground border border-border"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {!done && current.options && (
            <div className="flex flex-wrap gap-2 border-t border-border bg-card px-4 py-3">
              {current.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => submit(opt)}
                  className="rounded-full border border-accent/60 bg-accent/30 px-3 py-1.5 text-xs text-accent-foreground transition-colors hover:bg-accent"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit(input);
            }}
            className="flex items-center gap-2 border-t border-border bg-card px-3 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={done}
              placeholder={done ? "Conversation complete ✨" : "Type your reply..."}
              className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={done || !input.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground disabled:opacity-40"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
