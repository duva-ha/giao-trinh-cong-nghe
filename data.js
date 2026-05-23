const lessonData = {
    "k10b1": {
        title: "BÀI 1: CÔNG NGHỆ VÀ ĐỜI SỐNG",
        slides: [
            { h: "Khái niệm Công nghệ", p: "Công nghệ là giải pháp...", img: "url_anh.jpg" },
            { h: "Vai trò", p: "Cải thiện chất lượng cuộc sống..." }
        ]
    }
    "k12b15": {
        "title": "BÀI 15: ĐIỆN TRỞ, TỤ ĐIỆN VÀ CUỘN CẢM",
        "slides": [
            // --- Slide 1: Khái niệm chung ---
            {
                "h": "GIỚI THIỆU LINH KIỆN THỤ ĐỘNG",
                "p": "Điện trở, tụ điện và cuộn cảm là các linh kiện điện tử thụ động cơ bản nhất, xuất hiện trong hầu hết các mạch nguồn và mạch xử lý tín hiệu."
            }, // <-- Nhớ dấu phẩy ở đây để viết tiếp slide sau

            // --- Slide 2: Điện trở (Có hình ảnh) ---
            {
                "h": "1. ĐIỆN TRỞ (RESISTOR)",
                "img": "images/k12/b15_dientro.jpg", 
                "p": "Dùng để cản trở dòng điện, hạn dòng và phân chia điện áp trong mạch. Đơn vị đo là Ôm (Ω)."
            }, // <-- Tiếp tục dấu phẩy để qua slide kế tiếp

            // --- Slide 3: Tụ điện (Thuần chữ) ---
            {
                "h": "2. TỤ ĐIỆN (CAPACITOR)",
                "p": "Có khả năng tích lũy năng lượng điện trường, cho dòng điện xoay chiều (AC) đi qua và chặn dòng điện một chiều (DC). Đơn vị là Fara (F)."
            } // <-- Slide cuối cùng của bài này nên KHÔNG cần dấu phẩy ở đây
        ]
    },
};
