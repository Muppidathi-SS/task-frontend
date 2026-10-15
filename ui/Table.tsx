const tasks = [
  {
    task_id: "d8078e0c-e2d7-4775-99f9-cbbf33fed2d4",
    user_id: "224161ff-4eb2-40b9-b59d-aff8e1f2d035",
    task_name: "Learn JWT Authentication",
    status: "pending",
    priority: "high",
    category_name: "Learning",
    is_focused: true,
    focus_due_date: "2026-10-15",
    created_at: "2026-10-12 10:01:16.697694",
    updated_at: "2026-10-12 10:01:16.697694",
  },
  {
    task_id: "2315ac6d-f444-4f0f-be44-f97ee54657a3",
    user_id: "224161ff-4eb2-40b9-b59d-aff8e1f2d035",
    task_name: "Build Task Management UI",
    status: "in_progress",
    priority: "high",
    category_name: "Development",
    is_focused: true,
    focus_due_date: "2026-10-16",
    created_at: "2026-10-12 10:04:08.429166",
    updated_at: "2026-10-12 10:04:08.429166",
  },
  {
    task_id: "b6fbfe03-b867-42a6-b5c4-bd50cc193fb5",
    user_id: "224161ff-4eb2-40b9-b59d-aff8e1f2d035",
    task_name: "Read 20 Pages of a Book",
    status: "pending",
    priority: "low",
    category_name: "Personal",
    is_focused: false,
    focus_due_date: "2026-10-18",
    created_at: "2026-10-12 10:04:22.137659",
    updated_at: "2026-10-12 10:04:22.137659",
  },
  {
    task_id: "f77a9060-a43d-4534-bd42-6db48083ee67",
    user_id: "224161ff-4eb2-40b9-b59d-aff8e1f2d035",
    task_name: "Fix Authentication Bug",
    status: "completed",
    priority: "medium",
    category_name: "Development",
    is_focused: false,
    focus_due_date: "2026-10-12",
    created_at: "2026-10-12 10:04:29.70643",
    updated_at: "2026-10-12 10:04:29.70643",
  },
  {
    task_id: "4eabcf6b-b897-4332-bd14-02984a456b27",
    user_id: "224161ff-4eb2-40b9-b59d-aff8e1f2d035",
    task_name: "Practice Python Basics",
    status: "pending",
    priority: "medium",
    category_name: "Learning",
    is_focused: true,
    focus_due_date: "2026-10-20",
    created_at: "2026-10-12 10:04:37.211391",
    updated_at: "2026-10-12 10:04:37.211391",
  },
  {
    task_id: "f04879f8-4287-4a66-b387-7251ad429c1b",
    user_id: "224161ff-4eb2-40b9-b59d-aff8e1f2d035",
    task_name: "Practice Python Basics 2",
    status: "pending",
    priority: "medium",
    category_name: "Learning",
    is_focused: true,
    focus_due_date: "2026-10-20",
    created_at: "2026-10-12 10:13:30.298873",
    updated_at: "2026-10-12 10:13:30.298873",
  },
  {
    task_id: "9a454c7b-fa9f-46b3-a542-7c9ff989e360",
    user_id: "224161ff-4eb2-40b9-b59d-aff8e1f2d035",
    task_name: "Complete REST API Integrations #E",
    status: "completed",
    priority: "high",
    category_name: "Work",
    is_focused: true,
    focus_due_date: "2026-10-20",
    created_at: "2026-10-13 17:12:10.08942",
    updated_at: "2026-10-13 17:12:55.727633",
  },
];

const columnNames = [
  "Task Name",
  "Status",
  "Priority",
  "Category Name",
  "Foucus Due Date",
];

export default function Table() {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            {columnNames.map((col) => (
              <th key={col} className="px-6 py-3 font-semibold">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {tasks.map((task) => (
            <tr
              key={task.task_id}
              className="transition-colors hover:bg-gray-50"
            >
              <td className="px-6 py-4 text-gray-900">{task.task_name}</td>
              <td className="px-6 py-4">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  {task.status}
                </span>
              </td>
              <td className="px-6 py-4 text-gray-900">{task.priority}</td>
              <td className="px-6 py-4 text-gray-900">{task.category_name}</td>
              <td className="px-6 py-4 text-gray-900">{task.focus_due_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
