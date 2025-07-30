import { useState } from 'react'
import './App.css'
import  NhanSuLayout from './sidebar/nhansu'

function App() {
  const [menu, setMenu] = useState("")

  // Hàm tạo class cho nút menu
  const menuClass = (key) =>
    `text-left p-2 rounded hover:bg-gray-200 ${
      menu === key ? "bg-gray-300 font-bold" : ""
    }`

  return (
    <div className="flex">
      {/* Sidebar */}
      <nav className="w-[200px] bg-gray-100 p-2 h-screen flex flex-col gap-2">
        <a href="#" className="flex items-center p-2 mb-4">
          <img src="logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="ml-2 font-bold">Trang chủ</span>
        </a>

        <button onClick={() => setMenu("phongban")} className={menuClass("phongban")}>
          Phòng ban
        </button>
        <button onClick={() => setMenu("vitri")} className={menuClass("vitri")}>
          Vị trí
        </button>
        <button onClick={() => setMenu("nhansu")} className={menuClass("nhansu")}>
          Nhân sự
        </button>
        <button onClick={() => setMenu("boloc")} className={menuClass("boloc")}>
          Bộ lọc
        </button>
      </nav>

      {/* Nội dung bên phải */}
      <div className="flex-1 p-6">
        {menu === "nhansu" && <NhanSuLayout />}
        {menu === "phongban" && <h2 className="text-xl">Nội dung phòng ban</h2>}
        {menu === "vitri" && <h2 className="text-xl">Nội dung vị trí</h2>}
        {menu === "boloc" && <h2 className="text-xl">Nội dung bộ lọc</h2>}
      </div>
    </div>
  )
}

export default App
