//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Bó hoa Len 4 loại tone hồng',
            img: 'assets/img/products/hoalen1.jpg',
            category: 'HOA LEN',
            price: 230000,
            desc: 'Bó hoa len 4 loại tone hồng gồm hoa hồng, hoa tulip, hoa linh đan, hoa lưu ly'
        },
        {
            id: 2,
            status: 1, 
            title: 'Bó hoa tulip len tone tím',
            img: 'assets/img/products/hoalen2.jpg',
            category: 'HOA LEN',
            price: 250000,
            desc: 'Bó hoa tulip len 12 bông tone tím siêu xinh'
        },
        {
            id: 3,
            status: 1, 
            title: 'Bó hoa tulip len tone hồng trắng',
            img: 'assets/img/products/hoalen3.jpg',
            category: 'HOA LEN',
            price: 250000,
            desc: 'Bó hoa tulip len 12 bông tone hồng trắng'
        },
        {
            id: 4,
            status: 1, title: 'Bó hoa len 4 loại tone xanh',
            img: 'assets/img/products/hoalen4.jpg',
            category: 'HOA LEN',
            price: 699000,
            desc: 'Bó hoa tulip len tone xanh gồm hoa hồng, hoa tulip, hoa linh đan, hoa lưu ly '
        },
        {
            id: 5,
            status: 1, 
            title: 'Hoa len hồng xoán',
            img: 'assets/img/products/hoalen5.jpg',
            category: 'HOA LEN',
            price: 220000,
            desc: 'Bó hoa len hồng xoắn buộc nơ siêu xinh. Mẫu hoa cưới.'
        },
        {
            d: 6,
            status: 1, 
            title: 'Bó hoa len hồng cam',
            img: 'assets/img/products/hoalen6.jpg',
            category: 'HOA LEN',
            price: 220000,
            desc: 'Bó hoa len xoắn hồng cam.'
        },
        {
             id: 7,
            status: 1, 
            title: 'Tulip tím',
            category: 'HOA LEN',
            img: 'assets/img/products/hoalen7.jpg',
            price: 260000,
            desc: 'Bó hoa tulip len tone tím mix hoa bi'
        },
        {
           id: 8,
            status: 1, 
            title: 'Purple Lily',
            img: 'assets/img/products/hoalen8.jpg,
            category: 'HOA LEN',
            price: 260000,
            desc: 'Bó hoa ly mix cùng hoa hồng và hoa lưu ly tone tím chưa bao giờ hết hot'
        },
        {
            id: 9,
            status: 1, 
            title: 'Hoa len cẩm chướng tone hồng',
            category: "HOA LEN",
            img: 'assets/img/products/hoalen9.jpg',
            price: 245000,
            desc: 'Hoa len cẩm chướng mix hoa lưu ly tone hồng mới lạ'
        },
        {
            id: 10,
            status: 1, 
            title: 'Hoa len tốt nghiệp',
            category: "HOA LEN",
            img: 'assets/img/products/hoalen10.jpg',
            price: 250000,
            desc: 'Mùa tốt nghiệp tới không thể thiếu những bó hoa hướng dương siêu xinh'
        },
        {
            id: 11,
            status: 1, 
            title: 'Green Tulip',
            category: 'HOA LEN',
            img: 'assets/img/products/hoalen11.jpg',
            price: 180000,
            desc: 'Bó tulip len tone xanh mix cùng ếch xanh siêu đáng yêu'
        },
        {
            id: 12,
            status: 1, 
            title: 'Hộp hoa linh đan',
            img: 'assets/img/products/hoalen12.jpg',
            category: 'HOA LEN',
            price: 320000,
            desc: 'Hoa linh đan đóng hộp trong suốt siêu xinh làm quà sinh nhật không thể hợp hơn'
        },
        { 
            id: 13,
            status: 1, 
            title: 'Tulip mix Ly Trendy',
            img: 'assets/img/products/hoakem1.jpg',
            category: 'HOA KẼM NHUNG',
            price: 160000,
            desc: 'Bó hoa mix các loại hoa Tulip, hoa Ly, hoa Cúc với tone màu chủ đạo là hồng phấn chắc chắn sẽ làm xiêu lòng các bạn nữ'
        },
         {
            id: 14,
            status: 1, 
            title: 'Hướng Dương ngược nắng',
            img: 'assets/img/products/hoakem2.jpg',
            category: 'HOA KẼM NHUNG',
            price: 180000,
            desc: 'Một bó hướng dương chắc chắn sẽ là kỉ niệm đẹp không thể quên ngày tốt nghiệp, có lẽ bởi vậy mà nó được ưa chuộng nhất là vào dịp hè.'
        },
        {
            id: 15,
            status: 1, 
            title: 'Anh Đào nở rộ bốn mùa',
            img: 'assets/img/products/hoakem3.jpg',
            category: 'HOA KẼM NHUNG',
            price: 200000,
            desc: 'Vẫn lấy hồng phấn làm màu chủ đạo cho bó hoa bên cạnh đó tô điểm bằng những bông hoa anh đào nhỏ xinh mà bắt mắt đủ đốn tim những thiếu nữ.'
        },
        {
            id: 16,
            status: 1, 
            title: 'Sắc Đỏ Quý Phái',
            img: 'assets/img/products/hoakem4.jpg',
            category: 'HOA KẼM NHUNG',
            price: 155000,
            desc: 'Mỗi bông hoa là một câu chuyện. Sắc màu của yêu thương, gửi gắm tình cảm trọn vẹn.'
        },
        {
            id: 17,
            status: 1, 
            title: 'Gương Tulip Rực Rỡ',
            img: 'assets/img/products/hoakem5.jpg',
            category: 'HOA KẼM NHUNG',
            price: 100000,
            desc: 'Cần gì phải nói nhiều, chỉ cần một bó hoa đẹp là bạn đã thể hiện được tình cảm của mình rồi!'
        },
        {
            id: 18,
            status: 1, 
            title: 'Tulip đỏ chứng tỏ rất xinh',
            img: 'assets/img/products/hoakem6.jpg',
            category: 'HOA KẼM NHUNG',
            price: 90000,
            desc: 'Màu đỏ không chỉ phù hợp với hoa hồng mà còn phù hợp với cả tulip nữa, bạn nam tặng bạn nữ chắc chắn phù hợp vào mọi dịp lễ.'
        },
        {
            id: 19,
            status: 1, 
            title: 'Hoàng Hôn Nhiệt Đới',
            img: 'assets/img/products/hoakem7.jpg',
            category: 'HOA KẼM NHUNG',
            price: 80000,
            desc: 'Với cách mix màu cực kì nhiệt đới cộng thêm giấy bó với tone màu trầm làm nổi bật nội dung chính là những bông hoa màu sắc rực rỡ'
        },
        {
            id: 20,
            status: 1, 
            title: 'Ánh Dương Tím',
            img: 'assets/img/products/hoakem8.jpg',
            category: 'HOA KẼM NHUNG',
            price: 70000,
            desc: 'Nhận custom bó hoa theo màu sắc yêu cầu của khách hàng, tuy là những bó hoa đơn sắc nhưng nhan sắc chắc chắn không thua những bó hoa sặc sỡ đầy màu sắc.'
        },
        {
            id: 21,
            status: 1, 
            title: 'Tím Thủy Chung',
            category: 'HOA KẼM NHUNG',
            img: 'assets/img/products/hoakem9.jpg',
            price: 99000,
            desc: 'Nhiều bạn ưa thích tone màu chủ đạo tím chắc chắn không thể bỏ qua. Màu tím lavender chủ đạo, điểm xuyết thêm những cánh hoa tulip nhỏ nhắn, bó hoa này mang lại cảm giác bình yên và thơ mộng.'
        },
        {
            id: 22,
            status: 1, 
            title: 'Bông Cúc Tím',
            category: 'HOA KẼM NHUNG',
            img: 'assets/img/products/hoakem10.jpg',
            price: 140000,
            desc: 'Với những bông cúc tím đan xen với lá xanh khiến ta mường tượng như được đắm chìm vào một không gian mở nơi dẫn đến khu vườn của những bông cúc tuy nhỏ mà xinh.'
        },
        {
            id: 23,
            status: 1, 
            title: 'Hello Teddy',
            category: 'HOA KẼM NHUNG',
            img: 'assets/img/products/hoakem11.jpg',
            price: 105000,
            desc: 'Kết hợp giữa chú gấu Teddy làm tâm điểm cùng những bông cúc đủ màu, là điều thu hút những tâm hồn yêu cái đẹp của thiếu nữ.'
        },
        {
            id: 24,
            status: 1, 
            title: 'Tulip Ánh Sao',
            img: 'assets/img/products/hoakem12.jpg',
            category: 'Món mặn',
            price: 210000,
            desc: 'Với tulip hồng làm chủ đạo, bó hoa được tô điểm bởi những ngọn đèn lấp lánh, tạo nên vẻ đẹp rực rỡ và lung linh trong đêm. '
        },
        {
            id: 25,
            status: 1, 
            title: 'Bó hồng mix 2 màu trắng hồng tặng người yêu bằng giấy nhún',
            category: 'HOA GIẤY',
            img: 'assets/img/products/hoagiay12.png',
            price: 300000,
            desc: 'Một bó hoa hồng mix hai màu trắng và hồng, được làm từ giấy nhún, tặng người yêu. Mỗi bông hoa được chế tác tinh xảo với cánh hoa mềm mại, màu trắng tinh khôi hòa quyện cùng màu hồng dịu dàng. Bó hoa thể hiện tình cảm chân thành và lãng mạn, mang thông điệp về sự thuần khiết và tình yêu ngọt ngào. Đây là món quà hoàn hảo để gửi gắm những cảm xúc đặc biệt đến người yêu thương.'
        },
        {
            id: 26,
            status: 1, 
            title: 'Hoa tulip bằng giấy nhún hồng',
            category: 'HOA GIẤY',
            img: 'assets/img/products/hoagiay1.jpg',
            price: 45000,
            desc: 'Một bông hoa tulip làm bằng giấy nhún màu hồng mềm mại, cánh hoa xếp lớp tạo nên vẻ đẹp tinh tế và nhẹ nhàng.'
        },

        {
            id: 27,
            status: 1, 
            title: 'Bó tulip bằng giấy màu nghệ thuật origami',
            category: 'HOA GIẤY',
            img: 'assets/img/products/hoagiay2.jpg',
            price: 500000,
            desc: 'Một bó hoa tulip làm bằng giấy nghệ thuật origami, với những cánh hoa sắc sảo và tinh tế, từng bông hoa được gấp tỉ mỉ từ giấy màu tươi sáng, tạo nên một tác phẩm nghệ thuật sống động và đầy màu sắc.'
        },

        {
            id: 28,
            status: 1, 
            title: 'Bó cúc trắng bằng giấy màu nghệ thuật origami',
            category: 'HOA GIẤY',
            img: 'assets/img/products/hoagiay3.jpg',
            price: 500000,
            desc: 'Một bó hoa cúc trắng được tạo nên từ nghệ thuật origami, từng cánh hoa trắng tinh khôi được gấp tỉ mỉ và chính xác, mang đến vẻ đẹp thanh thoát và trang nhã. Những bông hoa cúc bằng giấy này toát lên sự tinh tế và tươi mới, là biểu tượng của sự thuần khiết và thanh lịch.'
        },

        {
            id: 29,
            status: 1, 
            title: 'Bó tulip bằng giấy nhún hồng phớt',
            category: 'HOA GIẤY',
            img: 'assets/img/products/hoagiay4.jpg',
            price: 420000,
            desc: 'Bó hoa tulip hồng phớt bằng giấy nhún là món quà tinh tế và đầy ý nghĩa dành cho những người phụ nữ yêu thích sự nhẹ nhàng và lãng mạn.'
        },

        {
            id: 30,
            status: 1, 
            title: 'Bó hồng vàng bằng giấy nhún',
            category: 'HOA GIẤY',
            img: 'assets/img/products/'hoagiay5.jpg,
            price: 500000,
            desc: 'Bó hoa hồng vàng bằng giấy nhún là món quà sang trọng và đẳng cấp, tượng trưng cho sự giàu sang, phú quý và may mắn. Từng bông hoa được làm thủ công tỉ mỉ từ giấy nhún cao cấp, mô phỏng sống động hình ảnh hoa hồng thật với cánh hoa mềm mại, màu sắc rực rỡ và hương thơm tinh tế.'
        },

        {
            id: 31,
            status: 1, 
            title: 'Bó hồng sặc sỡ mix 4 màu bằng giấy nhún',
            category: 'HOA GIẤY',
            img: 'assets/img/products/hoagiay6.jpg',
            price: 450000,
            desc: 'Bó hoa hồng sặc sỡ mix 4 màu bằng giấy nhún là món quà độc đáo và ấn tượng, mang đến niềm vui và hạnh phúc cho người nhận. Bó hoa được tạo nên từ sự kết hợp hài hòa của 4 màu sắc rực rỡ: đỏ, xanh, vàng và hồng, tượng trưng cho tình yêu nồng nàn, sự nhiệt huyết, niềm vui và sự may mắn.'
        },

        {
            id: 32,
            status: 1, 
            title: 'Bó hồng đỏ bằng giấy nhún',
            category: 'HOA GIẤY',
            img: 'assets/img/products/hoagiay7.jpg',
            price: 600000,
            desc: 'Bó hoa hồng đỏ bằng giấy nhún là món quà ý nghĩa và sang trọng, tượng trưng cho tình yêu nồng nàn, sự lãng mạn và lòng chung thủy. Từng bông hoa được làm thủ công tỉ mỉ từ giấy nhún cao cấp, mô phỏng sống động hình ảnh hoa hồng thật với cánh hoa mềm mại, màu đỏ rực rỡ.'
        },

        {
            id: 33,
            status: 1, 
            title: 'Bó hồng mix 3 màu bằng giấy nhún',
            category: 'HOA GIẤY',
            img: 'assets/img/products/hoagiay8.png',
            price: 600000,
            desc: 'Bó hoa hồng mix 3 màu bằng giấy nhún là món quà tinh tế và đầy ý nghĩa, mang đến sự kết hợp hoàn hảo giữa sắc màu rực rỡ và cảm xúc thăng hoa. Từng bông hoa được làm thủ công tỉ mỉ từ giấy nhún cao cấp, mô phỏng sống động hình ảnh hoa hồng thật với cánh hoa mềm mại, màu sắc đa dạng.'
        },

        {
            id: 34,
            status: 1, 
            title: 'Bó hồng đỏ bằng giấy nhún giấy bọc đen sang trọng',
            category: 'HOA GIẤY',
            img: 'assets/img/products/hoagiay9.png',
            price: 290000,
            desc: 'Bó hoa hồng đỏ bằng giấy nhún, giấy bọc đen sang trọng là sự kết hợp hoàn hảo giữa vẻ đẹp kiêu sa của hoa hồng đỏ và sự bí ẩn, sang trọng của giấy bọc đen. Món quà này không chỉ thu hút ánh nhìn bởi vẻ ngoài độc đáo mà còn ẩn chứa thông điệp đầy ý nghĩa về tình yêu nồng nàn.'
        },

        {
            id: 35,
            status: 1, 
            title: 'Bó hồng mix 3 màu đỏ hồng trắng bằng giấy nhún',
            category: 'HOA GIẤY',
            img: 'assets/img/products/hoagiay10.png',
            price: 300000,
            desc: 'Một bó hoa hồng được làm từ giấy nhún, kết hợp ba màu sắc rực rỡ: đỏ, hồng và trắng. Mỗi bông hoa được chế tác tỉ mỉ với các cánh hoa mềm mại, tạo nên sự hài hòa giữa màu sắc và kết cấu. Bó hoa không chỉ đẹp mắt mà còn toát lên vẻ lãng mạn và tinh tế, là món quà hoàn hảo để biểu đạt tình cảm và sự quan tâm.'
        },

        {
            id: 36,
            status: 1, 
            title: 'Bó hồng vàng sang trọng bằng giấy nhún',
            category: 'HOA GIẤY',
            img: 'assets/img/products/hoagiay11.png',
            price: 280000,
            desc: 'Một bó hoa hồng vàng sang trọng, được chế tác tỉ mỉ từ giấy nhún. Mỗi cánh hoa vàng rực rỡ được tạo hình mềm mại và tự nhiên, tạo nên vẻ đẹp lộng lẫy và quyến rũ. Bó hoa không chỉ mang đến cảm giác ấm áp và tươi sáng, mà còn toát lên sự quý phái và đẳng cấp, là món quà hoàn hảo cho những dịp đặc biệt và trang trọng.'
        },

        {
            id: 37,
            status: 1, 
            title: 'Vườn Cổ Tích',
            category: 'HOA ĐẤT SÉT',
            img: 'assets/img/products/hoadatset1.jpg',
            price: 240000,
            desc: 'Bó hoa đất sét với màu tím chủ đạo mang đến cảm giác như lạc vào khu vườn cổ tích, với nhiều loại hoa rực rỡ và các động vật, thực vật dễ thương, tạo nên một khung cảnh huyền ảo.'
        },
        {
            id: 38,
            status: 1, 
            title: 'Ngày Nhà Giáo',
            category: 'HOA ĐẤT SÉT',
            img: 'assets/img/products/hoadatset2.jpg',
            price: 180000,
            desc: 'Một bó hoa bằng đất sét với tuổi đời cao chắc chắn sẽ thích hợp để thầy cô trưng bày trong góc làm việc của mình, với tone màu chủ đạo tím cùng hình ảnh cô giáo ở giữa chính là thông điệp cô là tâm điểm trao cho học sinh nhiều hành trang quan trọng.'
        },
        
        {
            id: 39,
            status: 1, 
            title: 'Vũ Điệu Muông Thú',
            category: 'HOA ĐẤT SÉT',
            img: 'assets/img/products/hoadatset3.jpg',
            price: 220000,
            desc: 'Với màu sắc chủ đạo tím mộng mơ, bó hoa này là một bữa tiệc sắc màu tím mix vàng với nhiều loài hoa và động vật nhảy múa, tạo nên một không gian vui tươi và đầy sức sống'
        },

        {
            id: 40,
            status: 1, 
            title: 'Giai Điệu Mùa Xuân',
            category: 'HOA ĐẤT SÉT',
            img: 'assets/img/products/hoadatset4.jpg',
            price: 240000,
            desc: 'Bó hoa đất sét với màu sắc chủ đạo là xanh dương khiến ta thấy tràn ngập sắc hoa mùa xuân và những bông hoa vô tri, mang đến một không gian tươi mới và tràn đầy sức sống.'
        },

        {
            id: 41,
            status: 1, 
            title: 'Khu Rừng Nhiệt Đới',
            category: 'HOA ĐẤT SÉT',
            img: 'assets/img/products/hoadatset5.jpg',
            price: 28000,
            desc: 'Bó hoa đất sét với tone màu cam sặc sỡ, các loại hoa và động vật kỳ lạ, mang lại vẻ đẹp huyền ảo và đầy bí ẩn, như một khu vườn trong mơ'
        },
        {
            id: 42,
            status: 1, 
            title: 'PEPPA PIG',
            category: "HOA ĐẤT SÉT",
            img: 'assets/img/products/hoadatset6.jpg',
            price: 29000,
            desc: 'Bó hoa có sự kết hợp độc đáo giữa sắc hồng ngọt ngào của hoa cúc và vẻ ngộ nghĩnh của những chú heo tạo nên một món quà tuyệt vời, mang lại niềm vui và nụ cười cho bất kỳ ai nhận được.',
        },
        {
            id: 43,
            status: 1, 
            title: 'Người Ngoài Hành Tinh',
            category: "HOA ĐẤT SÉT",
            img: 'assets/img/products/hoadatset7.jpg',
            price: 35000,
            desc: 'Sự kết hợp độc đáo giữa hoa và nhân vật đặc biệt trong trí tưởng tượng mang lại vẻ đẹp mới lạ và thu hút, chắc chắn sẽ khiến ai nhìn cũng phải thích thú và tò mò.',
        },
        {
            id: 44,
            status: 1, 
            title: 'Heo Đi Học',
            category: "HOA ĐẤT SÉT",
            img: 'assets/img/products/hoadatset8.jpg',
            price: 35000,
            desc: 'Hình ảnh chú heo đội nón cùng bông hoa cúc nhỏ xinh gợi ta tưởng tượng heo đi học trên cánh đồng đầy hoa cúc.',
        },
        {
            id: 45,
            status: 1, 
            title: 'Rừng Xanh Kỳ Bí',
            category: "HOA ĐẤT SÉT",
            img: 'assets/img/products/hoadatset9.jpg',
            price: 90000,
            desc: 'Một bó hoa đất sét mang vẻ đẹp kỳ bí của rừng xanh, với nhiều loài hoa và động vật quen thuộc mà lại lạ mắt, tạo nên một không gian đầy sự dễ thương.',
        },
        {
            id: 46,
            status: 1, 
            title: 'Vũ Điệu Muôn Thú',
            category: "HOA ĐẤT SÉT",
            img: 'assets/img/products/hoadatset10.jpg',
            price: 150000,
            desc: 'Bó hoa đất sét này kết hợp sắc xanh dương rực rỡ cùng những động vật và hoa tươi thắm. Những chú chim, chuột và những bông hoa tạo nên một không gian sinh động và tươi mới.',
        },
        {
            id: 47,
            status: 1, 
            title: 'Cam Không Ham Không Được',
            category: "HOA ĐẤT SÉT",
            img: 'assets/img/products/hoadatset11.jpg',
            price: 1450000,
            desc: 'Những đóa cúc và tulip tươi thắm cùng chú sư tử, bao quanh đám mây mềm mại, tạo nên một bức tranh sống động.',
        },
        {
            id: 48,
            status: 1, 
            title: 'Thỏ Ăn Cỏ',
            category: "HOA ĐẤT SÉT",
            img: 'assets/img/products/hoadatset12.jpg',
            price: 35000,
            desc: 'Đơn giản là thỏ và thỏ thích ăn cỏ.',
        },
        {
            id: 49,
            status: 1, 
            title: 'Hoa sáp hộp mica',
            category: "HOA SÁP",
            img: 'assets/img/products/hoasap1.jpg',
            price: 400000,
            desc: 'Hoa sáp cao cấp cắm trong hộp mica trong suốt là một sự kết hợp hoàn hảo.',
        },
        {
            id: 50,
            status: 1, 
            title: 'Bear Rose',
            category: "HOA SÁP",
            img: 'assets/img/products/hoasap2.jpg',
            price: 390000,
            desc: 'Hoa hồng sáp thơm hình chú gấu trong hộp trong suốt là món quà vừa xinh xắn, vừa sang trọng, ý nghĩa để gửi gắm yêu thương tới người nhận',
        },
        {
            id: 51,
            status: 1, 
            title: 'Brown Rose',
            category: "HOA SÁP",
            img: 'assets/img/products/hoasap3.jpg',
            price: 295000,
            desc: 'Mix hoa sáp màu nâu các loại: hoa hoofng cánh 5 lớp, hoa ecuador vĩnh cửu...',
        },
        {
            id: 52,
            status: 1, 
            title: 'Bó 11 bông sáp hồng nhạt',
            category: "HOA SÁP",
            img: 'assets/img/products/hoasap4.jpg',
            price: 24000,
            desc: 'Bó hoa sáp hồng pastel 11 bông buộc nơ siêu xinh',
        },
        {
            id: 53,
            status: 1, 
            title: 'Hộp hoa sáp Hàn Quốc',
            category: "HOA SÁP",
            img: 'assets/img/products/hoasap5.jpg',
            price: 385000,
            desc: 'Hộp hoa sáp Hàn Quốc tone hồng gắn nơ làm quà tặng sinh nhật sang chảnh',
        },
        {
            id: 54,
            status: 1, 
            title: 'Bear blue',
            category: "HOA SÁP",
            img: 'assets/img/products/hoasap6.jpg',
            price: 370000,
            desc: 'Bó hoa sáp gấu thơm dễ thương tone xanh',
        },
        {
            id: 55,
            status: 1, 
            title: 'Giỏ hoa sáp',
            category: "HOA SÁP",
            img: 'assets/img/products/hoasap7.jpg',
            price: 365000,
            desc: 'Giỏ hoa sáp mix nhiều loại tone xanh mừng khai trương, sinh nhật, sự kiện',
        },
        {
            id: 56,
            status: 1, 
            title: 'Bó Tulip hồng',
            category: "HOA SÁP",
            img: 'assets/img/products/hoasap8.jpg',
            price: 260000,
            desc: 'Bó hoa sáp Tulip hồng 9 bông xinh xắn',
        },
        {
            id: 57,
            status: 1, 
            title: 'Sunflower',
            category: "HOA SÁP",
            img: 'assets/img/products/hoasap9.jpg',
            price: 330000,
            desc: 'Mùa tốt nghiệp tới, một bó hoa hướng dương sẽ là một lựa chọn tuyệt vời mang nhiều ý nghĩa',
        },
        {
            id: 58,
            status: 1, 
            title: 'Pink Box',
            category: "HOA SÁP",
            img: 'assets/img/products/hoasap10.jpg',
            price: 390000,
            desc: 'Box hoa sáp cao cấp tone hồng mix nhiều loại được decor siêu xinh',
        },
        {
            id: 59,
            status: 1, 
            title: 'Hoa sáp trắng',
            img: 'assets/img/products/hoasap11.jpg',
            category: 'HOA SÁP',
            price: 260000,
            desc: 'Bó hoa sáp trắng mix cùng hoa bi phù hợp cho cả nam và nữ'
        },
        {
            id: 60,
            status: 1, 
            title: 'Blackpink',
            img: 'assets/img/products/hoasap12.jpg',
            category: 'HOA SÁP',
            price: 280000,
            desc: 'Bó hoa sáp thơm tone hồng kết hợp cùng vải voan làm quà sinh nhật'
        },
        {
            id: 61,
            status: 1, 
            title: 'Hoa hồng lẻ trong bong bóng (hồng)',
            img: 'assets/img/products/hoale1.png',
            category: 'HOA LẺ',
            price: 80000,
            desc: 'Khám phá vẻ đẹp tinh tế và sang trọng với sản phẩm "Hoa Hồng Lẻ Trong Bong Bóng". Đây là một món quà độc đáo và hoàn hảo để thể hiện tình cảm đặc biệt của bạn.'
        },
        {
            id: 62,
            status: 1, 
            title: 'Hoa hồng lẻ trong bong bóng (xanh)',
            img: 'assets/img/products/hoale2.png',
            category: 'HOA LẺ',
            price: 80000,
            desc: 'Khám phá vẻ đẹp tinh tế và sang trọng với sản phẩm "Hoa Hồng Lẻ Trong Bong Bóng". Đây là một món quà độc đáo và hoàn hảo để thể hiện tình cảm đặc biệt của bạn.'
        },
        {
            id: 63,
            status: 1, 
            title: 'Hướng dương kẽm nhung lẻ',
            img: 'assets/img/products/hoale3.jpg',
            category: 'HOA LẺ',
            price: 30000,
            desc: 'Hướng Dương Kẽm Nhung Lẻ là sự kết hợp hoàn hảo giữa vẻ đẹp tự nhiên và độ bền bỉ của chất liệu cao cấp. Đây không chỉ là món quà tuyệt vời mà còn là lựa chọn lý tưởng để trang trí cho không gian sống thêm phần rực rỡ và ấm áp.'
        },
        {
            id: 64,
            status: 1, 
            title: 'Hoa cúc kẽm nhung lẻ',
            img: 'assets/img/products/hoale4.jpg',
            category: 'HOA LẺ',
            price: 30000,
            desc: 'Hoa cúc kẽm nhung lẻ là một sản phẩm thủ công độc đáo, được làm từ những sợi kẽm nhung mềm mại, mô phỏng hình ảnh hoa cúc một cách sống động và tinh tế. Mỗi bông hoa được tạo tác tỉ mỉ, mang đến vẻ đẹp bình dị và mộc mạc, tô điểm cho không gian thêm tươi sáng và sinh động.'
        },
        {
            id: 65,
            status: 1, 
            title: 'Hoa hồng lẻ trong bong bóng',
            img: 'assets/img/products/hoale1',
            category: 'HOA LẺ',
            price: 80000,
            desc: 'Khám phá vẻ đẹp tinh tế và sang trọng với sản phẩm "Hoa Hồng Lẻ Trong Bong Bóng". Đây là một món quà độc đáo và hoàn hảo để thể hiện tình cảm đặc biệt của bạn.'
        },
        {
            id: 66,
            status: 1, 
            title: 'Hoa hồng lẻ trong bong bóng',
            img: 'assets/img/products/hoale1',
            category: 'HOA LẺ',
            price: 80000,
            desc: 'Khám phá vẻ đẹp tinh tế và sang trọng với sản phẩm "Hoa Hồng Lẻ Trong Bong Bóng". Đây là một món quà độc đáo và hoàn hảo để thể hiện tình cảm đặc biệt của bạn.'
        },
        {
            id: 67,
            status: 1, 
            title: 'Hoa hồng lẻ trong bong bóng',
            img: 'assets/img/products/hoale1',
            category: 'HOA LẺ',
            price: 80000,
            desc: 'Khám phá vẻ đẹp tinh tế và sang trọng với sản phẩm "Hoa Hồng Lẻ Trong Bong Bóng". Đây là một món quà độc đáo và hoàn hảo để thể hiện tình cảm đặc biệt của bạn.'
        },
        {
            id: 68,
            status: 1, 
            title: 'Hoa hồng lẻ trong bong bóng',
            img: 'assets/img/products/hoale1',
            category: 'HOA LẺ',
            price: 80000,
            desc: 'Khám phá vẻ đẹp tinh tế và sang trọng với sản phẩm "Hoa Hồng Lẻ Trong Bong Bóng". Đây là một món quà độc đáo và hoàn hảo để thể hiện tình cảm đặc biệt của bạn.'
        },
        {
            id: 69,
            status: 1, 
            title: 'Hoa hồng lẻ trong bong bóng',
            img: 'assets/img/products/hoale1',
            category: 'HOA LẺ',
            price: 80000,
            desc: 'Khám phá vẻ đẹp tinh tế và sang trọng với sản phẩm "Hoa Hồng Lẻ Trong Bong Bóng". Đây là một món quà độc đáo và hoàn hảo để thể hiện tình cảm đặc biệt của bạn.'
        },
        {
            id: 70,
            status: 1, 
            title: 'Hoa hồng lẻ trong bong bóng',
            img: 'assets/img/products/hoale1',
            category: 'HOA LẺ',
            price: 80000,
            desc: 'Khám phá vẻ đẹp tinh tế và sang trọng với sản phẩm "Hoa Hồng Lẻ Trong Bong Bóng". Đây là một món quà độc đáo và hoàn hảo để thể hiện tình cảm đặc biệt của bạn.'
        },
        {
            id: 71,
            status: 1, 
            title: 'Hoa hồng lẻ trong bong bóng',
            img: 'assets/img/products/hoale1',
            category: 'HOA LẺ',
            price: 80000,
            desc: 'Khám phá vẻ đẹp tinh tế và sang trọng với sản phẩm "Hoa Hồng Lẻ Trong Bong Bóng". Đây là một món quà độc đáo và hoàn hảo để thể hiện tình cảm đặc biệt của bạn.'
        },
        {
            id: 72,
            status: 1, 
            title: 'Hoa hồng lẻ trong bong bóng',
            img: 'assets/img/products/hoale1',
            category: 'HOA LẺ',
            price: 80000,
            desc: 'Khám phá vẻ đẹp tinh tế và sang trọng với sản phẩm "Hoa Hồng Lẻ Trong Bong Bóng". Đây là một món quà độc đáo và hoàn hảo để thể hiện tình cảm đặc biệt của bạn.'
        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Hoàng Gia Bảo",
            phone: "hgbaodev",
            password: "123456",
            address: 'https://github.com/hgbaodev',
            email: 'musicanime2501@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Trần Nhật Sinh",
            phone: "0123456789",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();
window.onload = deleteProduct(id);
