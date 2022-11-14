// mảng sản phẩm
const productInLocalStorage = localStorage.getItem("product");
let product;
if(productInLocalStorage != null) // kiểm tra xem localstore có mảng product chưa
{
  product = JSON.parse(localStorage.getItem("product"));
  // fix loi khong load dc product sau khi add items...
  //localStorage.clear;
}
else
{
  product = [
  {
    id: "1",
    type: "keyboard",
    name: "Bàn Phím Bluetooth Logitech K380 - Hàng Chính Hãng",
    price: "599000",
    description: "Logitech - Không dây Bluetooth",
    detail: `Bàn Phím Bluetooth Logitech K380 có thiết kế gọn nhẹ và độc đáo với các nút phím tròn mang nét cổ điển nhưng rất ấn tượng. Vì không có bàn phím số nên sản phẩm khá nhỏ gọn giúp bạn có thể dễ dàng mang theo bên mình và sử dụng bất cứ khi nào.`,
    img: "/assets/img/622f03e09e1dbaa5b3d96506236f5a84.png.webp",
  },
  {
    id: "2",
    type: "mouse",
    name: "Chuột Gaming Yindiao A5",
    description: "Bluetooth/Wireless,pin Sạc E-sports, Led RBG 7 màu - Chính Hãng",
    detail: ``,
    img: "/assets/img/ChuộtGamingYindiaoA5.webp",
    price: "269000",
  },
  {
    id: "3",
    type: "keyboard",
    name: "Bàn phím không dây Bluetooth Logitech MX Keys Mini - Hàng chính hãng",
    description: "Nhỏ gọn, Sạc USB-C, Phím tắt thông minh, Có bản cho Mac",
    detail: `• CÁC PHÍM THÔNG MINH PERFECT STROKE: Gõ trên các phím được tạo hình phù hợp với ngón tay bạn, cùng 4 phím tắt thông minh: chuyển đổi giọng nói thành văn bản, Tắt tiếng/Hủy tắt tiếng Mic và các phím Emoji và cắt nhanh màn hình.<br>
    • KÍCH CỠ MINI, HIỆU SUẤT MẠNH MẼ: Bố cục được thiết kế để dễ dàng gõ thật chính xác, với hình dáng tối giản và công thái học, có thể dễ dàng mang theo đi đến bất cứ nơi nào để cùng bạn làm việc.<br>
    • CHIẾU SÁNG NỀN THÔNG MINH: Các phím được chiếu sáng nền sẽ sáng lên khi tay bạn tiến đến gần và tự động điều chỉnh để phù hợp với điều kiện ánh sáng thay đổi từ môi trường.<br>
    • ĐA THIẾT BỊ, TƯƠNG THÍCH ĐA HỆ ĐIỀU HÀNH: Ghép cặp (Pair) bàn phím nhỏ gọn MX Keys Mini với tối đa 3 thiết bị qua tính năng Bluetooth tiết kiệm năng lượng và với nút Easy-switch trên hầu hết các hệ điều hành<br>
    • KẾT NỐI NHIỀU MÁY TÍNH CÙNG FLOW: Kết hợp MX Keys Mini với MX Master 3 hoặc MX Anywhere 3 và gõ trên nhiều PC hoặc máy tính xách tay trong một luồng công việc trôi chảy.<br>
    • PIN SẠC USB-C: Bàn phím Bluetooth MX Keys Mini dùng được 10 ngày trong một lần sạc đầy hoặc lên tới 5 tháng khi tắt chức năng chiếu sáng nền.<br>`,
    img: "/assets/img/fa3b402ea600bb5763a6655ec50bc74b.png.webp",
    price: "699000",
  },
  {
    id: "4",
    type: "mousepad",
    name: "lót chuột pro max",
    description: "Mouse pad for wibu ",
    detail: ``,
    img: "/assets/img/mousepads.png",
    price: "169000",
  },
  {
    id: "5",
    type: "speaker",
    name: "loa xập xình",
    description: " loa cho dan choi",
    detail: ``,
    img: "/assets/img/speaker.png",
    price: "569000",
  },
  {
    id: "6",
    type: "mousepad",
    name: "lót chuột siêu vjp pro",
    description: "lot chuot cho dan vjp",
    detail: ``,
    img: "/assets/img/mousepads.png",
    price: "569000",
  },
  {
    id: "7",
    type: "headphone",
    name: "tai nghe vjp pro cho dân quẩy",
    description: "tai nghe hiphop",
    detail: ``,
    img: "/assets/img/headphone.png",
    price: "569000",
  },
  {
    id: "8",
    type: "headphone",
    name: "tai nghe cho người điếc",
    description: "tai nghe magaming",
    detail: ``,
    img: "/assets/img/headphone.png",
    price: "569000",
  },
  {
    id: "9",
    type: "keyboard",
    name: "Bàn Phím chơi Game Keyboard Bosston G7 - Hàng Nhập Khẩu",
    price: "77390",
    description: "Keyboard for gamer",
    detail: `Bàn phím nghiêng 8 độ nhằm giảm thiểu tối đa tình trạng mỏi tay khi đánh máy <br>
    Các phím được khắc laser chống bay, kết hợp 8 nút xanh thời trang<br>
    Điều chỉnh độ cao tùy ý theo sở thích riêng của bạn<br>
    Thời gian đáp ứng hơn 10 triệu lần<br>
    Plug and Play<br>
    `,
    img: "/assets/img/01a6abe31c5de71032588632db2e0d69.jpg.webp",
  },
  {
    id: "10",
    type: "mouse",
    name: "Chuột gaming không dây DARE-U RGB",
    description: "Độ trễ thấp, phạm vi hoạt động hiệu quả 10m không vật cản",
    detail: ``,
    img: "/assets/img/Chuột gaming không dây DARE-U RGB.webp",
    price: "719000",
  },
  {
    id: "11",
    type: "keyboard",
    name: "Bàn phím cơ gaming mini AK33 cho máy tính",
    description: "Keyboard for gamer",
    detail: `
    - Bàn Phím Cơ mini Ajazz AK33 Gọn gàng , đơn giản và tinh tế <br>
    - Switch 82 Phím chống ồn , gõ êm , nhanh và nhạy hơn<br>
    - Led trắng đơn sắc , hỗ trợ nhiều hiệu ứng , hỗ trợ gõ chính xác trong điều kiện ánh sáng yếu<br>
    - Chip ARM 32 bit cho hiệu ứng led mượt mà<br>
    - Thiết kế Công thái học phù hợp cho tất cả nhu cầu khách hàng , đặc biệt là Gamer E-sports<br>`,
    img: "/assets/img/6bc41690ca3f941a664e1a1524a21977.jpg.webp",
    price: "659000",
  },
  {
    id: "12",
    type: "mousepad",
    name: "lót chuột pro max",
    description: "Mouse pad for wibu ",
    detail: ``,
    img: "/assets/img/mousepads.png",
    price: "169000",
  },
  {
    id: "13",
    type: "speaker",
    name: "loa xập xình",
    description: " loa cho dan choi",
    detail: ``,
    img: "/assets/img/speaker.png",
    price: "569000",
  },
  {
    id: "14",
    type: "mousepad",
    name: "lót chuột siêu vjp pro",
    description: "lot chuot cho dan vjp",
    detail: ``,
    img: "/assets/img/mousepads.png",
    price: "569000",
  },
  {
    id: "15",
    type: "headphone",
    name: "tai nghe vjp pro cho dân quẩy",
    description: "tai nghe hiphop",
    detail: ``,
    img: "/assets/img/headphone.png",
    price: "569000",
  },
  {
    id: "16",
    type: "headphone",
    name: "tai nghe cho người điếc",
    description: "tai nghe magaming",
    detail: ``,
    img: "/assets/img/headphone.png",
    price: "569000",
  },
  {
    id: "17",
    type: "keyboard",
    name: "Bàn Phím Cơ không dây mini Đa kết nối RF84 White Gaming cho máy tính",
    description: "Keyboard for gamer",
    detail: `
    - Hệ điều hành hỗ trợ : Windows . Android . Macos . ios <br>
    - Thiết bị hỗ : Máy tính , Laptop , Điện thoại , Máy tính bảng<br>
    - Đa Kết nối : Bluetooth 5.0 - USB 2.4G - cáp USB . Có thể tháo rời , thay thế dễ dàng<br>
    - Khoảng cách kết nối không dây lên đến 10m<br>
    - Kết nối cùng lúc lên đến 3 thiết bị , chuyển đổi nhanh thiết bị bằng phím FN+...<br>
    - Pin sạc 3000 mah , cho thời gian sử dụng rất dài , Cổng sạc Type C<br>
    - Bàn Phím có Chế độ tiết kiêm pin thông minh khi không sử dụng trong 2-3 phút<br>`,
    img: "/assets/img/70979306a536cfd53f1ca349577fd719.jpg.webp",
    price: "870000",
  },
  {
    id: "18",
    type: "mouse",
    name: "Chuột gaming Newmen G11 ",
    description: "Bi trọng lực tích hợp giúp chuột định vị chính xác trong game",
    detail: ``,
    img: "/assets/img/Chuột gaming Newmen G11.webp",
    price: "179000",
  },
  {
    id: "19",
    type: "keyboard",
    name: "Bàn Phím Cơ Máy Tính XSmart K2 Pro Màu Xanh Led RGB",
    description: "Keyboard for gamer",
    detail: `
    - 4 màu sắc thời trang và trẻ trung, tuyệt đẹp và Charming. 87 phím tiêu chuẩn, ký tự và ánh sáng mát mẻ giữa bảng. <br>
    - Bàn phím cơ sử dụng Blue switch. Cho âm thanh gõ giống như Đoạn Văn hay cảm giác cơ học, loại thân công tắc thoải mái và dễ sử dụng hơn. Âm thanh của nó sắc nét và có nhịp gõ mạnh mẽ. Nó chủ yếu phù hợp để đánh máy trong các trò chơi.<br>
    - Bàn phím nổi sáu hàng thứ tư phù hợp với quỹ đạo chuyển động của ngón tay, gõ phím thoải mái và không dễ bị mỏi.<br>
    - Cắm và chạy, đèn nền năng động và rực rỡ, các nhân vật và tấm giữa phát sáng để giải trí ban đêm, nhiều đèn Charming hơn.<br>
    - NHỰA ABS vật liệu nhựa nhiệt dẻo, tinh tế Hai-màu sắc, ánh sáng-Truyền thiết kế, cảm giác thoải mái, không dễ dàng để được nhờn, và để lại dấu vân tay.<br>
    - Bố trí 87 phím, nắp phím nổi hình chữ U, gần ngón tay hoàn hảo, cảm giác mượt mà cho trải nghiệm văn phòng.<br>
    - Thiết kế chống nước và chống bụi, với nhiều lỗ thoát nước ở phía dưới, có thể đẩy chất lỏng và trà càng sớm càng tốt và chăm sóc bàn phím của bạn.<br>
    `,
    img: "/assets/img/a0869744ebcc1b4b546e12468832f8af.jpg",
    price: "383000",
  },
  {
    id: "20",
    type: "mousepad",
    name: "lót chuột pro max",
    description: "Mouse pad for wibu ",
    detail: ``,
    img: "/assets/img/mousepads.png",
    price: "169000",
  },
  {
    id: "21",
    type: "speaker",
    name: "loa xập xình",
    description: " loa cho dan choi",
    detail: ``,
    img: "/assets/img/speaker.png",
    price: "569000",
  },
  {
    id: "22",
    type: "mousepad",
    name: "lót chuột siêu vjp pro",
    description: "lot chuot cho dan vjp",
    detail: ``,
    img: "/assets/img/mousepads.png",
    price: "569000",
  },
  {
    id: "23",
    type: "headphone",
    name: "tai nghe vjp pro cho dân quẩy",
    description: "tai nghe hiphop",
    detail: ``,
    img: "/assets/img/headphone.png",
    price: "569000",
  },
  {
    id: "24",
    type: "headphone",
    name: "tai nghe cho người điếc",
    description: "tai nghe magaming",
    detail: ``,
    img: "/assets/img/headphone.png",
    price: "569000",
  },
  {
    id: "25",
    type: "keyboard",
    name: "Bàn phím giả cơ FREE WOLF K15 chơi game - hàng nhập khẩu",
    price: "144000",
    description: "Keyboard for gamer",
    detail: `
    Chiếc bàn phím giả cơ FREE WOLF K15 được làm từ vật liệu ABS bền bỉ cùng phím cắt Lazer nên có độ bền cực cao, thêm chế độ bán cơ nên khi gõ phím tạo cảm giác khá "phê" không khác gì trên chiếc bàn phím cơ đắt tiền thông thường. <br>
    Hơn thế nữa trên chiếc bàn phím bán cơ bàn tay được thiết kế một tay với phần bố trí vị trí phù hợp cho sự di chuyển linh hoạt ở các ngón tay nên tạo điều kiện thuận tiện cho bạn chơi thoải mái với các game hot nhất thị trường.<br>
    Hơn thế nữa trên chiếc bàn phím bán cơ FREE WOLF K15 còn trang bị thêm LED background giúp làm nổi bật hệ thống bàn phím khi chơi trong điều kiện thiếu ánh sáng và tốt cho đôi mắt của người chơi trong thời gian lâu dài.<br>
    `,
    img: "/assets/img/keyboard.jpg",
  },
  {
    id: "26",
    type: "mouse",
    name: "Chuột gaming Logitech G502 HERO",
    description: "Cảm biến: HERO ,độ phân giải: 16000 DPI",
    detail: ``,
    img: "/assets/img/Chuột gaming Logitech G502 HERO.webp",
    price: "999000",
  },
  {
    id: "27",
    type: "keyboard",
    name: "Bàn Phím Có Dây ROBOT RK20 Bàn Phím Máy Tính Văn Phòng - Hàng Chính Hãng",
    description: "Keyboard for gamer",
    detail: `
    Loại sản phẩm: Bàn phím có dây văn phòng <br>
    - Kích thước sản phẩm: 445,1 (L) x166 ((W) x26,5 (H) mm<br>
    - Trọng lượng sản phẩm: 498g ± 5%<br>
    - Số phím: 104: phím<br>
    - Giao diện dây: USB<br>
    - Chiều dài dây: 1.5M<br>`,
    img: "/assets/img/keyboard.jpg",
    price: "179000",
  },
  {
    id: "28",
    type: "mousepad",
    name: "lót chuột pro max",
    description: "Mouse pad for wibu ",
    detail: ``,
    img: "/assets/img/mousepads.png",
    price: "169000",
  },
  {
    id: "29",
    type: "speaker",
    name: "loa xập xình",
    description: " loa cho dan choi",
    detail: ``,
    img: "/assets/img/speaker.png",
    price: "569000",
  },
  {
    id: "30",
    type: "mousepad",
    name: "lót chuột siêu vjp pro",
    description: "lot chuot cho dan vjp",
    detail: ``,
    img: "/assets/img/mousepads.png",
    price: "569000",
  },
  {
    id: "31",
    type: "headphone",
    name: "tai nghe vjp pro cho dân quẩy",
    description: "tai nghe hiphop",
    detail: ``,
    img: "/assets/img/headphone.png",
    price: "569000",
  },
  {
    id: "32",
    type: "headphone",
    name: "tai nghe cho người điếc",
    description: "tai nghe magaming",
    detail: ``,
    img: "/assets/img/headphone.png",
    price: "569000",
  },
  {
    id: "33",
    type: "keyboard",
    name: "Bàn phím số không dây Mini Number Keyboard AZONE",
    description: "Keyboard for gamer",
    detail: `
    TÍNH NĂNG BÀN PHÍM SỐ MINI NUMBER KEYBOARD <br>
    - Mini Number Keyboard thiết kế nhỏ gọn và tinh tế.<br>
    - Bàn phím số cho laptop giúp xử lý những con số nhanh gọn và chuyên nghiệp.<br>
    - Bàn phím số rời với 18 phím chức năng tiện dụng.<br>
    - Cắm và sử dụng, không cần cài đặt driver.<br>
    - Bàn phím số không dây sử dụng kết nối 2.4G mạnh mẽ và ổn định.<br>
    - Sử dụng pin AAA 1.5V thông dụng.<br>
    - Tương thích với Windows/Linux/Mac.<br>
    `,
    img: "/assets/img/9a2a107f5df45b97a9145d9ffcfe062a.jpg.webp",
    price: "101999",
  },
  
  
];
localStorage.setItem("product",JSON.stringify(product));
}
