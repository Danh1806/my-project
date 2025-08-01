import { useState, useEffect } from "react";
import axios from "axios";

const API = "https://6889a2154c55d5c73952eb4f.mockapi.io/nhansu";

 // đổi thành link MockAPI của bạn

export default function NhanSuLayout() {
  const [data, setData] = useState([]);
  const [newName, setNewName] = useState("");
  const [newEmailWork, setNewEmailWork] = useState("");

  // Trạng thái cho sửa
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmailWork, setEditEmailWork] = useState("");

  // 1. Lấy dữ liệu ban đầu
  useEffect(() => {
    axios.get(API).then((res) => setData(res.data));
  }, []);

  // 2. Thêm nhân sự
  const handleAdd = async () => {
    if (!newName.trim() || !newEmailWork.trim()) return;
    const newPerson = {
      name: newName,
      code: "nv" + String(data.length + 1).padStart(6, "0"),
      emailAccount: newEmailWork.split("@")[0],
      emailWork: newEmailWork,
      department: "Chưa phân",
      active: false,
    };
    const res = await axios.post(API, newPerson);
    setData([...data, res.data]);
    setNewName("");
    setNewEmailWork("");
  };

  // 3. Xóa nhân sự
  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    setData(data.filter((item) => item.id !== id));
  };

  // 4. Bắt đầu sửa nhân sự
  const startEdit = (person) => {
    setEditId(person.id);
    setEditName(person.name);
    setEditEmailWork(person.emailWork);
  };

  // 5. Lưu chỉnh sửa
  const handleSaveEdit = async () => {
    const updated = {
      ...data.find((item) => item.id === editId),
      name: editName,
      emailWork: editEmailWork,
      emailAccount: editEmailWork.split("@")[0],
    };
    const res = await axios.put(`${API}/${editId}`, updated);
    setData(data.map((item) => (item.id === editId ? res.data : item)));
    setEditId(null); // thoát chế độ edit
  };

  return (
    <div className="flex h-screen">
      {/* Nội dung */}
      <div className="flex-[1_0_0%] p-6 overflow-x-auto">
        {/* Khu thêm nhân sự */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Tên nhân viên"
              className="border px-2 py-1 rounded"
            />
            <input
              type="email"
              value={newEmailWork}
              onChange={(e) => setNewEmailWork(e.target.value)}
              placeholder="Email công việc"
              className="border px-2 py-1 rounded"
            />
            <button
              onClick={handleAdd}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              +
            </button>
          </div>
        </div>
         {/**bảng nhân sự */}
        <table className="border-collapse min-w-full">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="py-3 px-4">Tên người dùng</th>
              <th className="py-3 px-4">Mã NV</th>
              <th className="py-3 px-4">Email tài khoản</th>
              <th className="py-3 px-4">Email công việc</th>
              <th className="py-3 px-4">Phòng ban</th>
              <th className="py-3 px-4">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person) => (
              <tr key={person.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      person.active ? "bg-green-500" : "bg-gray-300"
                    }`}
                  ></span>
                  <div className="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center text-white font-bold">
                    {person.name.charAt(0).toUpperCase()}
                  </div>
                  {editId === person.id ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="border px-1 py-0.5 rounded"
                    />
                  ) : (
                    <span className="text-blue-600 hover:underline">
                      {person.name}
                    </span>
                  )}
                </td>

                <td className="py-3 px-4">{person.code}</td>

                <td className="py-3 px-4">{person.emailAccount}</td>

                <td className="py-3 px-4">
                  {editId === person.id ? (
                    <input
                      type="email"
                      value={editEmailWork}
                      onChange={(e) => setEditEmailWork(e.target.value)}
                      className="border px-1 py-0.5 rounded"
                    />
                  ) : (
                    person.emailWork
                  )}
                </td>

                <td className="py-3 px-4">{person.department}</td>

                <td className="py-3 px-4 flex gap-2">
                  {editId === person.id ? (
                    <button
                      onClick={handleSaveEdit}
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      Lưu
                    </button>
                  ) : (
                    <button
                      onClick={() => startEdit(person)}
                      className="bg-yellow-400 px-2 py-1 rounded"
                    >
                      Sửa
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(person.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
