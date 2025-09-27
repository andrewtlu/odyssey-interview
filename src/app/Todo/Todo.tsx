"use client";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};


type TodoProps = TodoItem & {
  onClick: (id: number) => void;
  onDelete: (id: number) => void;
};

export const Todo = ({ id, text, completed, onClick, onDelete }: TodoProps) => {
  return (
    <div
    onClick={() => onClick(id)}
      className="px-2 flex items-center justify-between gap-2 py-2 rounded-md cursor-pointer"
      style={{
        outline: "1px solid #0f0e0f",
        outlineOffset: "2px",
        borderRadius: "12px",
        backgroundColor: completed ? "#685e8a" : "#a397cc", 
        color: "#0b0b0b",
        marginBottom: "12px",
      }}
    >
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={completed}
          readOnly
          className="h-5 w-5 rounded"
          style={{ accentColor: "#c2a5e8" }} 
          aria-label="Completed"
        />
        <span
          className={completed ? "" : ""}
          style={{
            textDecoration: completed ? "line-through" : "none",
            opacity: completed ? 0.7 : 1,
          }}
        >
          {text}
        </span>
      </label>

        <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(id);
        }}
        style={{
          marginLeft: "auto",
          background: "transparent",
          fontSize: "18px",
          lineHeight: 1,
          cursor: "pointer",
        }}
      >
        ×
      </button>
    </div>
  );
};