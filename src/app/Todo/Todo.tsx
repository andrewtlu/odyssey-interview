"use client";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

export const Todo = ({ id, text, completed, onDelete, onComplete }: TodoItem & {onDelete: () => void; onComplete: () => void;})=> {
  return (
    <div className="flex flex-row gap-[32px] rounded-lg bg-blue-100 border-2 border-black text-black">
      <input type="checkbox" checked={completed}  onChange={onComplete}/>
      <div className={`flex-1 ${completed ? "line-through text-gray-500" :""}`} >{text}</div>
      <button onClick={onDelete} className ="border-2 border-black text-red-500 bg-gray-100 rounded-lg hover:bg-black"> Delete</button>
    </div>
  );
};
