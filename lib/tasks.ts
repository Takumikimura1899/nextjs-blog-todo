type Tasks = {
  id: string;
  created_at: string;
};

export const getAllTasksData = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`).toString()
  );
  const tasks: Tasks[] = await res.json();
  const staticFilteredTasks = tasks.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  return staticFilteredTasks;
};

export const getAllTaskIds = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`).toString()
  );
  const tasks: Tasks[] = await res.json();

  return tasks.map((task) => {
    return {
      params: {
        id: String(task.id),
      },
    };
  });
};

export const getTaskData = async (id: string) => {
  const res = await fetch(
    new URL(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-task/${id}/`
    ).toString()
  );
  const task = await res.json();

  return {
    task,
  };
};
