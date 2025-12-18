document.addEventListener("DOMContentLoaded", function () {
  const logoutLinks = document.querySelectorAll(".logout");

  logoutLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Xóa thông tin user đang đăng nhập (nếu có)
      try {
        localStorage.removeItem("currentUser");
      } catch (err) {
        console.warn("Không thể xóa currentUser khỏi localStorage:", err);
      }

      // Điều hướng về trang chủ
      window.location.href = "../index.html";
    });
  });
});


