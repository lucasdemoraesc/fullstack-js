interface Todo {
    priority: number;
    description: string;
    done: boolean;
}

const todo: Partial<Todo> = {
    priority: 1,
    description: "Todo 1"
};

console.log(todo);
