import React, { useState, useRef, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import { MdArrowBack } from "react-icons/md";
import { Conversation } from "./Conversations";

interface Message {
  id: number;
  text: string;
  from: "bot" | "user";
}

const demoReplies = [
  "Of course! I'd be happy to help you schedule a dental checkup. We have the following available slots this week:\n\n•Tuesday 3:00 PM\n•Wednesday 10:00 AM\n•Thursday 2:30 PM\n\nWhich works best for you?",
  "Sure! Let me check our availability for you. Can you tell me your preferred date and time?",
  "Thank you for reaching out to Acme Dental! Our team will get back to you shortly.",
  "Great choice! I've noted your preference. Is there anything else I can help you with?",
  "Your appointment has been successfully booked. You'll receive a confirmation shortly. Is there anything else?",
];

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! Thank you for reaching out to Acme Dental. How can I help you today?",
    from: "bot",
  },
  {
    id: 2,
    text: "Hi, I'd like to book a dental checkup please.",
    from: "user",
  },
  {
    id: 3,
    text: "Of course! I'd be happy to help you schedule a dental checkup. We have the following available slots this week:\n\n•Tuesday 3:00 PM\n•Wednesday 10:00 AM\n•Thursday 2:30 PM\n\nWhich works best for you?",
    from: "bot",
  },
];

interface Props {
  conversation: Conversation;
  onBack: () => void;
}

const TypingIndicator = () => (
  <div className="flex items-end gap-2 mb-4">
    <div className="bg-gray-100 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1">
      <span
        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
        style={{ animationDelay: "0ms" }}
      />
      <span
        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
        style={{ animationDelay: "150ms" }}
      />
      <span
        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
        style={{ animationDelay: "300ms" }}
      />
    </div>
  </div>
);

function ChatBox({ conversation, onBack }: Props) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [displayedBotText, setDisplayedBotText] = useState<{
    [id: number]: string;
  }>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(initialMessages.length + 1);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, displayedBotText]);

  const typeMessage = (id: number, fullText: string) => {
    let i = 0;
    setDisplayedBotText((prev) => ({ ...prev, [id]: "" }));
    const interval = setInterval(() => {
      i++;
      setDisplayedBotText((prev) => ({ ...prev, [id]: fullText.slice(0, i) }));
      if (i >= fullText.length) clearInterval(interval);
    }, 18);
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    const userMsg: Message = {
      id: nextId.current++,
      text: trimmed,
      from: "user",
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = demoReplies[Math.floor(Math.random() * demoReplies.length)];
      const botMsg: Message = {
        id: nextId.current++,
        text: reply,
        from: "bot",
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
      typeMessage(botMsg.id, reply);
    }, 1200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const getBotText = (msg: Message) => {
    if (msg.from !== "bot") return msg.text;
    return displayedBotText[msg.id] !== undefined
      ? displayedBotText[msg.id]
      : msg.text;
  };

  return (
    <div className="flex flex-col h-full min-h-0">
      {/* Header — Back button inside, always visible */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 shrink-0">
        <button
          onClick={onBack}
          className="lg:hidden flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 text-indigo-500 transition-colors shrink-0"
        >
          <MdArrowBack size={20} />
        </button>
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 font-bold text-sm shrink-0">
          {conversation.name.charAt(0)}
        </div>
        <div>
          <p className="text-gray-900 font-bold text-sm">{conversation.name}</p>
          <p className="text-gray-400 text-xs">{conversation.channel}</p>
        </div>
      </div>

      {/* Messages — scrollable */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1 min-h-0">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex mb-3 ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm whitespace-pre-line leading-relaxed ${
                msg.from === "user"
                  ? "bg-indigo-400 text-white rounded-br-none"
                  : "bg-gray-100 text-gray-800 rounded-bl-none"
              }`}
            >
              {getBotText(msg)}
            </div>
          </div>
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input — pinned to bottom, never moves */}
      <div className="px-4 py-3 border-t border-gray-100 shrink-0">
        <div className="flex items-center gap-2 border border-gray-200 rounded-2xl px-4 py-2 bg-white">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message...."
            className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent py-1"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="w-9 h-9 rounded-xl bg-indigo-100 hover:bg-indigo-200 disabled:opacity-40 flex items-center justify-center text-indigo-500 transition-colors shrink-0"
          >
            <IoSend size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
