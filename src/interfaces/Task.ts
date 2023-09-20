interface Task {
  id: number;
  name: string;
  due: Date;
  completed?: boolean;
}

export default Task;
