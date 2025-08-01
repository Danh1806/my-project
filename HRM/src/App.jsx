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
      <div className="flex-1 p-0">
        {menu === "nhansu" && <NhanSuLayout />}
        {menu === "phongban" && <h2 className="text-xl">Nội dung phòng ban</h2>}
        {menu === "vitri" && <h2 className="text-xl">Nội dung vị trí</h2>}
        {menu === "boloc" && <h2 className="text-xl">Nội dung bộ lọc</h2>}
      </div>
      {/*nội dung setting*/}
      {/*thông tin*/}
     <div className="flex-3">
       <div class="mb-6">
      <h2 class="text-lg font-semibold">TEST BASE THÀNH</h2>
      <p class="text-sm text-gray-500">@thanhbase · aipencilclass@gmail.com</p>
    </div>
    {/*mục phụ*/}
    <div>
      <div class="text-xs uppercase text-gray-400 mb-2">Thông tin tài khoản</div>
      <ul class="space-y-2">
        <li class="flex items-center text-blue-600 font-semibold cursor-pointer">
          <span class="w-6 text-center">⚙️</span>
          <span>Tài khoản</span>
        </li>
        <li class="flex items-center cursor-pointer">
          <span class="w-6 text-center">✏️</span>
          <span>Chỉnh sửa</span>
        </li>
        <li class="flex items-center cursor-pointer">
          <span class="w-6 text-center">🌐</span>
          <span>Ngôn ngữ</span>
        </li>
        <li class="flex items-center cursor-pointer">
          <span class="w-6 text-center">❗</span>
          <span>Đổi mật khẩu</span>
        </li>
        <li class="flex items-center cursor-pointer">
          <span class="w-6 text-center">🎨</span>
          <span>Đổi màu hiển thị</span>
        </li>
        <li class="flex items-center cursor-pointer">
          <span class="w-6 text-center">⏰</span>
          <span>Lịch làm việc</span>
        </li>
        <li class="flex items-center cursor-pointer">
          <span class="w-6 text-center">🛡️</span>
          <span>Bảo mật hai lớp cá nhân</span>
        </li>
      </ul>
    </div>
    <div class="mt-6">
      <div class="text-xs uppercase text-gray-400 mb-2">Ứng dụng - Bảo mật</div>
    </div>
    <div class="mt-6">
      <div class="text-xs uppercase text-gray-400 mb-2">Tùy chỉnh nâng cao</div>
      <ul class="space-y-2">
        <li class="flex items-center cursor-pointer">
          <span class="w-6 text-center">⏰</span>
          <span>Lịch sử đăng nhập cá nhân</span>
        </li>
        <li class="flex items-center cursor-pointer">
          <span class="w-6 text-center">💻</span>
          <span>Quản lý thiết bị</span>
        </li>
        <li class="flex items-center cursor-pointer">
          <span class="w-6 text-center">✉️</span>
          <span>Tùy chỉnh email thông báo</span>
        </li>
        <li class="flex items-center cursor-pointer">
          <span class="w-6 text-center">⏰</span>
          <span>Chỉnh sửa múi giờ</span>
        </li>
        <li class="flex items-center cursor-pointer">
          <span class="w-6 text-center">🔗</span>
          <span>Ủy quyền tạm thời</span>
        </li>
      </ul>
    </div>
     </div>
    </div>
  )
}

export default App
