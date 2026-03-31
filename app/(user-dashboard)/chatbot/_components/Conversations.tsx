import React from "react";

export interface Conversation {
  id: number;
  name: string;
  preview: string;
  channel: "Web" | "WhatsApp";
  time: string;
  unread?: number;
}

interface Props {
  conversations: Conversation[];
  activeId: number;
  onSelect: (id: number) => void;
}

const Avatar: React.FC<{ name: string }> = ({ name }) => (
  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 font-bold text-sm shrink-0">
    {name.charAt(0)}
  </div>
);

function Conversations({ conversations, activeId, onSelect }: Props) {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-gray-900 font-bold text-lg px-4 pt-5 pb-4 shrink-0">Conversations</h2>
      <div className="flex-1 overflow-y-auto">
        {conversations.map((c, idx) => (
          <div
            key={c.id}
            onClick={() => onSelect(c.id)}
            className={`flex items-center gap-3 px-4 py-3.5 cursor-pointer transition-colors ${
              activeId === c.id ? "bg-gray-100" : "hover:bg-gray-50"
            } ${idx < conversations.length - 1 ? "border-b border-gray-100" : ""}`}
          >
            <Avatar name={c.name} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-gray-900 text-sm font-semibold truncate">{c.name}</span>
                <div className="flex items-center gap-1.5 shrink-0">
                  {c.unread ? (
                    <span className="w-5 h-5 rounded-full bg-indigo-500 text-white text-xs flex items-center justify-center font-bold">
                      {c.unread}
                    </span>
                  ) : null}
                  <span className="text-gray-400 text-xs whitespace-nowrap">
                    {c.channel} | {c.time}
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-0.5 truncate">{c.preview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Conversations;